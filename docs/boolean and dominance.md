# Boolean AND dominance

The *boolean dominance law* says that when we have a value $x$ ANDed with $0$,
the result is always $0$, because:
- $0 \cdot 0 = 0$
- $1 \cdot 0 = 0$
- So $x \cdot 0 = 0$

This is because the AND requires both sides to be true if we want a true result,
but we already know one of the sides is false, so the result must also be false,
we don't need to know the value of $x$ to know that the result is $0$.

> $A \cdot 0 = 0$

We can replace anywhere we have something ANDed with 0 with just 0 in order to
simplify expressions. For example, $A \cdot 0$ simplifies to just $0$.
