# Exponential function

Exponential functions are in the form of $f(x)=a^x$, where $a$ is a positive
constant and $a \neq 1$ (because if $a=1$ then the function would be a
constant).

## Asymptotes

*An asymptote is a line that a graph approaches but never touches.*

- They have a horizontal asymptote at $y=0$ (the x-axis) because the result
  of $a^x$ will never be $0$ or negative.

> Asymptote at $y=0$

## Growth

As you increase the value of $x$ of an exponential graph, the $y$ value
increases *very* quickly. That's because an increase of just $1$ in $x$
means that the $y$ value is *multiplied* by $a$.

For example, if $a=2$ and $x$ increases from $3$ to $4$, the $y$ value
increases from $2^3=8$ to $2^4=16$ - it multiplies by $2$.

## Domain

The domain of an exponential graph is $(-\infty, \infty)$ (anything) because
you can go as far left or right as you want on the x-axis (all values of $x$
will give a valid output to the function).

> Domain: $(-\infty, \infty)$

## Range

The [[range]] is $(0, \infty)$ (positive numbers) because the output of $a^x$
will always be positive.

> [[range]]: $(0, \infty)$

## Solving where $y=0$

At *no point* on the graph is $y=0$ because the output of $a^x$ is always
positive (never 0).

That means there are no solutions to the equation $a^x=0$.

There *can* be solutions to the equation $a^x+c=0$ (where $c$ is a
negative constant) because the graph of $a^x+c$ is just the graph of $a^x$
shifted down by $c$ units, so it can cross the x-axis.

But the normal graph of $a^x$ has no solutions to $a^x=0$.

## Solving for a given $y$ value

- We have our equation:
  - $y=a^x$
- If we want to find the value of $x$ for a given $y$ value, we can
  rearrange the equation into a logarithm:
  - $a^x=y$
  - $x=\log_a(y)$

> the solution to $y=a^x$ is $x=\log_a(y)$.

## Intercept

The $y$ intercept is the $y$ value when $x=0$.

$f(0) = a^0 = 1$ (because any number to the [[power]] of $0$ is $1$)

So the $y$ intercept is at $(0, 1)$.

## Growth or decay?

- The value of $y$ will *increase* with the value of $x$ if $a>1$ (in the 
  function $f(x)=a^x$). That's called **growth**.
- The value of $y$ will *decrease* with the value of $x$ if $0<a<1$ (in the
  function $f(x)=a^x$). That's called **decay**.

> $a>1$: growth  
> $0<a<1$: decay

## Proportionality of exponential graphs

- For $y=a^x$, the gradient $\frac{dy}{dx}$ of the graph at any point is
  [[direct proportion|directly proportional]] to the value of $y$ at that point.

## Graph of $y=e^x$

- The graph of $y=e^x$ passes through the point $(0,1)$.
- The graph of $y=e^x$ increases faster than any other [[exponential graph]]
  $y=a^x$ where $a>1$.
- The graph of $y=e^x$ decreases slower than any other [[exponential graph]]
  $y=a^x$ where $0<a<1$.
- The derivative of $y=e^x$ is equal to $e^x$ itself:
  - $\frac{dy}{dx} e^x = e^x$

Any exponential function can be expressed in terms of $e$:
- $a^x = e^{(\ln a)x}$

## Approaching infinity

- For $y=a^x$:
  - As $x \to +\infty$, $y \to +\infty$.
  - As $x \to -\infty$, $y \to 0$.
- The rate of increase of $y$ becomes faster as $x$ increases.
- The rate of decrease of $y$ becomes slower as $x$ decreases.
- The function never actually reaches $y=0$; it only approaches it as an
  asymptote.

## Graph of an inverse function

- The inverse of a graph is the reflection of the graph in the line $y=x$.

