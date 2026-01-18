---
title: Adding registers
---

Just as we can add the value stored in a register to an immediate value (a
constant) and then save the result in another register, we can also add the
values of two registers together - then save that result in a third register.

## Adding two registers

The instruction for adding the values of two registers together is `add` (not
`addi`, which we used for adding an immediate value).

The syntax for `add` is:

```asm
add <destination register>, <source register 1>, <source register 2>
```

This means "add the value in `<source register 1>` to the value in `<source
register 2>`, and store the result in `<destination register>`".

## Example

If we wanted to:
- Load the value `22` into register `x1`
- Load the value `8` into register `x2`
- Add the values in `x1` and `x2` together, and store the result in `x3`

We would write:

```asm
.text
main:
    li x1, 22        # x1 = 22
    li x2, 8         # x2 = 8
    add x3, x1, x2   # x3 = x1 + x2

stop:
    li a7, 10        # 10 = exit syscall
    ecall            # Make syscall
```

[Try it out in Creatorsim!](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A++++li%20x1%2C%2022%20%20%20%20%20%23%20x1%20%3D%2022%0A++++li%20x2%2C%208%20%20%20%20%20%23%20x2%20%3D%208%0A++++add%20x3%2C%20x1%2C%20x2%20%23%20x3%20%3D%20x1%20%2B%20x2%0A%0Astop%3A%0A++++li%20a7%2C%2010%20%20%20%23%2010%20%3D%20exit%20syscall%0A++++ecall%20++++++-%20Make%20syscall)

Now, when we run this code, the value in register `x3` will be `30`, or `1E` in
hex!

## The `+=` operation

In many programming languages, there is a shorthand way to add a value to a
variable and store the result back in the same variable. This is often done
using the `+=` operator.

For example, in C:

```c
int x1 = 10;
int x2 = 5;
x1 += x2;  // equivalent to x1 = x1 + x2;
```

We can effectively do the same in RISC-V assembly using the `add` instruction by
using the same register for both the destination and one of the source
registers.

For this C code, we can instead write:

```asm
    li x1, 10       # x1 = 10
    li x2, 5        # x2 = 5
    add x1, x1, x2  # x1 = x1 + x2
```

This will add the value in `x2` to the value in `x1`, and store the result back
in `x1`. After , `x1` will contain the value `15`.

