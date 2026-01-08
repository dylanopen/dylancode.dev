---
title: Point of inflection
---

## What is a point of inflection?

A point of inflection is essentially a point on a curve where the rate of
change of gradient (second derivative) changes sign.

In other words, it's where the curve changes from getting steeper to getting
less steep, or vice versa.

At a point of inflection, the second derivative is equal to zero:

$$
f''(x) = 0
$$

## Finding the points of inflection

Steps:
1. Find the second derivative of the function.
2. Set the second derivative equal to zero and solve for x.
3. Substitute the x-values back into the original function to find the
   corresponding y-values.

### Find the points of inflection for the function $f(x) = x^3 - 3x^2 + 4$.

- First, we find the first derivative:
  - $f'(x) = 3x^{3-1} - 2\times3x^{2-1} + 0$
  - $= 3x^2 - 6x$
- Next, we find the second derivative:
  - $f''(x) = 2\times3x^{2-1} - 1\times6x^{1-1}$
  - $= 6x - 6$
- Now, we set the second derivative equal to zero and solve for x:
  - $6x - 6 = 0$
  - $6x = 6$
  - $x = 1$
- Finally, we substitute $x = 1$ back into the original function to find the
  corresponding y-value:
  - $f(1) = (1)^3 - 3(1)^2 + 4$
  - $= 1 - 3 + 4$
  - $= 2$
- **Answer**: The point of inflection is at $(1, 2)$.

### Find the points of inflection for the function $f(x) = x^4 - 4x^3 + 6x^2$.

- First, we find the first derivative:
  - $f'(x) = 4x^{4-1} - 3\times4x^{3-1} + 2\times6x^{2-1}$
  - $= 4x^3 - 12x^2 + 12x$
- Next, we find the second derivative:
  - $f''(x) = 3\times4x^{3-1} - 2\times12x^{2-1} + 1\times12x^{1-1}$
  - $= 12x^2 - 24x + 12$
- Now, we set the second derivative equal to zero and solve for x:
  - $12x^2 - 24x + 12 = 0$
  - Dividing the entire equation by 12:
  - $x^2 - 2x + 1 = 0$
  - $(x - 1)^2 = 0$ (here I solve by factorising)
  - $x = 1$
- Finally, we substitute $x = 1$ back into the original function to find the
  corresponding y-value:
  - $f(1) = (1)^4 - 4(1)^3 + 6(1)^2$
  - $= 1 - 4 + 6$
  - $= 3$
- **Answer**: The point of inflection is at $(1, 3)$.

