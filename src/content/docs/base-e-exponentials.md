---
title: Base e exponentials
---

There's a special case of exponential functions, where we use a base of $e$.

You can find more about $e$ in the [euler's number](/euler-number) topic. It's
a number with some special properties, and it's about $2.71828$.

## Reciprocal exponentials

If, instead of $y=e^x$, we have $y=e^{-x}$, we can rewrite it as
$y=\frac{1}{e^x}$.

That's a *decay* graph, as the base is less than $1$ (because
$\frac{1}{e}$ is less than $1$).

## Gradient of $e^x$

The gradient of $e^x$ is *exactly the same* as the $y$ value at that point.

> $\frac{d}{dx}e^x = e^x$

For example, at the point $(0, 1)$, the gradient is $1$ (because $e^0=1$). At
the point

## Gradient of $e^{kx}$

$e^{kx}$ doesn't exactly [differentiate](/definition-of-differentiation) to 
$e^{kx}$, but it does differentiate to a constant multiple of $e^{kx}$: 
$ke^{kx}$.

> $\frac{d}{dx}e^{kx} = ke^{kx}$

## Gradient of $e^{-x}$

The gradient of $e^{-x}$ is $-e^{-x}$ - it's the same as the rule for $e^{kx}$,
but with a negative constant instead of a positive one.

> $\frac{d}{dx}e^{-x} = -e^{-x}$

## Gradient of $e^{-kx}$

This is basically just saying that $k$ is a negative constant, so the gradient
of $e^{-kx}$ is $-ke^{-kx}$ - it follows the same rule as $e^{kx}$, but with a
negative constant instead of a positive one.

> $\frac{d}{dx}e^{-kx} = -ke^{-kx}$

## Gradient of $e^{f(x)}$

The gradient of $e^{f(x)}$ is $f'(x)e^{f(x)}$ - it's the same as the rule for
$e^{kx}$, but instead of $k$ being a constant, it's $f'(x)$, which is the
derivative of $f(x)$.

> $\frac{d}{dx}e^{f(x)} = f'(x)e^{f(x)}$

