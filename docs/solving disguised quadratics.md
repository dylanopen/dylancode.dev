# Solving disguised quadratics

In some cases, we might see a [[polynomials|polynomial]] that has a higher
degree than $2$ (the degree of a quadratic), but it may still be possible to
solve it by treating it like a quadratic equation. These are called disguised
quadratics.

## What is a disguised quadratic?

A disguised quadratic is a polynomial where we can substitute a variable to
transform it into a quadratic form. This usually involves us spotting a pattern
in the powers in the [[expression]].

## Disguised quadratics where powers are multiples

A common type of disguised quadratic is one where the powers are consecutive
multiples of $2$. For example, one in the form $ax^4+bx^2+c=0$. In this case, we
can substitute $y=x^2$, which transforms the equation into $ay^2+by+c=0$, which
is a normal quadratic in terms of $y$.

### Example: Solve the equation $x^4 - 5x^2 + 6 = 0$

- Substitute $y = x^2$:
  - $y^2 - 5y + 6 = 0$
- Factorise the quadratic:
  - $(y - 2)(y - 3) = 0$
- Find the values of $y$:
  - $y = 2$ or $y = 3$
- Substitute back to find $x$:
  - If $y = 2$, then $x^2 = 2$:
    - $x = \pm \sqrt{2}$
  - If $y = 3$, then $x^2 = 3$:
    - $x = \pm \sqrt{3}$

**Answer**: $x = \pm \sqrt{2}$ or $x = \pm \sqrt{3}$

## Disguised quadratics where terms are exponents

### Solve the equation $2^{2x} - 5(2^x) + 6 = 0$

- Substitute $y = 2^x$:
  - $y^2 - 5y + 6 = 0$
- Factorise the quadratic:
  - $(y - 2)(y - 3) = 0$
- Find the values of $y$:
  - $y = 2$ or $y = 3$
- Substitute back to find $x$:
  - If $y = 2$, then $2^x = 2$:
    - $\log_2{2^x} = \log_2{2}$
    - $x = 1$
  - If $y = 3$, then $2^x = 3$:
    - $\log_2{2^x} = \log_2{3}$
    - $x = \log_2{3}$
**Answer**: $x = 1$ or $x = \log_2{3}$

### Solve the equation $3^{2x} + 5(3^x) - 24 = 0$

- Substitute $y = 3^x$:
  - $y^2 + 5y - 24 = 0$
- Factorise the quadratic:
  - $(y + 8)(y - 3) = 0$
- Find the values of $y$:
  - $y = -8$ or $y = 3$
- Substitute back to find $x$:  
  - If $y = -8$, then $3^x = -8$:
    - No solution, since $3^x$ is always positive.
  - If $y = 3$, then $3^x = 3$:
    - $\log_3{3^x} = \log_3{3}$
    - $x = 1$
**Answer**: $x = 1$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a disguised quadratic? | A polynomial where we can substitute a variable to transform it into a quadratic form, usually by spotting a pattern in the powers. |
| How do you solve a disguised quadratic where powers are consecutive multiples of 2, e.g. $ax^4 + bx^2 + c = 0$? | Substitute $y = x^2$, transforming it into $ay^2 + by + c = 0$, then solve for $y$ and substitute back. |
| Solve $x^4 - 5x^2 + 6 = 0$ | Substitute $y = x^2$ to get $y^2 - 5y + 6 = 0$. Factorise: $(y - 2)(y - 3) = 0$, so $y = 2$ or $y = 3$. Then $x^2 = 2$ gives $x = \pm \sqrt{2}$, and $x^2 = 3$ gives $x = \pm \sqrt{3}$. Answer: $x = \pm \sqrt{2}$ or $x = \pm \sqrt{3}$. |
| How do you solve a disguised quadratic involving exponents like $2^{2x} - 5(2^x) + 6 = 0$? | Substitute $y = 2^x$ to get $y^2 - 5y + 6 = 0$. Factorise: $(y - 2)(y - 3) = 0$, so $y = 2$ or $y = 3$. Then $2^x = 2$ gives $x = 1$, and $2^x = 3$ gives $x = \log_2{3}$. |
| Solve $3^{2x} + 5(3^x) - 24 = 0$ | Substitute $y = 3^x$ to get $y^2 + 5y - 24 = 0$. Factorise: $(y + 8)(y - 3) = 0$, so $y = -8$ or $y = 3$. $3^x = -8$ has no solution (always positive), so $3^x = 3$ gives $x = 1$. Answer: $x = 1$. |
| What is a key restriction when solving disguised quadratics with exponential terms? | Exponential terms like $a^x$ are always positive, so any negative solution after substitution (e.g., $y = -8$) yields no valid $x$. |

