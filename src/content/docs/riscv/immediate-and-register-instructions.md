---
title: Immediate and register instructions
---

Many instructions in the RISC-V instruction set have multiple variants:
- An *immediate* variant
- A *register* variant

## What is an immediate value?

Immediate mode is essentially when we are working with *constant values*.

For example, consider this `addi` instruction:

```asm
addi x0, x1, 5 
```

Because we are adding a *constant* value (`5`) to the value of register `x1`,
this is an example of an immediate instruction.

In contrast, consider this `add` instruction:

```asm
add x0, x1, x2
```

Here, we're not using a constant value, but rather the value stored in register
`x2`. That means this is a register instruction.

