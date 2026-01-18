---
title: Division
---

Division in RISC-V is actually... surprisingly simple!

We just use the `div` instruction, which performs signed integer division.

## Syntax

If we want to divide the value in register `x1` by the value in register `x2`,
and store the result in register `x3`, we would write:

```asm
div x3, x1, x2
```

For example, our full code may look something like:

```asm
.text
main:
    li x1, -20
    li x2, 4
    div x3, x1, x2

stop:
    li a7, 10
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x1%2C%20-20%0A%20%20%20%20li%20x2%2C%204%0A%20%20%20%20div%20x3%2C%20x1%2C%20x2%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%0A%20%20%20%20ecall)

The result in the registers will be:

```
x3 = -5
```

## Unsigned division

We can do unsigned division using the `divu` instruction.

Everything else works exactly the same as `div`, except that the values in the
source registers are treated as unsigned integers.

For example:

```asm
.text
main:
    li x1, 20
    li x2, 3
    divu x3, x1, x2

stop:
    li a7, 10
    ecall
```

[Run on creatorsim](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x1%2C%2020%0A%20%20%20%20li%20x2%2C%203%0A%20%20%20%20divu%20x3%2C%20x1%2C%20x2%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%0A%20%20%20%20ecall)

Result:

```
x3 = 6
```

