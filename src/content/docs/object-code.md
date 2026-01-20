---
title: Object code
---

> Note: there is technically a difference between "object code" and "machine
> code", but in this document, we'll treat them as the same thing for
> simplicity.  
> Object code is the output of a compiler before linking, while
> machine code is the final executable code.  
> Also, "object code" is sometimes executed by the operating system and not
> directly by the hardware, but again, we'll ignore that distinction here.

## What is object code?

Object code is essentially the compiled version of a program, translated into a
low-level language that the computer's CPU can understand and execute directly. 

This low-level language is often referred to as *machine code* or *machine
language*.

When you write a program in a high-level programming language (like C, C++, or
Rust), you typically write it in a way that's easy for humans to read and
understand. However, computers can't directly execute this high-level code - as
there's no way that the CPU could be expected to understand
[*every programming language in this list*](
https://en.wikipedia.org/wiki/List_of_programming_languages).

To make the program executable, we need to convert it into a form that the CPU
can understand. We do this using a [compiler](/compiler), which translates the
high-level code into object code (machine code).

## Summary

- [Source code](/source-code) is the human-readable code that we write.
- A [compiler](/compiler) translates source code into object code (machine
  code).
- Object code is the low-level code that the CPU can execute directly.

