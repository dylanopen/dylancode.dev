---
title: Boolean absorption
---

## AND absorption

When we have an expression in the form $A \cdot (A + B)$, we can simplify it. We
know that both $A$ and the thing on the right must be true for the whole
expression to be true. But if just $A$ is true, then the right hand side $A+B$
is also true, so we can just ignore it and simplify the expression to just $A$.

> $A \cdot (A + B) = A$

## OR absorption

When we have an expression in the form $A + (A \cdot B)$, we can also simplify
it. We know that either $A$ or the thing on the right must be true for the
whole expression to be true. But if just $A$ is true, then the right hand side
$A \cdot B$ is also true, so we can just ignore it and simplify the expression
to just $A$.

> $A + (A \cdot B) = A$

