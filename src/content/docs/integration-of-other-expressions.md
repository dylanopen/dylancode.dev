---
title: Integration of other expressions
---

If, instead of having an expression with all terms in the form $ax^n$, like:

$$
\frac{dy}{dx}=\frac13x^4-8x^{-\frac12}
$$

we instead have something like this:

$$
\frac{dy}{dx}=\frac1{3x^{-4}}-\frac8{\sqrt x}
$$

...then we need to convert it into the form of the first expression.

### Integrate $5x^2 + \frac7x - \frac3{\sqrt x}$

- Rewrite each term in the form $ax^n$:
  - $5x^2$ stays the same - already in the right form.
  - $\frac7x$ can be rewritten as $7x^{-1}$.
  - $\frac3{\sqrt x}$ can be rewritten as $3x^{-\frac12}$.
- So the expression becomes:
  - $5x^2 + 7x^{-1} - 3x^{-\frac12}$
- Now integrate this expression term-by-term:
  - $\int 5x^2 \, dx = \frac53 x^3$
  - $\int 7x^{-1} \, dx = 7 \ln|x|$
  - $\int -3x^{-\frac12} \, dx = -6x^{\frac12}$
- Adding them all together, we have:
  - $\int \left(5x^2 + \frac7x - \frac3{\sqrt x}\right) dx = \frac53 x^3 + 7 \ln|x| - 6x^{\frac12} + c$

### Find $\int \left(\frac2{x^3} + \frac5{\sqrt[3]{x}} - \frac4{x^2}\right) dx$

- Rewrite each term in the form $ax^n$:
  - $\frac2{x^3}$ can be rewritten as $2x^{-3}$.
  - $\frac5{\sqrt[3]{x}}$ can be rewritten as $5x^{-\frac13}$.
  - $\frac4{x^2}$ can be rewritten as $4x^{-2}$.
- So the expression becomes:
  - $2x^{-3} + 5x^{-\frac13} - 4x^{-2}$
- Now integrate this expression term-by-term:
  - $\int 2x^{-3} \, dx = -x^{-2}$
  - $\int 5x^{-\frac13} \, dx = \frac{15}{2} x^{\frac23}$
  - $\int -4x^{-2} \, dx = 4x^{-1}$
- Adding them all together, we have:
  - $\int \left(\frac2{x^3} + \frac5{\sqrt[3]{x}} - \frac4{x^2}\right) dx = -x^{-2} + \frac{15}{2} x^{\frac23} + 4x^{-1} + c$

### Find $f(x)$ given that $f'(x) = \frac{3}{x^2} - \frac{2}{\sqrt x} + 4x^3$ and $f(1) = 7$

- Rewrite each term in the form $ax^n$:
  - $\frac{3}{x^2}$ can be rewritten as $3x^{-2}$.
  - $\frac{2}{\sqrt x}$ can be rewritten as $2x^{-\frac12}$.
  - $4x^3$ stays the same - already in the right form.
- So the expression becomes:
  - $3x^{-2} - 2x^{-\frac12} + 4x^3$
- Now integrate this expression term-by-term:
  - $\int 3x^{-2} \, dx = -3x^{-1}$
  - $\int -2x^{-\frac12} \, dx = -4x^{\frac12}$
  - $\int 4x^3 \, dx = x^4$
- Adding them all together, we have:
  - $f(x) = -3x^{-1} - 4x^{\frac12} + x^4 + c$
- Now use the initial condition $f(1) = 7$ to find $c$:
  - $f(1) = -3(1)^{-1} - 4(1)^{\frac12} + (1)^4 + c = -3 - 4 + 1 + c = -6 + c$
  - Set this equal to 7:
    - $-6 + c = 7$
    - $c = 13$
- Put this value of $c$ back into the expression for $f(x)$:
  - $f(x) = -3x^{-1} - 4x^{\frac12} + x^4 + 13$

### Find $\int \left(\frac{6}{x^4} - \frac{5}{\sqrt{x}} + \frac{2}{x}\right) dx$

- Rewrite each term in the form $ax^n$:
  - $\frac{6}{x^4}$ can be rewritten as $6x^{-4}$.
  - $\frac{5}{\sqrt{x}}$ can be rewritten as $5x^{-\frac12}$.
  - $\frac{2}{x}$ can be rewritten as $2x^{-1}$.
- So the expression becomes:
  - $6x^{-4} - 5x^{-\frac12} + 2x^{-1}$
- Now integrate this expression term-by-term:
  - $\int 6x^{-4} \, dx = -2x^{-3}$
  - $\int -5x^{-\frac12} \, dx = -10x^{\frac12}$
  - $\int 2x^{-1} \, dx = 2 \ln|x|$
- Adding them all together, we have:
  - $\int \left(\frac{6}{x^4} - \frac{5}{\sqrt{x}} + \frac{2}{x}\right) dx = -2x^{-3} - 10x^{\frac12} + 2 \ln|x| + c$

