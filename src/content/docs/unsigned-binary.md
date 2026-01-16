---
title: Unsigned binary
---

An *unsigned binary number* is simply a binary number that can only represent
non-negative values (i.e., zero and positive integers).

We can say that *all bits are used to represent the magnitude of the number*.

## Range of values

In an unsigned 3-bit binary number, for example, the possible values are:
- 000 (0 in decimal)
- 001 (1 in decimal)
- 010 (2 in decimal)
- 011 (3 in decimal)
- 100 (4 in decimal)
- 101 (5 in decimal)
- 110 (6 in decimal)
- 111 (7 in decimal)

We can see that an unsigned 3-bit binary number can represent values from 0 to
7. We can calculate the maximum value of an unsigned binary number with $n$ bits
using the formula:

$$
\text{maximum value} = 2^n - 1
$$

For example, for an unsigned 5-bit binary number, the maximum value is
$2^5 - 1 = 31$.

