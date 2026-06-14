# This script generates a CSV from all flashcards in the compiled HTML files in the `build` directory.
# You need to run `cargo run --release` first.

import os
import re
import csv

def extract_flashcards_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Stored as a table under a heading `<h2><a href="/flashcards">flashcards</a></h2>` (case insensitive)
    flashcard_pattern = re.compile(r'<h2><a href="/flashcards">flashcards</a></h2>.*?<table.*?>(.*?)</table>', re.DOTALL | re.IGNORECASE)

    
    flashcards = []
    for match in flashcard_pattern.finditer(content):
        table_content = match.group(1)
        # Extract rows from the table
        row_pattern = re.compile(r'<tr>(.*?)</tr>', re.DOTALL)
        for row_match in row_pattern.finditer(table_content):
            row_content = row_match.group(1)
            # Extract cells from the row
            cell_pattern = re.compile(r'<td>(.*?)</td>', re.DOTALL)
            cells = cell_pattern.findall(row_content)
            if len(cells) == 2:
                # Keep all HTML, but replace <im> tags with <anki-mathjax> tags.
                question = cells[0].replace('<im>', '\\(').replace('</im>', '\\)')
                answer = cells[1].replace('<im>', '\\(').replace('</im>', '\\)')
                if question == "Question" and answer == "Answer":
                    continue  # skip the header row because it's useless
                # title is the full folder path
                title = os.path.relpath(file_path, 'build').replace(os.sep, '/').replace("/index.html", "")
                flashcards.append((question, answer, title))
    
    return flashcards

def main():
    flashcards = []
    
    # Walk through the build directory and extract flashcards from HTML files
    for root, dirs, files in os.walk('build'):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                flashcards.extend(extract_flashcards_from_html(file_path))
    
    # Write flashcards to a CSV file
    with open('flashcards.csv', 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile, delimiter='\t')
        writer.writerows(flashcards)


if __name__ == "__main__":
    main()

