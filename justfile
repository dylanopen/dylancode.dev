build-html:
    cargo run --release

serve-html: build-html
    python -m http.server 4321 --directory build

generate-flashcards: build-html
    python3 generate-flashcards.py

git-push: generate-flashcards && build-html
    git push
