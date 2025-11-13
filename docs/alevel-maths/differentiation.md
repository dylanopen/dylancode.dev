# Differentiation

Differentiation is the process of *finding the derivative* otherwise known as 
the **gradient function**.

It allows us to find the gradient of a curve **at a specific point**, just from
its equation.

## The power rule

The power rule is the most common rule for differentiation. It states that:

$$
\frac{d}{dx}(x^n) = nx^{n-1}
$$

This means we multiply by the power, then subtract 1 from the power.

### Example: differentiate $x^3$

- $\frac{d}{dx}(x^3) = 3x^{3-1}$
- $= 3x^2$

### Example: differentiate $x^5$

- $\frac{d}{dx}(x^5) = 5x^{5-1}$
- $= 5x^4$

## Differentiating with coefficients

When we have a coefficient in front of the term, we multiply it by the power:

### Example: differentiate $4x^3$

- $\frac{d}{dx}(4x^3) = 4 \times 3x^{3-1}$
- $= 12x^2$

### Example: differentiate $7x^2$

- $\frac{d}{dx}(7x^2) = 7 \times 2x^{2-1}$
- $= 14x$

## Differentiating polynomials

To differentiate a polynomial, we differentiate each term separately:

### Example: differentiate $x^3 + 2x^2 - 5x + 7$

- $\frac{d}{dx}(x^3) = 3x^2$
- $\frac{d}{dx}(2x^2) = 4x$
- $\frac{d}{dx}(-5x) = -5$
- $\frac{d}{dx}(7) = 0$ (constants differentiate to zero)
- Combined: $3x^2 + 4x - 5$

### Example: differentiate $2x^4 - 6x^3 + 3x - 1$

- $\frac{d}{dx}(2x^4) = 8x^3$
- $\frac{d}{dx}(-6x^3) = -18x^2$
- $\frac{d}{dx}(3x) = 3$
- $\frac{d}{dx}(-1) = 0$
- Combined: $8x^3 - 18x^2 + 3$

