---
title: Tangent from differentiation
---

Using differentiation, we can find the equation of the tangent to a curve at 
*any* point we like!

## Finding the gradient of a tangent

The tangent is a straight line, meaning that one thing we need to find is its
**gradient**.

As we already know, we can find the gradient of a curve at any point by
differentiating the function to get its derivative (gradient function), and
then substituting in the x-coordinate of the point we want the tangent at!

### Find the gradient of the tangent to the curve $f(x) = x^3 - 2x + 1$ at the point where $x = 2$.

- First, we find the first derivative:
  - $f'(x) = 3x^{3-1} - 2\times1x^{1-1} + 0$
  - $= 3x^2 - 2$
- Next, we substitute in $x = 2$ to find the gradient of the tangent at that point:
  - $f'(2) = 3(2)^2 - 2$
  - $= 3\times4 - 2$
  - $= 12 - 2$
  - $= 10$
- **Answer**: The gradient of the tangent at the point where $x = 2$ is $10$.

## Finding the full equation of the tangent

Let's take the example from above one more step and find the *full* equation of
the tangent. Currently, we just know its gradient.

You may remember that we can find the y-intercept of *any* straight line if we
know the *gradient* and *one point* on the line. Well, we do know a point on the
line :)

We know that the tangent intersects the curve at the point where $x = 2$. So if
we substitute $x = 2$ into the original function, we can find the corresponding
y-coordinate, and so get the full point!

- $f(2) = (2)^3 - 2(2) + 1$
- $= 8 - 4 + 1$
- $= 5$
- So the tangent touches the curve at the point (2, 5).

Now we have a point, we can substitute all the information we have into the
equation of a straight line to find the y-intercept, $c$:

- $y = mx + c$
- $5 = 10(2) + c$
- $5 = 20 + c$
- $c = 5 - 20$
- $c = -15$

Now we have our gradient and y-intercept, we can write the full equation of the
tangent:

$$
y = 10x - 15
$$


### Find the equation of the tangent to the curve $f(x) = 2x^2 + 3x + 1$ at the point where $x = -1$.

- First, we find the first derivative:
  - $f'(x) = 2\times2x^{2-1} + 1\times3x^{1-1} + 0$
  - $= 4x + 3$
- Next, we substitute in $x = -1$ to find the gradient of the tangent at that point:
  - $f'(-1) = 4(-1) + 3$
  - $= -4 + 3$
  - $= -1$
- Now, we find the corresponding y-coordinate by substituting $x = -1$ into the
  original function:
  - $f(-1) = 2(-1)^2 + 3(-1) + 1$
  - $= 2(1) - 3 + 1$
  - $= 2 - 3 + 1$
  - $= 0$
- So the tangent touches the curve at the point (-1, 0).
- Now we can substitute all the information we have into the equation of a
  straight line to find the y-intercept, $c$:
  - $y = mx + c$
  - $0 = -1(-1) + c$
  - $0 = 1 + c$
  - $c = 0 - 1$
  - $c = -1$
- Now we have our gradient and y-intercept, we can write the full equation of
  the tangent:
  - $y = -1x - 1$
  - $y = -x - 1$
- **Answer**: $y = -x - 1$

