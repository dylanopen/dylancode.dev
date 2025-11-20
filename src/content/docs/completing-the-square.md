---
title: Completing the square
---

Completing the square is a method used to rewrite a quadratic expression, from
the form $ax^2+bx+c$ to the form $a(x+d)^2+e$. This can be useful for solving
quadratic equations, graphing quadratic functions, and understanding the 
properties of a quadratic graph (e.g. its turning point, otherwise known as
the vertex).

## Completing the square when \(a=1\)

When we have a nice, simple quadratic, in the form $x^2+bx+c$ (no $x^2$
coefficient) we can complete use this formula to complete the square:

$$
x^2+bx+c = (x+\frac{b}{2})^2 - (\frac{b}{2})^2 + c
$$

This makes a lot more sense with an example.

### Example: Complete the square for $x^2 + 6x + 5$

- Find what $b$ and $c$ are:
  - $b = 6$
  - $c = 5$
- Calculate $\frac{b}{2}$:
  - $\frac{b}{2} = \frac{6}{2} = 3$
- If we take $(x + 3)^2$ and expand it, we get:
  - $(x + 3)^2 = x^2 + 6x + 9$
  - This is what we want, we just have an extra $+9$, so take that away from the
    expression:
    - $x^2 + 6x + 5 = (x + 3)^2 - 9 + 5$
    - $= (x + 3)^2 - 4$

**Answer**: $(x + 3)^2 - 4$

## Completing the square when $a \ne 1$

When the coefficient of $x^2$ is not equal to $1$, we can still complete the
square by factoring out the coefficient first from **all terms**.

We have an equation equal to zero, which means we can divide by any number on
the left side without worrying about changing the equation (as zero divided by
any number is still zero).

Our first step is to get rid of the $a$ coefficient (it makes things more
complicated) by dividing the whole equation by $a$. This means the equation
will now be in the form $x^2 + \frac{b}{a}x + \frac{c}{a} = 0$.

We can now simply use the method above to complete the square - as we don't need
to worry about the $a$ coefficient anymore.

### Example: Complete the square for $2x^2 + 8x + 6$

- First, divide the whole equation by $2$ to get rid of the $2$ coefficient:
  - $x^2 + 4x + 3$
- Now, we can complete the square using the method above:
  - $b = 4$
  - $c = 3$
  - $\frac{b}{2} = \frac{4}{2} = 2$
  - $(x + 2)^2 = x^2 + 4x + 4$
  - So, we need to subtract $4$ from the expression:
    - $x^2 + 4x + 3 = (x + 2)^2 - 4 + 3$
    - $= (x + 2)^2 - 1$
- Finally, we need to remember that we divided the whole equation by $2$ at the
  start, so we need to multiply the whole completed square expression by $2$ to
  get back to the original equation:
  - $2x^2 + 8x + 6 = 2((x + 2)^2 - 1)$
  - $= 2(x + 2)^2 - 2$

**Answer**: $2(x + 2)^2 - 2$


## Finding the turning point from the completed square form

The turning point of $a(x+d)^2+e$ is $(-d, e)$.

> Notice that we completely ignore the $a$ coefficient when finding the turning
> point. It's not important here!

The number in the brackets tells us the $x$ coordinate of the turning point, and
the number outside the brackets tells us the $y$ coordinate of the turning point.

We **negate** the number inside the brackets to find our $x$ coordinate. The
reason for this is the same as when we solve equations from their factorised
form.

