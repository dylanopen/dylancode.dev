---
title: Bit
---

A *bit* is the *fundamental unit of information*. It represents a choice
between two values: usually written as 0 and 1.

In computers, a bit represents an on-off state, and we can combine multiple
bits to make larger units of information.

## Number of values represented by bits

> $n$ bits can represent $2^n$ different values.

For example:

- 1 bit can represent 2 values: 0 or 1.
- 2 bits can represent 4 values: 00, 01, 10, or 11.
- 3 bits can represent 8 values: 000, 001, 010, 011, 100, 101, 110, or 111.
- 4 bits can represent 16 values: 0000 to 1111.
- And so on.

This is because each bit can be in one of two states, and the total number of
combinations is $2^n$.

## Number of bits needed for values

We can also go in reverse (assuming we know how to calculate logarithms):
- To represent $m$ different values, we need at least $\log_2 m$ bits.
- For example:
  - To represent 32 values, we need at least $\log_2 32 = 5$ bits.
  - To represent a full RGB color (16,777,216 values), we need at least
    $\log_2 16777216 = 24$ bits. (that's why it's called "24-bit color").

## Common multiples of bits

- Most systems use a `64-bit` architecture nowadays, meaning they process data
  in chunks of 64 bits at a time.
- Another common size is `32-bit`, which was widely used in older systems and in
  old windows programs which are still using ancient technology - typical
  windows ;)

