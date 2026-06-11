# Object code

> Note: there is technically a difference between "object code" and "machine
> code", but in this document, we'll treat them as the same thing for
> simplicity.  
> Object code is the output of a [[compiler]] before linking, while
> machine code is the final executable code.  
> Also, "object code" is sometimes executed by the [[operating system]] and not
> directly by the [[hardware]], but again, we'll ignore that distinction here.

## What is object code?

Object code is essentially the compiled version of a program, translated into a
low-level language that the computer's CPU can understand and execute directly. 

This low-level language is often referred to as *machine code* or *machine
language*.

When you write a program in a high-level programming language (like C, C++, or
Rust), you typically write it in a way that's easy for humans to read and
understand. However, computers can't directly execute this high-level code - as
there's no way that the CPU could be expected to understand
[[
https://en.wikipedia.org/wiki/List_of_programming_languages|*every programming language in this list*]].

To make the program executable, we need to convert it into a form that the CPU
can understand. We do this using a [[compiler]], which translates the
high-level code into object code (machine code).

## Summary

- [[source code|Source code]] is the human-readable code that we write.
- A [[compiler]] translates [[source code]] into object code (machine
  code).
- Object code is the low-level code that the CPU can execute directly.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| source code | Human-readable code that we write. |
| compiler | Translates source code into object code (machine code). |
| object code | Low-level code that the CPU can execute directly. |
| What does a compiler do? | Translates high-level source code into object code (machine code). |
| Why can't a CPU directly execute high-level programming languages? | The CPU cannot be expected to understand every programming language. |
| What is object code essentially? | The compiled version of a program, translated into a low-level language (machine code/machine language) that the computer's CPU can understand and execute directly. |
| In what form is object code often referred to? | Machine code or machine language. |
| What is the difference between object code and machine code in strict technical terms? | Object code is the output of a compiler before linking, while machine code is the final executable code. |
| How is object code sometimes executed? | Object code is sometimes executed by the operating system and not directly by the hardware. |

