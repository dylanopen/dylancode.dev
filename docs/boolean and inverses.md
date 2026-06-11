# Boolean AND inverses

If we AND together value $x$ and its inverse (NOT $x$, or $\overline{x}$), we
get $0$, because:
- $0 \cdot 1 = 0$
- $1 \cdot 0 = 0$
- So $x \cdot \overline{x} = 0$

This is because the AND requires both sides to be true if we want a true result,
but we already know one of the sides is false and one is true, so they're NOT
both true.

> $A \cdot \overline{A} = 0$

We can replace anywhere we have something ANDed with its inverse with just $0$
in order to simplify. For example, $A \cdot \overline{A}$ simplifies to just
$0$.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the result of ANDing a Boolean value with its inverse? | $A \cdot \overline{A} = 0$, because for both $A=0$ ($0 \cdot 1 = 0$) and $A=1$ ($1 \cdot 0 = 0$) the result is $0$. |
| How can you simplify an expression containing a variable ANDed with its own inverse? | You can replace the term with $0$, e.g., $A \cdot \overline{A}$ simplifies to $0$. |
| Why does $x \cdot \overline{x}$ always equal $0$? | Because AND requires both inputs to be true for a true output, but one side is always false and the other is always true, so they are never both true. |

