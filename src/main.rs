use std::{fs, io, path::Path};

use indexmap::IndexMap;
use walkdir::WalkDir;

fn generate_doc_html(markdown_data: String) -> String {
    let cmark_markdown_data = markdown_data.clone();
    let parser = pulldown_cmark::Parser::new_ext(&cmark_markdown_data, pulldown_cmark::Options::all());

    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);

    let title = markdown_data.lines().next().unwrap_or("Documentation").trim_start_matches("# ").to_string();

    let template = include_str!("../doc-template.html");
    let template = template.replace("{{title}}", &title);

    let mut template = template.replace("{{content}}", &html_output);
while template.contains("<span class=\"math math-inline\">") {
        let start = template.find("<span class=\"math math-inline\">").unwrap();
        let end = template[start..].find("</span>").unwrap() + start + "</span>".len();
        let math_content = &template[start + "<span class=\"math math-inline\">".len()..end - "</span>".len()];
        let new_math_content = format!("<im>{}</im>", math_content);
        template.replace_range(start..end, &new_math_content);
    }
    while template.contains("<span class=\"math math-display\">") {
        let start = template.find("<span class=\"math math-display\">").unwrap();
        let end = template[start..].find("</span>").unwrap() + start + "</span>".len();
        let math_content = &template[start + "<span class=\"math math-display\">".len()..end - "</span>".len()];
        let new_math_content = format!("<ma>{}</ma>", math_content);
        template.replace_range(start..end, &new_math_content);
    }

    template
}

#[derive(Debug)]
struct SidebarItem {
    name: String,
    link: String,
    children: IndexMap<String, SidebarItem>,
}

// Thanks to https://stackoverflow.com/a/65192210
fn copy_dir_all(src: impl AsRef<Path>, dst: impl AsRef<Path>) -> io::Result<()> {
    fs::create_dir_all(&dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let ty = entry.file_type()?;
        if ty.is_dir() {
            copy_dir_all(entry.path(), dst.as_ref().join(entry.file_name()))?;
        } else {
            fs::copy(entry.path(), dst.as_ref().join(entry.file_name()))?;
        }
    }
    Ok(())
}

fn main() {
    fs::remove_dir_all("build").ok();
    fs::create_dir_all("build").expect("Failed to create build directory");
    copy_dir_all("js", "build/js").unwrap();
    copy_dir_all("css", "build/css").unwrap();

    for entry in WalkDir::new("docs") {
        let entry = entry.expect("Failed to read directory entry");
        let path = entry.path();

        if path.extension().and_then(|s| s.to_str()) == Some("md") {
            let markdown_data = fs::read_to_string(path).expect("Failed to read markdown file");
            let html_content = generate_doc_html(markdown_data);

            let filename = path.to_str().unwrap();
            let output_folder = format!("build/{}", filename.replace(".md", "").replace("docs/", ""));
            fs::create_dir_all(&output_folder).expect("Failed to create output directory");
            let output_path = format!("{}/index.html", output_folder);
            fs::write(output_path, html_content).expect("Failed to write HTML file");
        }

        if fs::exists("build/index/index.html").unwrap() {
            fs::copy("build/index/index.html", "build/index.html").expect("Failed to copy index.html");
        }
        if fs::exists("build/404/index.html").unwrap() {
            fs::copy("build/404/index.html", "build/404.html").expect("Failed to copy 404.html");
        }
    }

    let sidebar_items = generate_pageindex();
    let sidebar_json = generate_pageindex_json(&sidebar_items);
    fs::write("build/js/pageindex.js", format!("pageIndex={{\n{}\n}}", sidebar_json))
        .expect("Failed to write pageindex.js");
}

fn generate_pageindex() -> SidebarItem {
    let pageindex_md = fs::read_to_string("docs/pageindex.md").expect("Failed to read pageindex.md");
    let mut sidebar_items = SidebarItem {
        name: "Find a note".to_string(),
        link: "/".to_string(),
        children: IndexMap::new(),
    };
    let mut category_stack: Vec<String> = Vec::new();
    let mut current_id = 0;
    for line in pageindex_md.lines() {
        // let spaces = the thing before the '- ' and name is the thing after the '- '
        let spaces = line.chars().take_while(|c| c.is_whitespace()).collect::<String>();
        let mut link = line.trim_start().trim_start_matches("- ").to_string();
        if link.is_empty() {
            continue;
        }
        let name;
        if fs::exists(format!("docs/{}.md", link)).unwrap() {
            name = fs::read_to_string(format!("docs/{}.md", link))
                .expect("Failed to read markdown file")
                .lines().next()
                .unwrap_or(&link)
                .trim_start_matches("# ").to_string();
            } else {
                name = link.clone();
                link = format!("___{}", current_id);
        }
        let depth = spaces.len() / 4;
        while category_stack.len() > depth {
            category_stack.pop();
        }
        category_stack.push(link.clone());
        let mut parent_item = &mut sidebar_items;
        for category in &category_stack[..category_stack.len() - 1] {
            if let Some(parent) = parent_item.children.get_mut(category) {
                parent_item = parent;
            } else {
                panic!("Category '{}' not found in sidebar items", category);
            }
        }
        parent_item.children.insert(link.clone(), SidebarItem {
            name: name.clone(),
            link: format!("/{}", link),
            children: IndexMap::new(),
        });
        current_id += 1;
    }
    sidebar_items
}

fn generate_pageindex_json(sidebar_items: &SidebarItem) -> String {
    // NO SERDE
    let mut json = String::new();
    for item in sidebar_items.children.values() {
        if item.children.is_empty() {
            json.push_str(format!("\"{}\":\"{}\",\n", item.link, item.name).as_str());
        } else {
            json.push_str(format!("\"{}\":{{\n", item.link).as_str());
            json.push_str(format!("\"_name\":\"{}\",\n", item.name).as_str());
            json.push_str(generate_pageindex_json(item).as_str());
            json.push_str("},\n");
        }
    }
    json
}

