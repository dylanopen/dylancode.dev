---
title: Boolean OR zero
---

If we have an expression like:

$$
A+0
$$

...then for any value of $A$, we are ORing it with 0. If we and anythign with
0, then we get that thing back.

We know that, because of the `OR` truth table:
- `1 OR 0 = 1`
- `0 OR 0 = 0`, so:
- `A OR 0 = A`
- (because the first number above is what we end up getting)

In short:

$$
A+0=A
$$

We can use this to [simplify boolean algebra](/simplifying-boolean-algebra)!

We can replace anywhere we see $A+0$ with $A$

