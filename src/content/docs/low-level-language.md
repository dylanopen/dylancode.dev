---
title: Low level language
---

A *low level programming language* is a programming language where you have
more direct control over the computer's hardware. This means you can write code
that interacts closely with the CPU, memory, and other hardware components.

Often, each instruction you write in a low level language corresponds closely to
a single machine code instruction that the CPU can execute directly. This allows
for really efficient and optimized code, but it also means that low level
languages can be much harder to write programs in!

## Examples of low level languages

There are only two low level languages:
- **Machine code** - the binary instructions that the CPU executes directly.
- **Assembly language** - a human-readable representation of machine code, using
  instructions (like `MOV`, `ADD`, `SUB`, etc) to represent the binary
  'opcodes'.

## Uses of low level languages

Low level programming languages are used in:
- Writing operating systems and system software
- Writing device drivers
- Embedded systems programming
- Performance-critical applications (like game engines, graphics rendering, etc)
- Reverse engineering and security research

That last one is because, often, a program is compiled down to machine code, so
if you want to understand how it works, you need to read the low level code!

> "Everything is open-source if you know assembly" ;)

## Advantages of low-level languages

- High performance (runs fast) IF you know what you're doing
- Complete control over hardware

## Disadvantages of low-level languages

- Hard to learn and use
- Time-consuming to write and maintain
- Not portable across different hardware architectures
  - This one is key. If you write some assembly code for an x86 CPU, it won't
    run on, say, an ARM or RISC-V CPU without being rewritten. This is unlike
    high level languages, which can often be compiled or interpreted on
    different architectures with little to no changes (thanks to the LLVM
    project).

