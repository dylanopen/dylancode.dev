---
title: Straight line equation
---

You may be sitting there thinking "I know how to find the equation of a straight
line! It's just $y = mx + c$ right?"

You would be right. But actually, there's more than one way to express the
equation of a straight line, depending on what information you have about the
line - sometimes, another form is easier to use.

## $y = mx + c$

This is the form you're used to seeing. The values in the equation represent:
- $y$: the y-coordinate of any point on the line, which varies based on the
  x-coordinate.
- $x$: the x-coordinate of any point on the line (this goes on forever to
  represent all values on a graph).
- $m$: the gradient of the line - how steep it is. This is calculated by the 
  change in $y$ divided by the change in $x$ between any two points on the line.
- $c$: the y-intercept of the line - where it crosses the y-axis (where
  $x = 0$).

## $y - y_1 = m(x - x_1)$

You may or may not have seen this form before. It's called *point-gradient form*
and we use it in this situation:
- We know the gradient of the line, $m$.
- We know **one** point on the line, $(x_1, y_1)$.

> Remember: $y$ and $x$ are the coordinates of **any** point on the line - we do
> not know these values. The equation of any line/curve will have an $x$ and $y$
> in it - don't be caught out by trying to find the values of them.

This form is useful because we can substitute in the values we know (the
gradient and the point) to get an equation that only has $x$ and $y$ in it -
which is what we want for the equation of a line.

The values in the equation represent:
- $x_1$: the x-coordinate of the **known** point on the line.
- $y_1$: the y-coordinate of the **known** point on the line.
- $m$: the gradient of the line.

### Find the equation of the line with gradient 3 that passes through the point (2, 5).

- Values we know:
  - $m = 3$
  - $x_1 = 2$
  - $y_1 = 5$
- Substitute into the formula:
  - $y - y_1 = m(x - x_1)$
  - $y - 5 = 3(x - 2)$
- Technically, we've now found the equation, but we can still *simplify it*:
  - $y - 5 = 3x - 6$
  - $y = 3x - 6 + 5$
  - $y = 3x - 1$
- **Answer**: The equation of the line is $y = 3x - 1$.

### Find the equation of the line with gradient -2 that passes through the point (-1, 4).

- Values we know:
  - $m = -2$
  - $x_1 = -1$
  - $y_1 = 4$
- Substitute into the formula:
  - $y - y_1 = m(x - x_1)$
  - $y - 4 = -2(x - (-1))$
- Again, we've now found the equation, but we can still *simplify it*:
  - $y - 4 = -2(x + 1)$
  - $y - 4 = -2x - 2$
  - $y = -2x - 2 + 4$
  - $y = -2x + 2$
- **Answer**: The equation of the line is $y = -2x + 2$.

## Finding the gradient from two points

There isn't an explicit formula for finding the equation of a straight line from
two points.

Technically, there could be. In fact, why don't I make one up now?  
Below, $(x_1, y_1)$ and $(x_2, y_2)$ are the two points we know:

$$
y-y_1 = (\frac{y_2 - y_1}{x_2 - x_1})(x - x_1)
$$

That isn't too nice to look at. But actually, you may notice that *all* I have
done is substitute the formula for gradient ($m = \frac{y_2 - y_1}{x_2 - x_1}$)
into the point-gradient form of the straight line equation
($y - y_1 = m(x - x_1)$).

That's because we can calculate the gradient from two points like this:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

(this is the mathematical way of saying 'change in y over change in x').

Once we have the gradient, we can use either of the two forms of the straight
line equation above to find the full equation of the line. The second form is
usually easier to use, since we already have a point.

We can also pick *either* point to use in the equation - it doesn't matter
which one we choose - but it generally is easier to use the first point
listed :)

### Find the equation of the line that passes through the points (1, 2) and (4, 8).

- Values we know:
  - $x_1 = 1$
  - $y_1 = 2$
  - $x_2 = 4$
  - $y_2 = 8$
- First, we find the gradient:
  - $m = \frac{y_2 - y_1}{x_2 - x_1}$
  - $= \frac{8 - 2}{4 - 1}$
  - $= \frac{6}{3}$
  - $= 2$
- Next, we substitute the gradient and one of the points into the point-gradient form of the equation:
  - $y - y_1 = m(x - x_1)$
  - $y - 2 = 2(x - 1)$
- Finally, we can simplify the equation:
  - $y - 2 = 2x - 2$
  - $y = 2x - 2 + 2$
  - $y = 2x$
- **Answer**: The equation of the line is $y = 2x$.

### Find the equation of the line that passes through the points (-2, 3) and (1, -1).

- Values we know:
  - $x_1 = -2$
  - $y_1 = 3$
  - $x_2 = 1$
  - $y_2 = -1$
- First, we find the gradient:
  - $m = \frac{y_2 - y_1}{x_2 - x_1}$
  - $= \frac{-1 - 3}{1 - (-2)}$
  - $= \frac{-4}{1 + 2}$
  - $= \frac{-4}{3}$
- Next, we substitute the gradient and one of the points into the point-gradient form of the equation:
  - $y - y_1 = m(x - x_1)$
  - $y - 3 = -\frac{4}{3}(x - (-2))$
- Finally, we can simplify the equation:
  - $y - 3 = -\frac{4}{3}(x + 2)$
  - $y - 3 = -\frac{4}{3}x - \frac{8}{3}$
  - $y = -\frac{4}{3}x - \frac{8}{3} + 3$
  - $y = -\frac{4}{3}x - \frac{8}{3} + \frac{9}{3}$
  - $y = -\frac{4}{3}x + \frac{1}{3}$
- **Answer**: The equation of the line is $y = -\frac{4}{3}x + \frac{1}{3}$.

