---
title: Subtraction
---

Subtraction in RISC-V assembly is done using one of two instructions:
- `sub` for subtracting the values of two registers
- `addi` with a negative immediate value for subtracting an immediate value
  from a register

## Subtracting using registers

Suppose we have two registers, `x1` and `x2`, which contain the values `10` and
`3` respectively, and we want to subtract the value in `x2` from the value in
`x1`, and store the result in `x3`.

In other words:

```python
x1 = 10
x2 = 3
x3 = x1 - x2
```

We can do that using the `sub` instruction like this:

```asm
sub x3, x1, x2
```

Or, the full code:

```asm
.text
main:
    li x1, 10
    li x2, 3
    sub x3, x1, x2

stop:
    li a7, 10
    ecall
```

[View in Creatorsim!](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A++++li%20x1%2C%2010%0A++++li%20x2%2C%203%0A++++sub%20x3%2C%20x1%2C%20x2%0A%0Astop%3A%0A++++li%20a7%2C%2010%0A++++ecall)

Once we run this code, the value in register `x3` will be `7`, or `07` in hex!

## Subtracting an immediate value

Suppose we have a register, `x1`, which contains the value `10`, and we want to
subtract `3` from it and store the result in `x2`.

In other words:

```python
x1 = 10
x2 = x1 - 3
```

But we can also subtract the number `3` by *adding* `-3` to `x1`!

In Python, that would look like this:

```python
x1 = 10
x2 = x1 + (-3) # (brackets optional)
```

We can do that in RISC-V assembly using the `addi` instruction with a negative
immediate value:

```asm
addi x2, x1, -3
```

The full code being:

```asm
.text
main:
    li x1, 10
    addi x2, x1, -3

stop:
    li a7, 10
    ecall
```

[View in Creatorsim!](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A++++li%20x1%2C%2010%0A++++addi%20x2%2C%20x1%2C%20-3%0A%0Astop%3A%0A++++li%20a7%2C%2010%0A++++ecall)

As this code effectively does the same as the previous example, the value in
register `x2` will also be `7` when running the code!

