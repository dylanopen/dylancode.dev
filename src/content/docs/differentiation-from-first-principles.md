---
title: Differentiation from first principles
---

Differentiation from first principles essentially involves finding the
derivative 'manually', without using the power rule.

Normally, we could differentiate a function like $f(x)=x^2$ by using the power
rule:
- $f'(x)=2x^{2-1}$
- $=2x$

But from first principles, we would do it like this:

- $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$
- $=\lim_{h\to0}\frac{(x+h)^2 - x^2}h$
- $=\lim_{h\to0}\frac{x^2 + 2xh + h^2 - x^2}h$
- $=\lim_{h\to0}\frac{2xh + h^2}h$
- $=\lim_{h\to0}(2x + h)$
- $=2x + 0$
- $=2x$

So we get the same answer of $2x$, but we had to do a lot more work to get
there! Unfortunately, in an exam, they might ask you to do it this way, so it's
worth learning :(

## The meaning of $\lim_{h\to0}$

The notation $\lim_{h\to0}$ means 'the limit as $h$ approaches $0$'. In this
context, it essentially means that we are considering values of $h$ that are
incredibly close to $0$, but not actually equal to $0$. This is important
because if we were to substitute $h=0$ directly into the expression
$\frac{f(x+h)-f(x)}h$, we would end up with a division by zero, which you may
know that you can't exactly do :)

## Some examples of differentiation from first principles

### Differentiate $f(x)=3x^2+2$ from first principles

- $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$
- $=\lim_{h\to0}\frac{3(x+h)^2 + 2 - (3x^2 + 2)}h$
- $=\lim_{h\to0}\frac{3(x^2 + 2xh + h^2) + 2 - 3x^2 - 2}h$
- $=\lim_{h\to0}\frac{3x^2 + 6xh + 3h^2 + 2 - 3x^2 - 2}h$
- $=\lim_{h\to0}\frac{6xh + 3h^2}h$
- $=\lim_{h\to0}(6x + 3h)$
- $=6x + 0$
- $=6x$
- **Answer**: $f'(x)=6x$

### Differentiate $f(x)=x^3 - x$ from first principles

- $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$
- $=\lim_{h\to0}\frac{(x+h)^3 - (x+h) - (x^3 - x)}h$
- $=\lim_{h\to0}\frac{(x^3 + 3x^2h + 3xh^2 + h^3) - x - h - x^3 + x}h$
- $=\lim_{h\to0}\frac{3x^2h + 3xh^2 + h^3 - h}h$
- $=\lim_{h\to0}(3x^2 + 3xh + h^2 - 1)$
- $=3x^2 + 0 + 0 - 1$
- $=3x^2 - 1$
- **Answer**: $f'(x)=3x^2 - 1$

## Proof that the derivative of a constant is zero

One nice thing about differentiation from first principles is that it allows us
to prove some stuff that otherwise we just have to accept as true! For example,
you may have realised that the derivative of a constant function is always zero.
But why is that true?

### The power rule answer

One answer is that, with the power rule, we multiply the coefficient of $x$ by
the power of $x$, and then reduce the power by $1$. For a constant function,
it's the same thing as having a coefficient of $x^0$!

So when we differentiate it, we take the power of $x$ (0) to the front, and so
multiply the coefficient by $0$, which gives us $0$ (nothing).

That's one explanation as to why the derivative of a constant is zero.

### The first principles answer

Let's try our first principles method on a constant function, say $f(x)=5$:

- $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$
- $=\lim_{h\to0}\frac{5 - 5}h$
- $=\lim_{h\to0}\frac{0}h$
- $=\lim_{h\to0}0$
- $=0$

So we see that the derivative of a constant function is indeed zero, as we
expected!

In fact, we don't even need the condition that $\lim_{h\to0}$ here, because the
expression is always zero, no matter what $h$ is (as long as it's not zero,
because we can't divide by zero!).

This is important, because it shows us that the gradient of a constant function
is always zero, even if we consider values of $h$ that are not close to zero 
(measuring the gradient of a 'larger triangle' of the graph). That's because
a constant function is just a flat horizontal line, so the gradient is always
zero!

