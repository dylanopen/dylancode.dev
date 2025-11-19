---
title: Finding stationary points from the derivative
---

## Where are the stationary points?

The stationary points of a function are where the (first) derivative is equal to
zero.

## What does the derivative mean?

- If $\frac{dy}{dx} > 0$, the function is increasing (as x increases, y increases)
- If $\frac{dy}{dx} < 0$, the function is decreasing (as x increases, y decreases)
- If $\frac{dy}{dx} = 0$, the function is stationary

## Finding the type of stationary point

If $\frac{dy}{dx} = 0$ at some point $x = a$, then we can use the second
derivative to find the *type* of stationary point:
- If $\frac{d^2y}{dx^2} > 0$, the point is a local **minimum**.
- If $\frac{d^2y}{dx^2} < 0$, the point is a local **maximum**.
- If $\frac{d^2y}{dx^2} = 0$, it *could* be a point of inflection, *but may not
  be*. We can't say for sure what type of stationary point it is.

### Example: find the stationary points of $y=x^3-3x^2+4$

- $\frac{dy}{dx} = 3x^2 - 6x$
- Set $\frac{dy}{dx} = 0$:
  - $3x^2 - 6x = 0$
  - $3x(x - 2) = 0$
  - $x = 0$ or $x = 2$
- Substitute back to find y-coordinates:
  - At $x = 0$: $y = 0^3 - 3(0)^2 + 4 = 4$ → Stationary point at (0, 4)
  - At $x = 2$: $y = 2^3 - 3(2)^2 + 4 = 8 - 12 + 4 = 0$ → Stationary point at (2, 0)
Answer: $(0, 4)$ and $(2, 0)$

