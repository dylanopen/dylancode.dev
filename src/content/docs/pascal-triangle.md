---
title: Pascal's triangle
---

There's another way of finding the coefficients in a binomial expansion: it
works well for small values of $n$ but takes a long time for larger values of
$n$.

The coefficients in the expansion of $(a+b)^n$ correspond to the *rows* of
Pascal's triangle:

```
row |
  0 |              1
  1 |            1   1
  2 |          1   2   1
  3 |        1   3   3   1
  4 |      1   4   6   4   1
  5 |    1   5  10  10   5   1
  6 |  1   6  15  20  15   6   1
       ^                   ^
       |_ column 0         |_ column 5
```

For example then, the coefficients of the expansion of $(a+b)^5$ are $1$, $5$,
$10$, $10$, $5$ and $1$ because they correspond to row $5$ of Pascal's triangle.

## Constructing Pascal's triangle

We just put a $1$ at the top, then we construct the next row by adding the two
numbers above it.

For example, to get the $6$ in the 4th row, we add the $3$ and the $3$ above it.
To get the $10$ in the 5th row, we add the $4$ and the $6$ above it.

## Common binomial values

If you look at the [common binomial values](/common-binomial-values), you'll
see this pattern more clearly!

