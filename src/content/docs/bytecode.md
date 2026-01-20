---
title: Bytecode
---

*Bytecode* is an 'intermediate representation' of code.

Instead of directly translating high-level code (like Python or Java) into
machine code that the CPU can execute, the high-level code is first compiled
into bytecode.

This bytecode is fairly low-level (it mostly consists of simple instructions
that a virtual machine can understand), but it's not specific to any particular
hardware architecture.

## How bytecode compilers+interpreters work

When you run a program written in a language that uses bytecode (like Java or
Python), the following steps usually happen:

1. The high-level code is compiled into bytecode by a compiler.
1. The bytecode is then executed by a virtual machine (VM) or interpreter.

So you can see that actually, bytecode languages are kind of a hybrid between
compiled and interpreted languages!

## Advantages of bytecode

- **Portability**: you've probably heard of Java's slogan 'write once, run
  anywhere'. And even though it's often altered to 'write once, debug
  everywhere'... the original idea still stands - that Java's bytecode can run
  on any platform that has a Java Virtual Machine (JVM) installed.
- **Performance**: bytecode can be optimized by the virtual machine at runtime,
  which can lead to better performance *compared to interpreted languages*.
- **Security**: it runs under a virtual machine, which might give a sandboxed
  environment that could prevent certainn malware attacks (or just prevent
  poorly written code from crashing your entire system).
- **Easier debugging**: bytecode can retain more information about the original
  source code (like variable names, line numbers, etc), which can make debugging
  easier than debugging a fully compiled binary (anyone who's used `gdb` before
  will understand :sigh:)

## Disadvantages of bytecode

- It's slower than native machine code, since it has to be interpreted or
  compiled at runtime by the virtual machine.
- It requires a virtual machine or interpreter to run, which adds an extra layer
  of complexity.
- All users need to install the **correct** virtual machine (interpreter) for
  the bytecode to run, which can lead to compatibility issues and general
  annoyance.
- It can often be much less efficient in terms of RAM usage (which in this day,
  isn't ideal... $500 DDR5 anyone?)
- Bytecode can be reverse-engineered more easily than native machine code,
  so if a company wants to keep their code closed source, bytecode might not be
  the best choice.

## Examples of bytecode languages

- Java
- Python
- C# and other .NET languages

