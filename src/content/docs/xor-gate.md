---
title: XOR gate
---

An *XOR gate* (short for 'exclusive OR gate') takes two input signals and
produces an output signal that is `1` if **exactly one** of the input signals is
`1`.

In other words, the output will be `1` if the input signals are different from
each other; if both input signals are the same (both `0` or both `1`), the
output will be `0`.

## Truth table

| Input A | Input B | Output (A XOR B) |
|---------|---------|------------------|
|    0    |    0    |      **0**       |
|    0    |    1    |      **1**       |
|    1    |    0    |      **1**       |
|    1    |    1    |      **0**       |

## Making an XOR gate

An XOR gate can also be said to be 'A OR B AND NOT (A AND B)'.

This means that you can create an XOR gate by combining OR, AND, and NOT gates
together.

