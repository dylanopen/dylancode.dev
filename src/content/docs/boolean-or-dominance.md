---
title: Boolean OR dominance
---

The *boolean dominance law* says that when we have a value $x$ ORed with $1$,
the result is always $1$, because:
- $0 + 1 = 1$
- $1 + 1 = 1$
- So $x + 1 = 1$

This is because the OR requires at least one side to be true if we want a true
result, but we already know one of the sides is true, so the result must also be
true, we don't need to know the value of $x$ to know that the result is $1$.

> $A + 1 = 1$

To simplify, replace anywhere ORed with 1 with just 1. For example, $A + 1$
simplifies to just $1$.

