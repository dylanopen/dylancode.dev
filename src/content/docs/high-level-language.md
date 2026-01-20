---
title: High-level language
---

A *high-level programming language* is a programming language that is designed
to be easy for humans to read and write.

They create an *abstraction* over the low-level details of the computer's
hardware, so that programmers can focus on solving problems and building
software, rather than worrying about the nitty-gritty details of how the CPU and
memory work.

For example, instead of having to do this to print to the screen in assembly
language:

```asm
MOV AX, 0x0E        ; BIOS teletype function
MOV BX, 0x0007      ; Page number and attribute
MOV CX, 1           ; Number of characters to write
MOV DX, OFFSET msg  ; Offset of the string to print
INT 0x10            ; Call BIOS interrupt
```

> (not exactly, but you get the idea)

We can just do this in a high-level language like Python:

```python
print("Hello, world!")
```

You can probably see how this saves a tonne of time, and also means you don't
need to [make a rollercoaster tycoon in x86 assembly](https://en.wikipedia.org/wiki/RollerCoaster_Tycoon) xD

## Examples of high-level languages

- Python
- Java
- C#
- C
- JavaScript (not a real programming language, change my mind)
- Rust
- ...and almost [infinite others](https://en.wikipedia.org/wiki/List_of_programming_languages)

## Uses of high-level languages

Almost all [application software](/application-software) is written in
high-level programming languages, including:

- Web applications
- Mobile apps
- Desktop software
- Games
- Data analysis and machine learning
- and much more!

## Advantages of high-level languages

- Easy to learn and use
- Fast development time
- Portable across different hardware architectures
  - This is a big one. Most high-level languages can be compiled or interpreted
    on different architectures with little to no changes (thanks to projects
    like [LLVM](https://llvm.org/)).
- Large standard libraries and frameworks available
  - This means we don't always have to reinvent the wheel - we can use
    existing libraries to speed up development.
- Easier to read and maintain code

## Disadvantages of high-level languages

- Less control over hardware
- Potentially slower performance compared to low-level languages
- May require a runtime or interpreter to execute
- Less efficient memory usage
- Abstraction can sometimes lead to making mistakes if the programmer
  doesn't understand how the high-level constructs actually map to the low-level
  operations. This can also lead to performance issues if the programmer isn't
  aware of the underlying costs of certain high-level operations.
- Can be less suitable for system-level programming (like operating systems,
  device drivers, embedded systems, etc) where low-level control is often
  required.

