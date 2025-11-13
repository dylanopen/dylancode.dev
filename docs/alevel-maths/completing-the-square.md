---
sidebar_position: 2060
---

# Completing the square

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

### Example: complete the square for $x^2+6x+5$

Using the formula $(x+\frac{b}{2})^2 - (\frac{b}{2})^2 + c$ where $b=6$ and $c=5$:

- $=(x+\frac{6}{2})^2 - (\frac{6}{2})^2 + 5$
- $=(x+3)^2 - 3^2 + 5$
- $=(x+3)^2 - 9 + 5$
- $=(x+3)^2 - 4$

### Example: complete the square for $x^2-8x+3$

Using the formula $(x+\frac{b}{2})^2 - (\frac{b}{2})^2 + c$ where $b=-8$ and $c=3$:

- $=(x+\frac{-8}{2})^2 - (\frac{-8}{2})^2 + 3$
- $=(x-4)^2 - (-4)^2 + 3$
- $=(x-4)^2 - 16 + 3$
- $=(x-4)^2 - 13$

## Completing the square when \(a \ne 1\)

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

### Example: complete the square for $2x^2+12x+10$

First, factor out the coefficient of $x^2$ from all terms:

- $=2(x^2+6x+5)$

Now complete the square for $x^2+6x+5$ using the formula:

- $=2[(x+3)^2 - 9 + 5]$
- $=2[(x+3)^2 - 4]$
- $=2(x+3)^2 - 8$

### Example: complete the square for $3x^2-18x+9$

First, factor out the coefficient of $x^2$ from all terms:

- $=3(x^2-6x+3)$

Now complete the square for $x^2-6x+3$ using the formula:

- $=3[(x-3)^2 - 9 + 3]$
- $=3[(x-3)^2 - 6]$
- $=3(x-3)^2 - 18$

## Finding the turning point from the completed square form

The turning point of $a(x+d)^2+e$ is $(-d, e)$.

> Notice that we completely ignore the $a$ coefficient when finding the turning
> point. It's not important here!

### Example: find the turning point of $2(x+3)^2 - 8$

The turning point is at $(-3, -8)$.

### Example: find the turning point of $(x-5)^2 + 7$

The turning point is at $(5, 7)$.

