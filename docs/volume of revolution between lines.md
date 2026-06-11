# Volume of revolution between lines

If we have two lines, $y = f(x)$ and $y = g(x)$, where $f(x) \geq g(x)$ for all $x$ in
the interval we're interested in, and we want to find the
[[volume of revolution]] when we revolve the area between
those lines around the $x$-axis, we can either:
- find the [[volume of revolution]] of the area under $y = f(x)$ and subtract the
  [[volume of revolution]] of the area under $y = g(x)$, or
- find $\pi \int_a^b (f(x)^2 - g(x)^2) \, dx$

## Formula

As just mentioned, we have a fancy formula for finding the [[volume of revolution]]
of the area *between* two lines or curves, which is:

> $$
> V = \pi \int_a^b (f(x)^2 - g(x)^2) \, dx
> $$

Where:
- $V$ is the [[volume of revolution]] of the area between the two lines or curves.
- $f(x)$ is the function that represents the upper line or curve (the one that's
  further from the $x$-axis at the region we care about).
- $g(x)$ is the function that represents the lower line or curve (the one that's
  closer to the $x$-axis at the region we care about).
- $a$ and $b$ are the limits of integration, which represent the
  [[range]] of coordinates we're rotating.

## Common mistakes

- You **cannot** square the whole integral. You need to square the functions
  first, and then integrate the difference of the **squares**.
- You **cannot** just integrate the difference of the functions, and then square
  the result. You need to square the functions first, and then integrate the
  difference of the **squares**.
- Forgetting to multiply by $\pi$ at the end!
- Forgetting to subtract the smaller function from the larger function. You need
  to make sure that $f(x) \geq g(x)$ for all $x$ in the interval you're
  interested in, otherwise you'll get a negative volume, which doesn't make
  sense!

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the formula for the volume of revolution about the $x$-axis of the area between $y=f(x)$ (upper) and $y=g(x)$ (lower)? | $V = \pi \int_a^b (f(x)^2 - g(x)^2) \, dx$ |
| What must be true about $f(x)$ and $g(x)$ for all $x$ in the interval of interest to ensure a positive volume? | $f(x) \geq g(x)$ (the upper curve must be further from the $x$-axis) |
| What is one method of finding the volume of revolution of the area between two curves, apart from the formula? | Find the volume of revolution under $y=f(x)$ and subtract the volume of revolution under $y=g(x)$. |
| What is a common mistake regarding the order of operations for squaring and integrating in the formula? | You cannot square the whole integral; you must square the functions first, then integrate the difference of the squares. |
| What is the mistake of integrating the difference of functions first and then squaring the result? | You must square the functions first, then integrate the difference of the squares. You cannot integrate $(f(x)-g(x))$ and then square the integral. |
| What component of the formula is commonly forgotten? | Multiplying by $\pi$ at the end. |
| What happens if you subtract the smaller function from the larger function in the wrong order? | You will get a negative volume, which does not make sense. |

