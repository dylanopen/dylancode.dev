---
title: Copying registers
---

We already know that we can *set* the value of a register to a constant, using
the `li` pseudo-instruction.

WHat if we have a value in one register, and we want to copy it to another
register?

For that, we can use the `mv` pseudo-instruction.

## Syntax

If we want to copy the value in register `a0` to register `a1`, we would write:

```asm
mv a1, a0
```

For example, our full code may look something like:

```asm
.text
main:
    li a0, 20
    mv a1, a0

stop:
    li a7, 10
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20a0%2C%2020%0A%20%20%20%20mv%20a1%2C%20a0%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%0A%20%20%20%20ecall)

The result in the registers will be:

```
a0 = 20
a1 = 20
```

