# Boolean OR dominance

The *[[boolean]] dominance law* says that when we have a value $x$ ORed with $1$,
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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the Boolean OR dominance law? | When a value $x$ is ORed with $1$, the result is always $1$, because $0 + 1 = 1$ and $1 + 1 = 1$, so $x + 1 = 1$. |
| How do you simplify an expression where a term is ORed with 1? | Replace the entire OR operation with just $1$. For example, $A + 1$ simplifies to $1$. |
| Why is the result always $1$ when $x$ is ORed with $1$? | Because OR requires at least one side to be true for a true result; since one side ($1$) is already true, the result must be true regardless of $x$. |

