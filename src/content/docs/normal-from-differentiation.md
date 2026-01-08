---
title: Normal from differentiation
---

Finding the normal to a curve at a given point is *very* similar to finding the
tangent. We just need to remember one thing:

> A normal is *perpendicular* to the tangent and curve at that point. That means
> that its gradient is the *negative reciprocal* of the tangent's gradient.

For exmaple:
- If the gradient of the tangent is 2, the gradient of the normal is $-\frac12$.
- If the gradient of the tangent is $-\frac34$, the gradient of the normal is
  $\frac43$.
- If the gradient of the tangent is 5, the gradient of the normal is $-\frac15$.

## Finding the gradient of a normal

To find the gradient of a normal to a curve at a given point, we first need to
find the gradient of the curve at that point (i.e. the gradient of the tangent).

We can do this by differentiating the function to get its derivative (gradient
function), and then substituting in the x-coordinate of the point we want the
normal at.

Then, remember to take the negative reciprocal of that gradient to get the
gradient of the normal!

### Find the gradient of the normal to the curve $f(x) = x^3 - 2x + 1$ at the point where $x = 2$.

- First, we find the first derivative:
  - $f'(x) = 3x^{3-1} - 2\times1x^{1-1} + 0$
  - $= 3x^2 - 2$
- Next, we substitute in $x = 2$ to find the gradient of the curve at that
  point:
  - $f'(2) = 3(2)^2 - 2$
  - $= 3\times4 - 2$
  - $= 12 - 2$
  - $= 10$
- Finally, we take the negative reciprocal to find the gradient of the normal:
  - Gradient of normal $= -\frac{1}{10}$
- **Answer**: The gradient of the normal at the point where $x = 2$ is
  $-\frac{1}{10}$.

## Finding the full equation of the normal

Once we have the gradient of the normal, we can find its full equation in the
same way as we would for a tangent.

Find a point that the normal passes through - we can do that by substituting the
x-coordinate of the intersection point into the original function to get the
y-coordinate.

Then, substitute the gradient and the point into the equation of a straight line
to find the y-intercept, and finally write the full equation of the normal.

### Find the full equation of the normal to the curve $f(x) = x^3 - 2x + 1$ at the point where $x = 2$.

(continuing from where we left off above)

- We already know that the normal passes through the point where $x = 2$. So we
  substitute $x = 2$ into the original function to find the corresponding
  y-coordinate:
  - $f(2) = (2)^3 - 2(2) + 1$
  - $= 8 - 4 + 1$
  - $= 5$
- So the normal passes through the point (2, 5).
- Now we can substitute all the information we have into the equation of a straight
  line to find the y-intercept, $c$:
  - $y = mx + c$
  - $5 = -\frac{1}{10}(2) + c$
  - $5 = -\frac{2}{10} + c$
  - $5 = -\frac{1}{5} + c$
  - $c = 5 + \frac{1}{5}$
  - $c = \frac{25}{5} + \frac{1}{5}$
  - $c = \frac{26}{5}$
- Now we have our gradient and y-intercept, we can write the full equation of
  the normal:
- $y = -\frac{1}{10}x + \frac{26}{5}$

### Find the equation of the normal to the curve $f(x) = 2x^2 + 3x + 1$ at the point where $x = -1$.

- First, we find the first derivative:
  - $f'(x) = 2\times2x^{2-1} + 1\times3x^{1-1} + 0$
  - $= 4x + 3$
- Next, we substitute in $x = -1$ to find the gradient of the curve at that point:
  - $f'(-1) = 4(-1) + 3$
  - $= -4 + 3$
  - $= -1$
- Now, we take the negative reciprocal to find the gradient of the normal:
  - Gradient of normal $= 1$
- Now, we find the corresponding y-coordinate by substituting $x = -1$ into the
  original function:
  - $f(-1) = 2(-1)^2 + 3(-1) + 1$
  - $= 2(1) - 3 + 1$
  - $= 2 - 3 + 1$
  - $= 0$
- So the normal passes through the point (-1, 0).
- Now we can substitute all the information we have into the equation of a straight
  line to find the y-intercept, $c$:
  - $y = mx + c$
  - $0 = 1(-1) + c$
  - $0 = -1 + c$
  - $c = 0 + 1$
  - $c = 1$
- Now we have our gradient and y-intercept, we can write the full equation of
  the normal:
  - $y = 1x + 1$
  - $y = x + 1$
- **Answer**: $y = x + 1$

