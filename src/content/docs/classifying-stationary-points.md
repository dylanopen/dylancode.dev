---
title: Classifying stationary points
---

## What does the derivative mean?

- If $\frac{dy}{dx} > 0$, the function is increasing (as x increases, y increases)
- If $\frac{dy}{dx} < 0$, the function is decreasing (as x increases, y decreases)
- If $\frac{dy}{dx} = 0$, the function is stationary

## What does the *second* derivative mean?

If $\frac{dy}{dx} = 0$ at some point $x = a$, then we can use the second
derivative to find the *type* of stationary point:
- If $\frac{d^2y}{dx^2} > 0$, the point is a local **minimum**.
- If $\frac{d^2y}{dx^2} < 0$, the point is a local **maximum**.
- If $\frac{d^2y}{dx^2} = 0$, it *could* be a point of inflection, *but may not
  be*. We can't say for sure what type of stationary point it is.

### Example: find the stationary points of $y=x^3-3x^2+4$ and classify each

- $\frac{dy}{dx} = 3x^2 - 6x$
- Set $\frac{dy}{dx} = 0$:
  - $3x^2 - 6x = 0$
  - $3x(x - 2) = 0$
  - $x = 0$ or $x = 2$
- Substitute back to find y-coordinates:
  - At $x = 0$: $y = 0^3 - 3(0)^2 + 4 = 4$ -> Stationary point at (0, 4)
  - At $x = 2$: $y = 2^3 - 3(2)^2 + 4 = 8 - 12 + 4 = 0$ -> Stationary point at (2, 0)
- Now we find the second derivative:
  - $\frac{d^2y}{dx^2} = 6x - 6$
- Evaluate the second derivative at each stationary point:
  - At $x = 0$: $\frac{d^2y}{dx^2} = 6(0) - 6 = -6$ (less than 0) -> Local maximum at (0, 4)
  - At $x = 2$: $\frac{d^2y}{dx^2} = 6(2) - 6 = 6$ (greater than 0) -> Local minimum at (2, 0)
- **Answer**: Local maximum at (0, 4) and local minimum at (2, 0)

## Example: find the stationary points of $y=x^4-4x^3+6x^2$ and classify each

- $\frac{dy}{dx} = 4x^3 - 12x^2 + 12x$
- Set $\frac{dy}{dx} = 0$:
  - $4x^3 - 12x^2 + 12x = 0$
  - $4x(x^2 - 3x + 3) = 0$
  - $x = 0$ or $x = \frac{3 \pm \sqrt{3^2 - 4\times1\times3}}{2\times1}$
  - $x = 0$ or $x = \frac{3 \pm \sqrt{-3}}{2}$
  - $x = 0$ (the other two solutions are complex numbers)
- Substitute back to find y-coordinate:
  - At $x = 0$: $y = 0^4 - 4(0)^3 + 6(0)^2 = 0$ -> Stationary point at (0, 0)
- Now we find the second derivative:
  - $\frac{d^2y}{dx^2} = 12x^2 - 24x + 12$
- Evaluate the second derivative at the stationary point:
  - At $x = 0$: $\frac{d^2y}{dx^2} = 12(0)^2 - 24(0) + 12 = 12$ (greater than 0) -> Local minimum at (0, 0)
- **Answer**: Local minimum at (0, 0)

