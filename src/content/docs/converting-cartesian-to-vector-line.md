---
title: Converting cartesian-form to vector-form line equations
---

## Cartesian form

Cartesian form is the standard equation of a line, written as:

$$
y = mx + c
$$

(or one of its variants).

## Vector form

A line in vector form has the equation:

$$
\vec r = \vec a + \lambda \vec d
$$

...where:
- $\vec r$ is the position vector of any point on the line,
- $\vec a$ is the position vector of a specific point on the line,
- $\vec d$ is the direction vector of the line,
- $\lambda$ is a scalar multiplier (changing it gives a new point on the line).

## Direction vector

The *direction vector* has two components: the *change in x* and the *change in
y*.

We can find these components from the gradient $m$ of the line.

In short, the $denominator$ of the gradient is the *change in x*, and the
$numerator$ is the *change in y*. (if there is no denominator, it is the same as
a denominator of $1$).

### Find the direction vector from the gradient of $\frac{3}{4}$

- Change in $x = 4$
- Change in $y = 3$
- **Answer**: $\vec d = \pmatrix{4 \\ 3}$

### Find the direction vector from the gradient of $-2$

- Change in $x = 1$
- Change in $y = -2$
- **Answer**: $\vec d = \pmatrix{1 \\ -2}$

## Finding a point on the line

To find a specific point on the line, we can substitute any value of $x$ into
the cartesian equation to find the corresponding value of $y$.

However, the easiest point to find is the **y-intercept**, which is already
stated by the cartesian line equation as the value of $c$.

For the equation $y = mx + c$, the y-intercept is at the point $(0, c)$.

## Converting from cartesian to vector form

Once we have the direction vector and a point on the line, we can substitute
these into the vector form equation to get the final answer.

### Convert the cartesian equation $y = \frac{2}{3}x + 4$ to vector form

- Gradient $m = \frac{2}{3}$
  - Change in $x = 3$
  - Change in $y = 2$
  - Direction vector $\vec d = \pmatrix{3 \\ 2}$
- Y-intercept is at point $(0, 4)$
  - Position vector $\vec a = \pmatrix{0 \\ 4}$
- Vector equation:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \pmatrix{0 \\ 4} + \lambda \pmatrix{3 \\ 2}$
- **Answer**: $\vec r = \pmatrix{0 \\ 4} + \lambda \pmatrix{3 \\ 2}$

