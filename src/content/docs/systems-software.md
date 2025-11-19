---
title: Systems software
---

There are lots of types of system software which help 
- [Operating systems](/operating-systems)
- [Utility programs](/utility-programs)
- [Dynamic libraries](/dynamic-libraries)
- [Translators](/code-translators)

## Translators

- Translators are programs which convert code from one programming language
  into another.
- For example, a translator may convert high-level C code into low-level
  machine code which the computer can understand.

### Types of translators

- Compilers
- Interpreters
- Assemblers

### Compilers

- Compilers work by reading the whole source code and translating it into
  machine code, **before** the program is run or distributed to users.
- The result is an *executable file* which can be run directly by the CPU.

#### Positives of compilers

- Runs faster
- Can be optimized for specific hardware
- Can be shared without source code (e.g. proprietary software)
- Catches most errors before running

#### Negatives of compilers

- Compiliation takes time
- Not as easy to use a debugger

### Interpreters

- Interpreters work by reading the source code **line-by-line** and executing
  it directly.
- This means that the source code needs to be present every time the program is
  run.

#### Positives of interpreters

- Easier to debug
- More portable (can run on any system with the interpreter)
- No compilation time

#### Negatives of interpreters

- Slower execution
- Source code must be distributed (may expose proprietary code)
- More runtime errors (harder to catch in development)
- Requires interpreter to be installed:
  - May not be available on all systems
  - User needs to install the interpreter themselves
- Less optimization for specific hardware

### Assemblers

- Assemblers convert low-level assembly language code into (even lower level) 
  machine code.
- Assembly is specific to a particular CPU architecture, so the resulting
  machine code will only run on that architecture.

