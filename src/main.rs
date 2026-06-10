use indexmap::IndexMap;
use regex::{Captures, Regex};
use std::collections::HashMap;
use std::path::Path;
use std::{fs, io};
use walkdir::WalkDir;

/// Represents a node within the dynamic site navigation tree.
#[derive(Debug)]
struct SidebarItem {
    name: String,
    link: String,
    children: IndexMap<String, SidebarItem>,
}

fn main() {
    // 1. Prepare environment
    setup_build_directory().expect("Failed to initialize build workspace");

    // 2. Scan and parse document titles to construct the global routing map
    let note_map = build_note_map("docs");

    // 3. Compile markdown source files into individual static page indexes
    compile_markdown_docs("docs", &note_map);

    // 4. Generate system sidebar indexes and persist to static JS delivery asset
    generate_and_save_sidebar();
}

/// Prepares the target build workspace by resetting contents and copying static resources.
fn setup_build_directory() -> io::Result<()> {
    fs::remove_dir_all("build").ok();
    fs::create_dir_all("build")?;

    copy_dir_all("res", "build/")?;
    copy_dir_all("docs/res", "build/res")?;
    Ok(())
}

/// Scans the source folder to map original file tracks to their top-level `# Title`.
fn build_note_map(source_dir: &str) -> HashMap<String, String> {
    let mut note_map = HashMap::new();

    for entry in WalkDir::new(source_dir).into_iter().flatten() {
        let path = entry.path();
        let path_str = path.to_string_lossy().into_owned();

        if should_skip_file(&path_str) {
            continue;
        }

        let filename = path_str.replace(&format!("{}/", source_dir), "").replace(".md", "");
        if let Ok(markdown_data) = fs::read_to_string(path) {
            let title = extract_title(&markdown_data, &filename);
            note_map.insert(filename, title);
        }
    }
    note_map
}

/// Compiles all markdown notes into HTML files inside clean routing sub-directories.
fn compile_markdown_docs(source_dir: &str, note_map: &HashMap<String, String>) {
    let template = include_str!("../doc-template.html");

    for entry in WalkDir::new(source_dir).into_iter().flatten() {
        let path = entry.path();
        let path_str = path.to_string_lossy().into_owned();

        if should_skip_file(&path_str) {
            continue;
        }

        if let Ok(markdown_data) = fs::read_to_string(path) {
            let html_content = generate_doc_html(markdown_data, note_map, template);

            // Normalize disk path destination: Replace spaces with dashes
            let normalized_path = path_str.replace(" ", "-");
            let target_route = normalized_path
                .replace(".md", "")
                .replace(&format!("{}/", source_dir), "");

            let output_folder = format!("build/{}", target_route);
            fs::create_dir_all(&output_folder).expect("Failed to create layout structure");

            let output_file = format!("{}/index.html", output_folder);
            fs::write(output_file, html_content).expect("Failed to write static HTML file");
        }
    }

    // Clean up top-level index routing mirrors
    if Path::new("build/index/index.html").exists() {
        fs::copy("build/index/index.html", "build/index.html").ok();
    }
    if Path::new("build/404/index.html").exists() {
        fs::copy("build/404/index.html", "build/404.html").ok();
    }
}

/// Parses Markdown content, process wikilinks, compiles formulas, and textures layouts.
fn generate_doc_html(markdown_input: String, note_map: &HashMap<String, String>, template: &str) -> String {
    // Regex pattern detects matching wikilinks while capturing look-behind text blocks
    // Captures: Group 1 = Preceding Character, Group 2 = Core target path, Group 3 = Optional |Alias text
    let wiki_rx = Regex::new(r#"(.)?\[\[([^\]|]+)(?:\|([^\]]+))?\]\]"#).unwrap();

    let processed_markdown = wiki_rx.replace_all(&markdown_input, |caps: &Captures| {
        let prev_char = caps.get(1).map_or("", |m| m.as_str());
        let target_raw = &caps[2];
        let alias_opt = caps.get(3).map(|m| m.as_str());

        // Standardize: Replace spaces with dashes for target navigation link paths
        let url_target = target_raw.replace(" ", "-");

        let link_text = if let Some(alias) = alias_opt {
            alias.to_string()
        } else if let Some(title) = note_map.get(target_raw) {
            // Apply contextual lowercasing based on preceding characters
            if !prev_char.is_empty() && prev_char.chars().next().map_or(false, |c| c.is_alphanumeric() || c.is_whitespace()) {
                let mut chars = title.chars();
                chars.next().map_or(String::new(), |f| f.to_lowercase().collect::<String>() + chars.as_str())
            } else {
                title.clone()
            }
        } else {
            target_raw.to_string()
        };

        format!("{}[{}](/{})", prev_char, link_text, url_target)
    }).into_owned();

    // Parse Markdown to HTML via pulldown-cmark
    let parser = pulldown_cmark::Parser::new_ext(&processed_markdown, pulldown_cmark::Options::all());
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);

    let title = extract_title(&processed_markdown, "Documentation");
    let mut html = template.replace("{{title}}", &title).replace("{{content}}", &html_output);

// Sanitization Pass 1: Convert math formatting tags cleanly (with multi-line support)
    let initial_html = html.clone();

    let inline_math_rx = Regex::new(r#"(?s)<span class="math math-inline">(.*?)</span>"#).unwrap();
    html = inline_math_rx.replace_all(&html, "<im>$1</im>").into_owned();

    let display_math_rx = Regex::new(r#"(?s)<span class="math math-display">(.*?)</span>"#).unwrap();
    html = display_math_rx.replace_all(&html, "<ma>$1</ma>").into_owned();

    // Sanitization Pass 2: Canonicalize absolute relative URLs
    let href_rx = Regex::new(r#"<a href="([^"]+)"#).unwrap();
        html = href_rx.replace_all(&html, |caps: &Captures| {
            let link = &caps[1];
            if !link.starts_with("http") && !link.contains(':') && !link.starts_with('/') {
                format!(r#"<a href="/{}"#, link)
            } else {
                format!(r#"<a href="{}"#, link)
            }
        }).into_owned();

        html
        }

        /// Generates the full sidebar system and records it into the build's configuration.
        fn generate_and_save_sidebar() {
            let sidebar_items = generate_pageindex();
            let sidebar_json = generate_pageindex_json(&sidebar_items);
            fs::write("build/pageindex.js", format!("pageIndex={{\n{}\n}}", sidebar_json))
                .expect("Failed to write system sidebar engine script");
        }

/// Constructs structural sidebar nodes dynamically from `docs/pageindex.md` tracking assets.
fn generate_pageindex() -> SidebarItem {
    let pageindex_md = fs::read_to_string("docs/pageindex.md").unwrap_or_default();
    let mut sidebar_root = SidebarItem {
        name: "Find a note".to_string(),
        link: "/".to_string(),
        children: IndexMap::new(),
    };

    // NEW ROBUST REGEX:
    // Group 1 (\s*)  -> Captures leading indentation spaces
    // Then it matches EITHER:
    //   - [[Target|Optional Alias]] (Groups 2 and 3)
    //   - OR any plain text trailing the item dash (Group 4)
    let list_item_rx = Regex::new(r#"^(\s*)-\s+(?:\[\[([^\]|]+)(?:\|([^\]]+))?\]\]|(.*))"#).unwrap();
    let mut category_stack: Vec<String> = Vec::new();
    let mut current_id = 0;

    for line in pageindex_md.lines() {
        if let Some(caps) = list_item_rx.captures(line) {
            let spaces = &caps[1];
            
            // Adjust the tree depth before reading the item type
            let depth = spaces.len() / 4;
            while category_stack.len() > depth {
                category_stack.pop();
            }

            let mut name = String::new();
            let mut link = String::new();

            if let Some(target_match) = caps.get(2) {
                // CASE 1: The item is a structural Wikilink
                let target_raw = target_match.as_str();
                let alias_opt = caps.get(3).map(|m| m.as_str());
                
                let doc_path = format!("docs/{}.md", target_raw);
                let file_exists = Path::new(&doc_path).exists();

                name = if let Some(alias) = alias_opt {
                    alias.to_string()
                } else if file_exists {
                    let md_content = fs::read_to_string(&doc_path).unwrap_or_default();
                    extract_title(&md_content, target_raw)
                } else {
                    target_raw.to_string()
                };

                link = target_raw.replace(" ", "-");
                if !file_exists && alias_opt.is_none() {
                    link = format!("___{}", current_id);
                }
            } else if let Some(plain_match) = caps.get(4) {
                // CASE 2: The item is a plain text heading category
                let plain_text = plain_match.as_str().trim();
                if plain_text.is_empty() {
                    continue; // Skip completely blank bullet lines
                }
                name = plain_text.to_string();
                link = format!("___{}", current_id);
            }

            category_stack.push(link.clone());

            // Traverse down to the appropriate nested parent
            let mut parent_item = &mut sidebar_root;
            for category in &category_stack[..category_stack.len() - 1] {
                parent_item = parent_item.children.get_mut(category)
                    .expect("Structural sync failure tracking structural layout tree");
            }

            parent_item.children.insert(link.clone(), SidebarItem {
                name,
                link: format!("/{}", link),
                children: IndexMap::new(),
            });
            current_id += 1;
        }
    }
    sidebar_root
}
/// Recursively serializes the navigation tree data structures without using Serde.
fn generate_pageindex_json(sidebar_items: &SidebarItem) -> String {
    let mut json = String::new();
    for item in sidebar_items.children.values() {
        if item.children.is_empty() {
            json.push_str(&format!("\"{}\":\"{}\",\n", item.link, item.name));
        } else {
            json.push_str(&format!("\"{}\":{{\n", item.link));
            json.push_str(&format!("\"_name\":\"{}\",\n", item.name));
            json.push_str(&generate_pageindex_json(item));
            json.push_str("},\n");
        }
        }
    json
}

/// Helper: Extracts the first structural `# H1 Header` title line out of a target markdown string.
fn extract_title(markdown: &str, fallback: &str) -> String {
    markdown.lines()
        .next()
        .map(|line| line.trim_start_matches("# ").trim().to_string())
        .filter(|title| !title.is_empty())
        .unwrap_or_else(|| fallback.to_string())
}

/// Helper: Identifies system path tracks or directory configurations that should be skipped.
fn should_skip_file(path: &str) -> bool {
    path.contains("/.") || path.contains("/daily/") || path.contains("/excalidraw/") || !path.ends_with(".md") || path.ends_with("pageindex.md")
}

/// Helper: Thread-safe recursive directory replication.
fn copy_dir_all(src: impl AsRef<Path>, dst: impl AsRef<Path>) -> io::Result<()> {
    fs::create_dir_all(&dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let file_type = entry.file_type()?;
        if file_type.is_dir() {
            copy_dir_all(entry.path(), dst.as_ref().join(entry.file_name()))?;
        } else {
            fs::copy(entry.path(), dst.as_ref().join(entry.file_name()))?;
        }
    }
    Ok(())
}
