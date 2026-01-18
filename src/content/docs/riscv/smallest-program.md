---
title: Smallest program
---

To get started with writing RISC-V assembly, we need a few things:
- A `text` section, to hold the actual program code.
- A `main` label, to indicate where the program starts.
- An `ecall` instruction, to terminate the program (or an infinite halt).

## The smallest RISC-V code

This program here will compile just fine and run without errors:

```asm
.text
main:
    li x17, 10
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x17%2C%2010%0A%20%20%20%20ecall)

Let's break it down.

## The `.text` section

In the Von Neumann architecture, the code for a program is stored in memory,
right alongside the data it is using.

To tell the assembler that the following lines are ***code*** and not ***data***
we use the `.text` directive:

```asm
.text
```

This has to go before any code instructions, or we'll get an error:

```
[E18] Error: Can't use instruction statements while in section None
   ╭─[ assembly:2:5 ]
 2 │     li x17, 10
   │     ──┬──  
   │       ╰──── This statement can't be used in the current section
   │ Help: Consider changing the section to Text, using .text
   │ Note: No section previously started
───╯
```

## The `main` label

The processor won't know where to start executing the program unless we tell it.

We use a [label](/riscv/labels) to indicate the starting point of the program:

```asm
main:
```

And, as it's under the `.text` section:

```asm
.text
main:
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A)

You might think this should work now, but it won't quit for one reason:
> If there's no instructions after a label, it can't actually create the `main`
> label in the output binary, because there's nothing to attach it to!

It would give us this error:

```
Error: found end of input but expected \n, directive, instruction, or label
   ╭─[ assembly:2:6 ]
   │
 2 │ main:
   │      │ 
   │      ╰─ Unexpected input
───╯
```

So we need at least one instruction after the label.

Technically, this *could* be anything and it would **compile** fine. But to
*run* the program without errors, we need to tell the processor to exit.

If we don't tell it to exit, it will just continue executing whatever random
data is in memory after our program, which will likely lead to an error.

## The `ecall` instruction

To tell the processor to exit the program cleanly, we use the `ecall`
instruction:

```
ecall
```

Within the context of our program, it looks like this:

```asm
.text
main:
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20ecall)

`ecall` is an instruction that makes a system call to the operating system.

## The exit system call

You may thinkg we're now done, however, we need to actually tell it *which*
system call we want to make. To do that, we move a value into the `a7` (or
`x17`) register before the `ecall` instruction.

To move a value into a register, we use the `li` (load immediate) instruction.  
We'll cover how to use it in more detail later!

For exiting a program, the system call number is `10`. At least, it is for the
emulator we are using. So we would do this:

```asm
.text
main:
    li x17, 10
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x17%2C%2010%0A%20%20%20%20ecall)

In this case, it tells the operating system to terminate the program, so it
stops any garbage instructions that might be after it from being executed.

And there we have it! The smallest RISC-V program that compiles and runs
without errors.

Of course... the program doesn't *do* anything useful. But it's a start! All 
our future RISC-V programs will build on this basic structure, changing what's
after the `main:` label to do more interesting things.

