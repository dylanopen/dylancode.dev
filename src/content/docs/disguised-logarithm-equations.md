---
title: Disguised logarithm equations
---

A *disguised logarithm equation* is an equation that can be rewritten in the
form of a logarithmic equation, even though it may not look like one at
first.

It may help to remind yourself of [disguised quadratics](/solving-disguised-quadratics),
as the process is very similar to solving those.

## Solving disguised logarithm equations

The key idea is that we:
- Take an exponential equation, in the form:
  - $(2a)^x+a^x = b$
- Rewrite it in the form of a quadratic:
  - $(a^x)^2 + a^x - b = 0$
- Solve the quadratic for $a^x$, usually by [factorising](/solving-quadratics-by-factorising)
  or using the [quadratic formula](/quadratic-formula).
- Take the logarithm of both sides to find $x$.

### Solve for $x$: $9^x + 3^x = 12$

- Rewrite $9^x$ into a quadratic term:
  - $=(3^2)^x$
  - $=3^{2x}$
  - $=(3^x)^2$
- Replace $9^x$ with $(3^x)^2$:
  - $(3^x)^2 + 3^x = 12$
- Rearrange into the form of a quadratic:
  - $(3^x)^2 + 3^x - 12 = 0$
- Factorise:
  - $(3^x + 4)(3^x - 3) = 0$
- Set each factor equal to $0$:
  - $3^x + 4 = 0$ or $3^x - 3 = 0$
- Solve each equation using logarithms:
  - For $3^x + 4 = 0$:
    - $3^x = -4$
    - $\log_3(-4)$ is undefined: no solutions for $3^x=-4$
  - For $3^x - 3 = 0$:
    - $3^x = 3$
    - $x = \log_3(3)$
    - $x = 1$
- Answer: $x = 1$

### Solve for $x$: $4^x + 2^x = 20$

- Rewrite $4^x$ into a quadratic term:
  - $=(2^2)^x$
  - $=2^{2x}$
  - $=(2^x)^2$
- Replace $4^x$ with $(2^x)^2$:
  - $(2^x)^2 + 2^x = 20$
- Rearrange into the form of a quadratic:
  - $(2^x)^2 + 2^x - 20 = 0$
- Factorise:
  - $(2^x + 5)(2^x - 4) = 0$
- Set each factor equal to $0$:
  - $2^x + 5 = 0$ or $2^x - 4 = 0$
- Solve each equation using logarithms:
  - For $2^x + 5 = 0$:
    - $2^x = -5$
    - $\log_2(-5)$ is undefined: no solutions for $2^x=-5$
  - For $2^x - 4 = 0$:
    - $2^x = 4$
    - $x = \log_2(4)$
    - $x = 2$
- Answer: $x = 2$

### Solve for $x$: $16^x + 4^x = 20$

- Rewrite $16^x$ into a quadratic term:
  - $=(4^2)^x$
  - $=4^{2x}$
  - $=(4^x)^2$
- Replace $16^x$ with $(4^x)^2$:
  - $(4^x)^2 + 4^x = 20$
- Rearrange into the form of a quadratic:
  - $(4^x)^2 + 4^x - 20 = 0$
- Factorise:
  - $(4^x + 5)(4^x - 4) = 0$
- Set each factor equal to $0$:
  - $4^x + 5 = 0$ or $4^x - 4 = 0$
- Solve each equation using logarithms:
  - For $4^x + 5 = 0$:
    - $4^x = -5$
    - $\log_4(-5)$ is undefined: no solutions for $4^x=-5$
  - For $4^x - 4 = 0$:
    - $4^x = 4$
    - $x = \log_4(4)$
    - $x = 1$
- Answer: $x = 1$

