---
title: Boolean OR inverses
---

If we OR together value $x$ and its inverse (NOT $x$, or $\overline{x}$), we
get $1$, because:
- $0 + 1 = 1$
- $1 + 0 = 1$
- So $x + \overline{x} = 1$

That's because OR requires at least one side to be true if we want a true result,
and we know that one of the sides is true and one is false, so at least one side
is true.

> $A + \overline{A} = 1$

Simplifying, just replace anywhere we have something ORed with its inverse with
just $1$. For example, $\overline{A} + A$ simplifies to just $1$.

