# This script generates a CSV from all flashcards in the compiled HTML files in the `build` directory.
# You need to run `cargo run --release` first.

import os
import re
import csv

def extract_flashcards_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regular expression to match flashcards
    flashcard_pattern = re.compile(r'<div class="flashcard">\s*<div class="question">(.*?)</div>\s*<div class="answer">(.*?)</div>\s*</div>', re.DOTALL)
    
    flashcards = []
    for match in flashcard_pattern.finditer(content):
        question = match.group(1).strip()
        answer = match.group(2).strip()
        flashcards.append((question, answer))
    
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
        writer = csv.writer(csvfile)
        writer.writerow(['Question', 'Answer'])  # Write header
        writer.writerows(flashcards)


if __name__ == "__main__":
    main()
