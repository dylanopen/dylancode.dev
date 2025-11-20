---
title: Solving disguised quadratics
---

In some cases, we might see a [polynomial](/polynomials) that has a higher
degree than $2$ (the degree of a quadratic), but it may still be possible to
solve it by treating it like a quadratic equation. These are called disguised
quadratics.

## What is a disguised quadratic?

A disguised quadratic is a polynomial where we can substitute a variable to
transform it into a quadratic form. This usually involves us spotting a pattern
in the powers in the expression.

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

