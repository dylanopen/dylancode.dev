---
title: Setting registers
---

RISC-V has an `li` instruction, short for 'load immediate'.

It essentially writes a constant value to a register, for example, sets the
value of the `x5` register to `42`.

## Syntax

We can use the `li` instruction like this:

```asm
li <register>, <immediate value>
```

`<register>` needs to be a valid register name, and `<immediate value>` needs to
be a valid immediate value (a constant integer).

## Example

If we wanted to load the value `42` into register `x5`, we would write:

```asm
li x5, 42
```

Now, the value of `x5` is `42` - you can see this by using a simulator like
[Creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=).

## Pseudo-instruction

`li` isn't actually an instruction! It's what's called a *pseudo-instruction*.

Basically, when the assembler sees `li`, it translates it into a different
instruction (or multiple instructions) that actually do the work of loading the
immediate value into the register.

For small immediate values (like `42`), the assembler translates `li` into an
`addi` instruction that adds the immediate value to the zero register (`x0`),
which always contains `0`:

```asm
addi x5, x0, 42
```

That means that we could also write:

```asm
addi x5, x0, 42
```

...instead of using `li x5, 42`, and it would have the same effect.

## Our full code

So, going back to our original example of exiting a program, we can now write:

```asm
.text
main:
    li x5, 42  # Load the value 42 into register x5

stop:
    li a7, 10    # Load the exit system call number into register a7
    ecall         # Make the system call to exit the program
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x5%2C%2042%20%20%23%20Load%20the%20value%2042%20into%20register%20x5%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%20%20%20%23%20Load%20the%20exit%20system%20call%20number%20into%20register%20a7%0A%20%20%20%20ecall%20%20%20%20%20%23%20Make%20the%20system%20call%20to%20exit%20the%20program)

If you run this program, you will see that the register `x5` contains the value
`42`, and the program exits cleanly!

