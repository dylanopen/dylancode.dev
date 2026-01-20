---
title: Boolean AND zero
---

If we have an expression like:

$$
A\cdot 0
$$

...then for any value of $A$, we are ANDing it with 0. If we and anything with
0, then we just get `0` (because at least one is 0, so AND cannot be true).

We know that, because of the `AND` truth table:
- `1 AND 0 = 0`
- `0 AND 0 = 0`, so:
- `A AND 0 = 0`
- (because `A` must represent either a `1` or a `0`)

In short:

$$
A\cdot0=0
$$

We can use this to [simplify boolean algebra](/simplifying-boolean-algebra)!

We can replace anywhere we see $A\cdot0$ with $0$

