---
title: Turning point
---

The *turning point* of a curve is the point at which it changes direction from
increasing to decreasing (a local maximum) or from decreasing to increasing (a
local minimum).

This means that the gradient is changing from positive to negative (local
maximum) or from negative to positive (local minimum).

At a turning point, the first derivative (gradient function) is equal to zero:
$f'(x) = 0$.

## Types of turning points

- **Local maximum**: where the curve changes from increasing to decreasing
  (the gradient goes from positive to negative).
- **Local minimum**: where the curve changes from decreasing to increasing
  (the gradient goes from negative to positive).

## Finding turning points

To find the turning points of a function, follow these steps:

1. Find the first derivative of the function.
2. Set the first derivative equal to zero and solve for x.
3. Substitute the x-values back into the original function to find the
   corresponding y-values.

### Find the turning points for the function $f(x) = x^3 - 3x^2 + 4$.

- First, we find the first derivative:
  - $f'(x) = 3x^{3-1} - 2\times3x^{2-1} + 0$
  - $= 3x^2 - 6x$
- Now, we set the first derivative equal to zero and solve for x:
  - $3x^2 - 6x = 0$
  - $3x(x - 2) = 0$ (here I solve by factorising)
  - $x = 0$ or $x = 2$
- Next, we substitute $x = 0$ back into the original function to find the
  corresponding y-value:
  - $f(0) = (0)^3 - 3(0)^2 + 4$
  - $= 0 - 0 + 4$
  - $= 4$
- Then, we substitute $x = 2$ back into the original function to find the
  corresponding y-value:
  - $f(2) = (2)^3 - 3(2)^2 + 4$
  - $= 8 - 12 + 4$
  - $= 0$
- **Answer**: The turning points are at $(0, 4)$ and $(2, 0)$.

### Find the turning points for the function $f(x) = x^4 - 4x^3 + 6x^2$.

- First, we find the first derivative:
  - $f'(x) = 4x^{4-1} - 3\times4x^{3-1} + 2\times6x^{2-1}$
  - $= 4x^3 - 12x^2 + 12x$
- Now, we set the first derivative equal to zero and solve for x:
  - $4x^3 - 12x^2 + 12x = 0$
  - $4x(x^2 - 3x + 3) = 0$ (here I solve by factorising)
  - $x = 0$ or $x = \frac{3 \pm \sqrt{3^2 - 4\times1\times3}}{2\times1}$
  - $x = 0$ or $x = \frac{3 \pm \sqrt{-3}}{2}$
  - $x = 0$ (the other two solutions are complex numbers)
- Next, we substitute $x = 0$ back into the original function to find the
  corresponding y-value:
  - $f(0) = (0)^4 - 4(0)^3 + 6(0)^2$
  - $= 0 - 0 + 0$
  - $= 0$
- **Answer**: The turning point is at $(0, 0)$.

