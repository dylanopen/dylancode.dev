build-html:
    cargo run --release

generate-flashcards: build-html
    python3 generate-flashcards.py

git-push: generate-flashcards && build-html
    git push
