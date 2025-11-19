---
title: Power rule for differentiation
---

The **power rule** allows us to easy differentiate any function, as long as we
only have powers of $x$ (i.e. no addition, subtraction, multiplication or
division of $x$ terms).

To differentiate a term $ax^n$:
- Multiply the term by the power $n$: $a \times n$.
- Decrease the power by 1: $n - 1$.
- So the derivative of $ax^n$ is: $a \times n \times x^{n-1}$.

## Differentiating larger expressions

### Example: Differentiate $f(x) = 3x^4 + 2x^3 - 5x^2 + 7x - 4$

- Differentiate each term separately:
  - $3x^4$: Multiply by 4 and decrease power by 1: $3 \times 4 \times x^{4-1} = 12x^3$.
  - $2x^3$: Multiply by 3 and decrease power by 1: $2 \times 3 \times x^{3-1} = 6x^2$.
  - $-5x^2$: Multiply by 2 and decrease power by 1: $-5 \times 2 \times x^{2-1} = -10x$.
  - $7x$: Multiply by 1 and decrease power by 1: $7 \times 1 \times x^{1-1} = 7$.
  - $-4$: Constant term, derivative is $0$.
- Add together the results:
  - $f'(x) = 12x^3 + 6x^2 - 10x + 7$.
- **Answer:** $f'(x) = 12x^3 + 6x^2 - 10x + 7$.

### Example: Differentiate $g(x) = 5x^5 - 3x^4 + x^2 - 8$

- Differentiate each term separately:
  - $5x^5$: Multiply by 5 and decrease power by 1: $5 \times 5 \times x^{5-1} = 25x^4$.
  - $-3x^4$: Multiply by 4 and decrease power by 1: $-3 \times 4 \times x^{4-1} = -12x^3$.
  - $x^2$: Multiply by 2 and decrease power by 1: $1 \times 2 \times x^{2-1} = 2x$.
  - $-8$: Constant term, derivative is $0$.
- Add together the results:
  - $g'(x) = 25x^4 - 12x^3 + 2x$.
- **Answer:** $g'(x) = 25x^4 - 12x^3 + 2x$.

### Example: Differentiate $h(x) = 4x^3 + 6x - 9$

- Differentiate each term separately:
  - $4x^3$: Multiply by 3 and decrease power by 1: $4 \times 3 \times x^{3-1} = 12x^2$.
  - $6x$: Multiply by 1 and decrease power by 1: $6 \times 1 \times x^{1-1} = 6$.
  - $-9$: Constant term, derivative is $0$.
- Add together the results:
  - $h'(x) = 12x^2 + 6$.
- **Answer:** $h'(x) = 12x^2 + 6$.

### Example: Differentiate $k(x) = 7x^6 - 2x^3 + 5x^2 - x + 1$

- Differentiate each term separately:
  - $7x^6$: Multiply by 6 and decrease power by 1: $7 \times 6 \times x^{6-1} = 42x^5$.
  - $-2x^3$: Multiply by 3 and decrease power by 1: $-2 \times 3 \times x^{3-1} = -6x^2$.
  - $5x^2$: Multiply by 2 and decrease power by 1: $5 \times 2 \times x^{2-1} = 10x$.
  - $-x$: Multiply by 1 and decrease power by 1: $-1 \times 1 \times x^{1-1} = -1$.
  - $1$: Constant term, derivative is $0$.
- Add together the results:
  - $k'(x) = 42x^5 - 6x^2 + 10x - 1$.
- **Answer:** $k'(x) = 42x^5 - 6x^2 + 10x - 1$.

## Differentiating terms with negative or fractional powers

We can use the exact same power rule to differentiate terms with negative or
fractional powers.

Make sure to remember that, for negative powers, decreasing the power by 1 means
making it more negative (e.g. from $-2$ to $-3$).

### Example: Differentiate $m(x) = 2x^{-3} + 4x^{1/2} - 5$

- Differentiate each term separately:
  - $2x^{-3}$: Multiply by -3 and decrease power by 1: $2 \times -3 \times x^{-3-1} = -6x^{-4}$.
  - $4x^{1/2}$: Multiply by 1/2 and decrease power by 1: $4 \times \frac{1}{2} \times x^{\frac{1}{2}-1} = 2x^{-\frac{1}{2}}$.
  - $-5$: Constant term, derivative is $0$.
- Add together the results:
  - $m'(x) = -6x^{-4} + 2x^{-\frac{1}{2}}$.
- **Answer:** $m'(x) = -6x^{-4} + 2x^{-\frac{1}{2}}$.

### Example: Differentiate $n(x) = 3x^{3/2} - 2x^{-1} + 7$

- Differentiate each term separately:
  - $3x^{3/2}$: Multiply by 3/2 and decrease power by 1: $3 \times \frac{3}{2} \times x^{\frac{3}{2}-1} = \frac{9}{2}x^{\frac{1}{2}}$.
  - $-2x^{-1}$: Multiply by -1 and decrease power by 1: $-2 \times -1 \times x^{-1-1} = 2x^{-2}$.
  - $7$: Constant term, derivative is $0$.
- Add together the results:
  - $n'(x) = \frac{9}{2}x^{\frac{1}{2}} + 2x^{-2}$.
- **Answer:** $n'(x) = \frac{9}{2}x^{\frac{1}{2}} + 2x^{-2}$.

