# Degrees of freedom

If we have a [[contingency-table]] with [dimensions](contingency-table-dimensions) $r \times c$, then the number of degrees of freedom ($v$) is:

> $$
> v = (r - 1)(c - 1)
> $$

The degrees of freedom is the number of rows, minus one, all multiplied by the number of columns minus one.

## How do we get this?

Let's take this (very abstract) [[contingency-table]] for example:

|       | Yes | No  | Total |
| ----- | --- | --- | ----- |
| A     | 10  | 20  | 30    |
| B     | 15  | 25  | 40    |
| C     | 5   | 15  | 20    |
| Total | 30  | 60  | 90    |

We have $3$ rows (A, B, C), and $2$ columns (Yes, No).

What is the maximum number of cells in the main body of the table (the cells with the numbers in them, but not the totals) can we completely remove, while still being able to find them from the rest of the table?

Here's one example of the maximum number of cells we can remove:

|       | Yes | No  | Total |
| ----- | --- | --- | ----- |
| A     | 10  |     | 30    |
| B     | 15  |     | 40    |
| C     |     |     | 20    |
| Total | 30  | 60  | 90    |

From just these $2$ values in the main table body, we can calculate all of the other values:

|       | Yes        | No         | Total |
| ----- | ---------- | ---------- | ----- |
| A     | 10         | $30-10$    | 30    |
| B     | 15         | $40-15$    | 40    |
| C     | $30-10-15$ | $60-20-25$ | 20    |
| Total | $30$       | $60$       | $90$  |

Because the maximum number of cells we need to keep in order to retain all the data is $2$, it means our **degrees of freedom** is $2$.

If we instead calculated the degrees of freedom using the formula, we would do $(3-1)(2-1) = 2$, which matches our result from the example. So that makes sense!
