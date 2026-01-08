---
title: Circle-line intersection
---

If we want to find the points of intersection between a circle and a line, 
there are three possiblities:
- The line does not intersect the circle (0 points of intersection)
- The line is tangent to the circle (1 point of intersection)
- The line intersects the circle in two places (2 points of intersection)

## Finding the points of intersection between a circle and a line

If we want to *find* the points of intersection, we can use good old
simultaneous equations! We won't be able to use elimination, but we can use
substitution.

Here are the steps:
1. Write down the equations of the circle and the line.
2. Rearrange the equation of the line to make $y$ the subject (if it isn't
   already).
3. Substitute the expression for $y$ from the line equation into the circle
   equation.
4. Rearrange the resulting equation into the form $ax^2 + bx + c = 0$.
5. Solve the quadratic equation using the quadratic formula, factorisation, or
   completing the square.
6. Substitute the $x$-values found back into the equation of the line to find
   the corresponding $y$-values.

That's sounds like a lot of steps, but let's see it in action with an example.

### find the points of intersection between the circle $x^2 + y^2 = 25$ and the line $y = 2x + 1$.

- Write down the equations:
  - Circle: $x^2 + y^2 = 25$
  - Line: $y = 2x + 1$
- Substitute the expression for $y$ from the line equation into the circle
  equation:
  - $x^2 + (2x + 1)^2 = 25$
- Expand the equation:
  - $x^2 + (4x^2 + 4x + 1) = 25$
  - $x^2 + 4x^2 + 4x + 1 = 25$
  - $5x^2 + 4x + 1 = 25$
- Rearrange into the form $ax^2 + bx + c = 0$:
  - $5x^2 + 4x + 1 - 25 = 0$
  - $5x^2 + 4x - 24 = 0$
- Solve the quadratic equation using the quadratic formula:
  - $x = \frac{-4 \pm \sqrt{4^2 - 4 \times 5 \times -24}}{2 \times 5}$
  - $= \frac{-4 \pm \sqrt{16 + 480}}{10}$
  - $= \frac{-4 \pm \sqrt{496}}{10}$
  - $= \frac{-4 \pm 4\sqrt{31}}{10}$
  - $= \frac{-2 \pm 2\sqrt{31}}{5}$
- Find the corresponding $y$-values by substituting the $x$-values back into the
  equation of the line:
  - For $x = \frac{-2 + 2\sqrt{31}}{5}$:
    - $y = 2(\frac{-2 + 2\sqrt{31}}{5}) + 1$
    - $= \frac{-4 + 4\sqrt{31}}{5} + 1$
    - $= \frac{-4 + 4\sqrt{31}}{5} + \frac{5}{5}$
    - $= \frac{1 + 4\sqrt{31}}{5}$
  - For $x = \frac{-2 - 2\sqrt{31}}{5}$:
    - $y = 2(\frac{-2 - 2\sqrt{31}}{5}) + 1$
    - $= \frac{-4 - 4\sqrt{31}}{5} + 1$
    - $= \frac{-4 - 4\sqrt{31}}{5} + \frac{5}{5}$
    - $= \frac{1 - 4\sqrt{31}}{5}$
- **Answer**: The points of intersection are:
  - $\frac{-2 + 2\sqrt{31}}{5}, \frac{1 + 4\sqrt{31}}{5})$
  - $\frac{-2 - 2\sqrt{31}}{5}, \frac{1 - 4\sqrt{31}}{5})$

