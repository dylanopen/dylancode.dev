---
title: There's More to Errors than NULL and Exceptions
---

> The Billion Dollar Mistake.

---

Although, as programmers, we hope our program works perfectly with no errors, that unfortunately isn't always possible.

The real world is full of invariance, edge-cases and, let's be honest, null-pointer-exceptions.

But what actually led to this? And why does it keep breaking production?

---

In the *dark ages* of programming, pre-1960s, there really wasn't anything built in to programming languages to manage errors.

If something went wrong, the program would just crash.

This made sense - originally, computers were made