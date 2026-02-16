---
title: Converting exponentials to base e
---

As mentioned in the [last topic](/base-e-exponentials), the gradient of $e^x$ is
exactly the same as the $y$ value at that point.

That makes a lot of things much easier for us to work with!

We can actually use this power of base e exponentials with *any* exponential
function - by converting them to base $e$.

## $a=e^{\ln(a)}$

The key to converting any exponential function to base $e$ is the fact that we
can rewrite any number $a$ as $e^{\ln(a)}$.

Basically, what we're doing here is finding what number we need to raise
$e$ to in order to get $a$ - and that number is $\ln(a)$.

Then, we raise $e$ *to that power* to get $a$ back.

While it might seem like we've complicated things, we now have a term in base
$e$, which we can find the gradient of!

## Converting $a^x$ to base $e$

Knowing that $a=e^{\ln(a)}$, we can rewrite $a^x$ as $(e^{\ln(a)})^x$.

Then, we can use the rule of indices that says that $(a^b)^c = a^{bc}$ to
rewrite $(e^{\ln(a)})^x$ as $e^{x\ln(a)}$.

## Finding the gradient of $a^x$

Now we have $a^x$ rewritten as $e^{x\ln(a)}$, we can find the gradient of it
using the rule that $\frac{d}{dx}e^{f(x)} = f'(x)e^{f(x)}$ (see
[base e exponentials](/base-e-exponentials) for more on that rule).

In this case, $f(x) = x\ln(a)$, so $f'(x) = \ln(a)$ (because $\ln(a)$ is a
constant, so it just comes out of the differentiation).

Then, we can apply the rule to get $\frac{d}{dx}e^{x\ln(a)} = \ln(a)e^{x\ln(a)}$.

Finally, we can rewrite $e^{x\ln(a)}$ back to $a^x$ to get the final answer of
$\frac{d}{dx}a^x = \ln(a)a^x$.

> $\frac{d}{dx}a^x = \ln(a)a^x$ for any $a > 0$ and $a \neq 1$.

## Example: $2^x$

### Convert $2^x$ to base $e$

- $2^x = (e^{\ln(2)})^x$ (because $2 = e^{\ln(2)}$)
- $2^x = e^{x\ln(2)}$ (using the rule of indices)
- Answer: $e^{x\ln(2)}$

### Find the gradient of $2^x$

- $\frac{d}{dx}2^x = \ln(2)2^x$ (using the rule for finding the gradient of $a^x$)
- Answer: $\ln(2)2^x$

### Find the gradient of $2^x$ at the point $(1, 2)$

- $\frac{d}{dx}2^x = \ln(2)2^x$ (using the rule for finding the gradient of $a^x$)
- $\frac{d}{dx}2^x = \ln(2)2^1$ (substituting $x=1$ into the expression for the gradient)
- $\frac{d}{dx}2^x = \ln(2) \cdot 2$ (simplifying)
- Answer: $\ln(2) \cdot 2$

## Example: $5^2x$

### Convert $5^{2x}$ to base $e$

- $5^{2x} = (e^{\ln(5)})^{2x}$ (because $5 = e^{\ln(5)}$)
- $5^{2x} = e^{2x\ln(5)}$ (using the rule of indices)
- Answer: $e^{2x\ln(5)}$

### Find the gradient of $5^{2x}$

- $\frac{d}{dx}5^{2x} = 2\ln(5)5^{2x}$ (using the rule for finding the gradient of $a^x$)
- Answer: $2\ln(5)5^{2x}$

### Find the gradient of $5^{2x}$ at the point $(0, 1)$

- $\frac{d}{dx}5^{2x} = 2\ln(5)5^{2x}$ (using the rule for finding the gradient of $a^x$)
- $\frac{d}{dx}5^{2x} = 2\ln(5)5^0$ (substituting $x=0$ into the expression for the gradient)
- $\frac{d}{dx}5^{2x} = 2\ln(5) \cdot 1$ (simplifying)
- Answer: $2\ln(5)$

### Find the gradient of $5^{2x}$ at the point $(1, 25)$

- $\frac{d}{dx}5^{2x} = 2\ln(5)5^{2x}$ (using the rule for finding the gradient of $a^x$)
- $\frac{d}{dx}5^{2x} = 2\ln(5)5^2$ (substituting $x=1$ into the expression for the gradient)
- $\frac{d}{dx}5^{2x} = 2\ln(5) \cdot 25$ (simplifying)
- Answer: $50\ln(5)$

## Example: $10^{-x}$

### Convert $10^{-x}$ to base $e$

- $10^{-x} = (e^{\ln(10)})^{-x}$ (because $10 = e^{\ln(10)}$)
- $10^{-x} = e^{-x\ln(10)}$ (using the rule of indices)
- Answer: $e^{-x\ln(10)}$

### Find the gradient of $10^{-x}$

- $\frac{d}{dx}10^{-x} = -\ln(10)10^{-x}$ (using the rule for finding the gradient of $a^x$)
- Answer: $-\ln(10)10^{-x}$

### Find the gradient of $10^{-x}$ at the point $(0, 1)$

- $\frac{d}{dx}10^{-x} = -\ln(10)10^{-x}$ (using the rule for finding the gradient of $a^x$)
- $\frac{d}{dx}10^{-x} = -\ln(10)10^0$ (substituting $x=0$ into the expression for the gradient)
- $\frac{d}{dx}10^{-x} = -\ln(10) \cdot 1$ (simplifying)
- Answer: $-\ln(10)$

### Find the gradient of $10^{-x}$ at the point $(1, 0.1)$

- $\frac{d}{dx}10^{-x} = -\ln(10)10^{-x}$ (using the rule for finding the gradient of $a^x$)
- $\frac{d}{dx}10^{-x} = -\ln(10)10^{-1}$ (substituting $x=1$ into the expression for the gradient)
- $\frac{d}{dx}10^{-x} = -\ln(10) \cdot 0.1$ (simplifying)
- Answer: $-0.1\ln(10)$

