---
title: Multiplication
---

## Multiplying two registers

To multiply two values stored in registers, we use the `mul` instruction:

```asm
mul <destination register>, <source register 1>, <source register 2>
```

For example, to multiply the values in registers `x1` and `x2`, and store the
result in `x3`, we would write:

```asm
mul x3, x1, x2
```

### Example program

```asm
.text
main:
    li x1, 6         # Load the value 6 into register x1
    li x2, 7         # Load the value 7 into register x2
    mul x3, x1, x2   # Multiply x1 and x2, store result in x3

stop:
    li a7, 10        # Load the exit system call number into register a7
    ecall            # Make the system call to exit the program
```

[Try it out in Creatorsim!](https://creatorsim.github.io/creator/?architecture=RISC-V%20(RV32IMFD)&asm=.text%0Amain%3A%0A%20%20%20%20li%20x1%2C%206%0A%20%20%20%20li%20x2%2C%207%0A%20%20%20%20mul%20x3%2C%20x1%2C%20x2%0A%0Astop%3A%0A%20%20%20%20li%20a7%2C%2010%0A%20%20%20%20ecall)

The result:
- `x3` will contain `42` (since `6 * 7 = 42`), or `2A` in hex!

## Specialised multiplication instructions

Usually, `mul` is enough. But if we multiply two large numbers, the result might
not fit into the single 32-bit register that `mul` 'returns'.

For this, we need to specify whether our input values are signed or unsigned.
We use these instructions:
- `mulh`: get the upper (high) 32 bits of the result of multiplying two signed
  integers
- `mulhu`: get the upper (high) 32 bits of the result of multiplying two
  unsigned
- `mulhsu`: get the upper (high) 32 bits of the result of multiplying a signed
  integer by an unsigned integer

We can use these instructions in the same way as `mul`. For example:

```asm
li x1, -3000000000
li x2, 4000000000
mulh x4, x1, x2
mulhu x5, x1, x2
mulhsu x6, x1, x2
```

## Multiplying by an immediate value

RISC-V doesn't have a direct instruction for multiplying a register by an
immediate value. There are a few reasons for this, including:
- It keeps the instruction set simpler.
- It's normally much faster to use a combination of bit-shifts and additions for
  multiplying by constants, rather than a dedicated multiply instruction.

We'll get into how to do bitshifts later on!

However, if you need to multiply a register by an immediate value, you can just
first load the immediate value into a register using `li`, and then use `mul`.

For example, to multiply the value in `x1` by `5`, you could write:

```asm
li x2, 5        # Load the immediate value 5 into register x2
mul x3, x1, x2 # Multiply x1 by x2 (which is 5), store result in x3
```

This will effectively multiply the value in `x1` by `5`, and store the result in
`x3`.

