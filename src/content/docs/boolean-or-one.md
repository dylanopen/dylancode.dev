---
title: Boolean OR one
---

If we have an expression like:

$$
A+1
$$

...then for any value of $A$, we are ORing it with 1. If we or anything with
1, then we just get `1` (because at least one is 1, so OR must be true (`1`)).

We know that, because of the `OR` truth table:
- `1 OR 1 = 1`
- `0 OR 1 = 1`, so:
- `A OR 1 = 1`
- (because `A` must represent either a `1` or a `0`)

In short:

$$
A+1=1
$$

We can use this to [simplify boolean algebra](/simplifying-boolean-algebra)!

We can replace anywhere we see $A+1$ with $1$

