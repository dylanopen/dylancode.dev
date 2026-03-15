# Boolean AND identity

The identity of any operation is the value that, when we combine it with value
$x$ using that operation, we get $x$ back again.

In the case of the AND operation, the identity is $1$, because:
- $0 \cdot 1 = 0$
- $1 \cdot 1 = 1$

This means that if we have a value $x$ and we AND it with $1$, we get $x$ back
again:
- $0 \cdot 1 = 0$
- $1 \cdot 1 = 1$

> $A \cdot 1 = A$

## Boolean simplification

Knowing this identity can help us simplify expressions. Whenever we see 
something ANDed with $1$, we can just remove the $1$ and keep the other value.

For example, if we have the expression $A \cdot 1$, we can simplify it to just
$A$.
