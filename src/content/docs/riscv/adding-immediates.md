---
title: Adding immediates
---

Writing to registers is fun and all, but how about we do the thing that
computers were invented to do: maths!

We'll start off from our code before:

```asm
.text
main:
    li x5, 42  # Load the value 42 into register x5

stop:
    li a7, 10    # Load the exit system call number into register a7
    ecall         # Make the system call to exit the program
```

## Adding an immediate value

[As mentioned before](/riscv/immediate-and-register-instructions), RISC-V has
two types of instructions for many operations. For adding numbers, we have:
- `add`: for adding the values of two registers together
- `addi`: for adding an immediate value (a constant) to a register

We'll be using the second one for now - `addi`.

The syntax for `addi` is:

```asm
addi <destination register>, <source register>, <immediate value>
```

This means "add the value in `<source register>` to `<immediate value>`, and
store the result in `<destination register>`".

So, if we wanted to add `5` to the value in register `x5`, and store the result
in `x4`, we would write:

```asm
addi x4, x5, 5
```

Now, the value in `x4` is `47` (because `42 + 5 = 47`)!

## Our full code

Going back to our example before, we can now write:

```asm
.text
main:
    li x5, 42        # Load the value 42 into register x5
    addi x4, x5, 5   # Add 5 to the value in x5, store result in x4

stop:
    li a7, 10        # Load the exit system call number into register a7
    ecall            # Make the system call to exit the program
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x5%2C%2042%0A%20%20%20%20addi%20x4%2C%20x5%2C%205%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%0A%20%20%20%20ecall)

Now, when we run this code, the value in register `x4` will be `47`, or `2F` in
hex!

## An expanded `li`

The `li` instruction isn't really an instruction at all - it's generally just
expanded to a wrapper around an `addi` instruction that adds the immediate value
we want to set it to, to the zero register (`x0`), which always contains `0`.

So, to set the register `r1` to `127`, we can also write:

```asm
addi r1, x0, 127
```

This does exactly the same thing as:

```asm
li r1, 127
```

