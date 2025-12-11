---
title: Comments
---

A *comment* is essentially a *note* in a piece of code. It's used to add
human-readable information about the code, and is completely ignored by the
C# compiler.

## Uses of comments

- To explain the purpose of a piece of code.
- Providing links to related resources.
- To temporarily disable a piece of code during debugging (though really, you
  should use a version control system for this)!
- To leave reminders or TODOs for future work.
- To document functions, classes, and other code structures - we usually use
  a special form of comment, called a *doc comment*, for this.

## What we *shouldn't* use comments for

- To explain *what* the code is doing - the code itself should be clear
  enough for that. If you find yourself needing to add comments to explain
  what the code does, consider rewriting the code to make it clearer.
- To justify bad coding practices. If you find yourself needing to add a
  comment to explain why you did something in a certain way, consider
  whether there's a better way to do it.
- To add unnecessary information that doesn't add value to the code.
- To rage at other developers for their bad design decisions (I know, we've
  all been there).

## Single line comments

We can make a single-line comment in C# by using two forward slashes (`//`).  
Anything *after* the slashes on that line is part of the comment and will be
ignored by the C# compiler.

```cs
// This is a single-line comment in C#
Console.WriteLine("Hello, World!"); // This comment is after code
```

## Multi-line comments

We can also do multi-line comments - these are comments that can span multiple
lines without needing to start a new comment on each line.

We do this by starting the comment with `/*` and ending it with `*/`:

```cs
/*
This is a multi-line comment in C#
It can span multiple lines
*/
Console.WriteLine( /* we can also do this */ "Hello, World!"); 
```

