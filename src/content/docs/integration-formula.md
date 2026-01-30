---
title: Integration formula
---

If you remember back to the [power rule for differentiation](/power-rule-for-differentiation),
the derivative of $ax^n$ is:

$$
a\times n\times x^{n-1}
$$

We can rearrange this to find the *inverse*, which gives our formula for
**integration**:

$$
\int ax^n\space dx = a\div(n+1) \times x^{n+1}
$$

> We use $c$ here because we don't know what the constant term on the end was.
> This constant was removed during differentiation - we can't know what it will
> be after we integrate.

### Find $\int 4x+3 \space dx$

- $\int ax^n\space dx=a\div(n+1) \times x^{n+1}$:
  - $\int4x\space dx=4\div(1+1)\times x^{1+1}=2x^2$
  - $\int3\space dx=3\div(0+1)\times x^{0+1}3x$
- Answer: $2x^2+3x+c$

### Find the integral of $\frac{dy}{dx}=9x-4$

- $\int ax^n\space dx=a\div(n+1) \times x^{n+1}$:
  - $\int9x^1\space dx=9\div(1+1)\times x^{1+1}=\frac92x^2$
  - $\int4x^0\space dx=4\div(0+1)\times x^{0+1}=4x^1=4x$
- Answer: $\frac92x^2+4x+c$

### Given that $f'(x)=\sqrt x-4x^{-\frac34}$ and that $f(0)=3$, find $f(x)$

- $\int ax^n\space dx=a\div(n+1) \times x^{n+1}$:
  - $\int 1x^{\frac12}\space dx=1\div(\frac12+1)\times x^{\frac12+1}=\frac23x^{\frac32}$
  - $\int 4x^{-\frac34}\space dx=1\div(-\frac34+1)\times x^{-\frac34+1}=-\frac47x^{\frac14}$

> TODO: finish and correct example

