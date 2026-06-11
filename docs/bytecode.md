# Bytecode

*Bytecode* is an 'intermediate representation' of code.

Instead of directly translating high-level code (like Python or Java) into
machine code that the CPU can execute, the high-level code is first compiled
into bytecode.

This bytecode is fairly low-level (it mostly consists of simple instructions
that a [[virtual machine]] can understand), but it's not specific to any particular
[[hardware]] architecture.

## How bytecode compilers+interpreters work

When you run a program written in a language that uses bytecode (like Java or
Python), the following steps usually happen:

1. The high-level code is compiled into bytecode by a [[compiler]].
2. The bytecode is then executed by a [[virtual machine]] (VM)

So you can see that actually, bytecode languages are kind of a hybrid between
compiled and interpreted languages!

## Advantages of bytecode

- **Portability**: you've probably heard of Java's slogan 'write once, run
  anywhere'. And even though it's often altered to 'write once, debug
  everywhere'... the original idea still stands - that Java's bytecode can run
  on any platform that has a Java [[virtual machine]] (JVM) installed.
- **Performance**: bytecode can be optimized by the [[virtual machine]] at runtime,
  which can lead to better performance *compared to interpreted languages*.
- **Security**: it runs under a [[virtual machine]], which might give a sandboxed
  environment that could prevent certainn malware attacks (or just prevent
  poorly written code from crashing your entire system).
- **Easier debugging**: bytecode can retain more information about the original
  [[source code]] (like variable names, line numbers, etc), which can make debugging
  easier than debugging a fully compiled binary (anyone who's used `gdb` before
  will understand :sigh:)

> Bytecode can be used if the code needs to run on multiple platforms, so needs to be platform-independent.

## Disadvantages of bytecode

- It's slower than native machine code, since it has to be interpreted or
  compiled at runtime by the [[virtual machine]].
- It requires a [[virtual machine]] or [[interpreter]] to run, which adds an extra layer
  of complexity.
- All users need to install the **correct** [[virtual machine]] ([[interpreter]]) for
  the bytecode to run, which can lead to compatibility issues and general
  annoyance.
- It can often be much less efficient in terms of RAM usage (which in this day,
  isn't ideal... $600 DDR5 anyone?)
- Bytecode can be reverse-engineered more easily than native machine code,
  so if a company wants to keep their code closed source, bytecode might not be
  the best choice.

## Examples of bytecode languages

- Java
- Python
- C# and other .NET languages

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Question | Answer |
| What is bytecode? | Bytecode is an 'intermediate representation' of code, compiled from high-level code and executed by a virtual machine. |
| How do bytecode compilers and interpreters work? | 1. High-level code is compiled into bytecode by a compiler. 2. The bytecode is executed by a virtual machine. |
| What is a key advantage of bytecode related to running on different platforms? | Portability: Bytecode can run on any platform with a compatible virtual machine (e.g., Java's 'write once, run anywhere'). |
| How does bytecode performance compare to interpreted languages? | Bytecode can be optimized by the virtual machine at runtime, leading to better performance compared to interpreted languages. |
| What security advantage does bytecode provide? | It runs under a virtual machine, which can provide a sandboxed environment that prevents certain malware attacks or crashes. |
| Why might debugging be easier with bytecode than with fully compiled binaries? | Bytecode can retain more information about the original source code, such as variable names and line numbers. |
| What is a key disadvantage of bytecode speed compared to native machine code? | It is slower than native machine code because it must be interpreted or compiled at runtime by the virtual machine. |
| What is a disadvantage related to running bytecode on a user's system? | It requires a specific virtual machine or interpreter to be installed, which can lead to compatibility issues. |
| How does bytecode compare to native machine code in terms of reverse engineering? | Bytecode can be reverse-engineered more easily than native machine code. |
| Give three examples of languages that use bytecode. | Java, Python, C# and other .NET languages. |

