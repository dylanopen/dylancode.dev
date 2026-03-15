# Boolean idempotence

*Idempotence* means that, when we combine a value with itself using an operation,
we get the same value back again.

In the case of the AND operation, we have:
- $0 \cdot 0 = 0$
- $1 \cdot 1 = 1$
- So $A \cdot A = A$

In the case of OR, we get:
- $0 + 0 = 0$
- $1 + 1 = 1$
- So $A + A = A$

> $A \cdot A = A$  
> $A + A = A$
