---
title: Comments
---

A *comment* is a piece of text in source code that *isn't executed* - it's
completely ignored by the compiler.

## The uses of comments

We can use comments for explaining parts of our code. Because the computer
ignores them, we can write anything we want in comments.

## Single-line comments

In C, we can create a single-line comment using two forward slashes
(`//`). Anything after the `//` on that line is ignored by the compiler.

For example:

```c
// This is a comment - the compiler ignores it
int main(int argc, char* argv[]) {
    // This comment is inside the main function
    return 0; // This comment is after a statement
}
```

## Multi-line comments

C also supports multi-line comments. These start with `/*` and end with `*/`.

Anything between these markers is ignored by the compiler.

For example:

```c
/*
   This is a multi-line comment.
   It can span multiple lines.
*/
int main(int argc, char* argv[]) {
    /* This is another multi-line comment
       inside the main function */
    return 0;
}
```

You can also use multi-line comments for comments *inside* a line of code, like this:

```c
int main(int argc, char* argv[]) {
    printf(/*print whatever you like*/ "Hello, World!");
    return 0;
}
```

Generally, I would discourage using comments inside lines of code, as it can
make the code quite messy!

## When *not* to use comments

You shouldn't use comments to:
- Explain *what* the code is doing - the code should be clear enough to explain
  itself.
- Leave notes to yourself or others about *how* to improve the code - use a
  version control system like Git for that.
- Comment out large blocks of code that you don't want to run - use version
  control for that too!
- Complain about your annoying coworker who keeps breaking the build (well,
  maybe you can do that sometimes...)

In general, I don't think you should write comments. Except in very rare
circumstances. See [this video by CodeAesthetic](https://www.youtube.com/watch?v=Bf7vDBBOBUA).

