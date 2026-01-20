---
title: Jumping
---

*Jumping* is where we change the flow of our program by jumping to a different
part of the code - we essentially 'goto' a certain line (or memory address) in
our code.

Please have a look at the [last chapter](/riscv/labels) to see how labels work.

## The `j` instruction

The most basic instruction we can use to branch is `j`. It will *always* jump to
the label you give it, no matter what.

## Syntax

The `j` instruction can be used like this:

```
j label_name
```

## Example

For example, here, we jump to the `stop` label before we add `1` to the `a0`
register:

```
.text
main:
    li a0, 5        # Load 5 into a0
    j stop          # Jump to the 'stop' label
    addi a0, a0, 1  # This line will be skipped
stop:
    li a7, 10
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20a0%2C%205%0A%20%20%20%20j%20stop%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%0A%20%20%20%20ecall%0A%20%20%20%20)

This program will load `5` into the `a0` register, then jump to the `stop`
label, skipping the line that would have added `1` to `a0`. Finally, it will
exit the program.

The result in the registers will be:

```
a0: 5
```

