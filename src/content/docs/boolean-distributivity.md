---
title: Boolean distributivity
---

## Distributivity of OR

The **distributive law** of boolean ORing says whenever we have an expression
of the form $A \cdot (B + C)$, we can distribute the AND over the OR to get
$A \cdot B + A \cdot C$.

> $A \cdot (B + C) = A \cdot B + A \cdot C$

This is because the AND operation requires both sides to be true for the result
to be true, so for $A \cdot (B + C)$ to be true, we need $A$ to be true and
either $B$ or $C$ to be true, which is the same as saying we need $A$ and $B$
to be true or $A$ and $C$ to be true, which is what $A \cdot B + A \cdot C$
says.

Or, you can just think of it like how you 'expand brackets' in maths, it works
basically the same way.

This also works the other way around, we can factor out the $A$ from $A \cdot
B + A \cdot C$ to get $A \cdot (B + C)$.

> $A \cdot B + A \cdot C = A \cdot (B + C)$

The important thing is that we recognise the $A \cdot$ is common in both of the
terms which are ORed together, so that's what goes on the outside of the
brackets. This is the same as how we factorise in maths.

We put the $+$ inside the brackets because, when we take away the two $A \cdot$
from the two terms, we are left with $B+C$. That goes inside the brackets, again,
just like in normal factorising.

This also works for more than 2 terms, for example:

> $A \cdot (B + C + D) = A \cdot B + A \cdot C + A \cdot D$  

## Distributivity of AND

We can also distribute a slightly different way, more similar to how we would
expand and factorise *double brackets*.

> $A + (B \cdot C) = (A + B) \cdot (A + C)$

