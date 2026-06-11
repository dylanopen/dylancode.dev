# Boolean OR inverses

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What happens when we OR a boolean value $x$ with its inverse $\overline{x}$? | The result is always 1, because $x + \overline{x} = 1$.<br/>This works since one of $x$ or $\overline{x}$ is always true, satisfying the OR condition. |
| What is the Boolean logic rule for $A + \overline{A}$? | $A + \overline{A} = 1$ |
| How do you simplify any expression where a term is ORed with its own inverse? | Replace the entire ORed pair with just $1$.<br/>For example, $\overline{A} + A$ simplifies to $1$. |

