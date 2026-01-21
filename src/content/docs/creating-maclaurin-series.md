---
title: Creating Maclaurin series
---

## Finding the Maclaurin series for a function

$$
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\frac{f'''(0)}{3!}x^3+\cdots
$$

## Finding a series from standard results

### Create a series for $\cos2x^3$

We know the maclaurin series for $\cos x$:

$$
\cos x = 1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
$$

Now we can just substitute $2x^3$ in place of $x$:

$$
\cos 2x^3 = 1-\frac{(2x^3)^2}{2!}+\frac{(2x^3)^4}{4!}-\frac{(2x^3)^6}{6!}+\cdots
$$

Next, we can expand + simplify the powers:

$$
\cos 2x^3 = 1-\frac{4x^6}{2!}+\frac{16x^{12}}{4!}-\frac{64x^{18}}{6!}+\cdots
$$

And then simplify the factorials and coefficient fractions:

$$
\cos 2x^3 = 1-2x^6+\frac{2}{3}x^{12}-\frac{32}{45}x^{18}+\cdots
$$


### Create a series for $e^{\sin x}$

- We know the maclaurin series for $e^x$ and $\sin x$:
  - $\sin x = x-\frac{x^3}{3!}+\frac{x^5}{5!}$
  - $e^x = 1+x+\frac{x^2}{2!}+\frac{x^3}{3!}$
- What if we substitute the series for $\sin x$ into the series for $e^x$?
  - $e^{x-\frac{x^3}6+\frac{x^5}{120}+\cdots} = e^x \cdot e^{-\frac{x^3}6} \cdot e^{\frac{x^5}{120}} \cdots$
- Again, we can substitute the series for $e^x$ into each of these:
  - $e^x = 1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\frac{x^5}{5!}+\cdots$
  - $e^{-\frac{x^3}6} = 1-\frac{x^3}6+\frac{\left(-\frac{x^3}6\right)^2}{2!}+\cdots = 1-\frac{x^3}6+\frac{x^6}{72}+\cdots$
  - $e^x+e^{-\frac{x^3}6}= \left(1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\right)\left(1-\frac{x^3}6+\frac{x^6}{72}+\cdots\right)$

> **TODO: finish this stupid question, I can't bear even looking at it anymore**

### Create a series for $\ln(2-3x)$

- We know the maclaurin series for $\ln(1+x)$:
  - $\ln(1+x) = x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots$
- We can rewrite $\ln(2-3x)$ as:
  - $\ln(2-3x) = \ln\left(2\left(1-\frac{3x}2\right)\right) = \ln(2) + \ln\left(1-\frac{3x}2\right)$
- Now we substitute $-\frac{3x}2$ in place of $x$ in the series for $\ln(1+x)$:
  - $\ln\left(1-\frac{3x}2\right) = -\frac{3x}2 - \frac{\left(-\frac{3x}2\right)^2}{2} + \frac{\left(-\frac{3x}2\right)^3}{3} - \frac{\left(-\frac{3x}2\right)^4}{4} + \cdots$
- Expand and simplify the powers:
  - $\ln\left(1-\frac{3x}2\right) = -\frac{3x}2 - \frac{9x^2}{8} - \frac{27x^3}{24} - \frac{81x^4}{64} + \cdots$
- At the end, we combine this with $\ln(2)$ to get the final series:
  - $\ln(2-3x) = \ln(2) - \frac{3x}2 - \frac{9x^2}{8} - \frac{27x^3}{24} - \frac{81x^4}{64} + \cdots$

### Create a series for the expression $\ln(\sqrt{1+2x})$

- $=\ln((1+2x)^{\frac12})$
- $=\frac12\ln(1+2x)$
- We know the maclaurin series for $\ln(1+x)$:
  - $\ln(1+x) = x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots$
- We can substitute $2x$ in place of $x$ in the series for $\ln(1+x)$:
  - $\ln(1+2x) = 2x - \frac{(2x)^2}{2} + \frac{(2x)^3}{3} - \frac{(2x)^4}{4} + \cdots$
- Expand and simplify the powers:
  - $\ln(1+2x) = 2x - 2x^2 + \frac{8x^3}{3} - 4x^4 + \cdots$
- Finally, we multiply the series by $\frac12$ to get the final result:
  - $\ln(\sqrt{1+2x}) = x - x^2 + \frac{4x^3}{3} - 2x^4 + \cdots$

