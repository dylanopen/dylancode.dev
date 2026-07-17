# Disguised logarithm equations

A *disguised logarithm equation* is an equation that can be rewritten in the
form of a logarithmic equation, even though it may not look like one at
first.

It may help to remind yourself of [[solving disguised quadratics|disguised quadratics]],
as the process is very similar to solving those.

## Solving disguised logarithm equations

The key idea is that we:
- Take an exponential equation, in the form:
  - $(2a)^x+a^x = b$
- Rewrite it in the form of a quadratic:
  - $(a^x)^2 + a^x - b = 0$
- Solve the quadratic for $a^x$, usually by [[solving quadratics by factorising|factorising]]
  or using the [[quadratic formula]].
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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a disguised logarithm equation? | An equation that can be rewritten in the form of a logarithmic equation, even though it may not look like one at first. |
| What is the first step in solving a disguised logarithm equation like $(2a)^x + a^x = b$? | Rewrite it in the form of a quadratic: $(a^x)^2 + a^x - b = 0$. |
| After solving the quadratic for $a^x$, how do you find $x$? | Take the logarithm of both sides to find $x$. |
| How do you rewrite $9^x$ into a quadratic term? | $9^x = (3^2)^x = 3^{2x} = (3^x)^2$. |
| Solve for $x$: $9^x + 3^x = 12$. | $x = 1$.<br/>Steps: $(3^x)^2 + 3^x - 12 = 0$, factorise to $(3^x + 4)(3^x - 4) = 0$, $3^x = -4$ has no solution, $3^x = 3$ gives $x = \log_3(3) = 1$. |
| Why does $3^x = -4$ have no solution in $9^x + 3^x = 12$? | $\log_3(-4)$ is undefined, so there are no solutions for $3^x = -4$. |
| How do you rewrite $4^x$ into a quadratic term? | $4^x = (2^2)^x = 2^{2x} = (2^x)^2$. |
| Solve for $x$: $4^x + 2^x = 20$. | $x = 2$.<br/>Steps: $(2^x)^2 + 2^x - 20 = 0$, factorise to $(2^x + 5)(2^x - 4) = 0$, $2^x = -5$ has no solution, $2^x = 4$ gives $x = \log_2(4) = 2$. |
| Solve for $x$: $16^x + 4^x = 20$. | $x = 1$.<br/>Steps: $(4^x)^2 + 4^x - 20 = 0$, factorise to $(4^x + 5)(4^x - 4) = 0$, $4^x = -5$ has no solution, $4^x = 4$ gives $x = \log_4(4) = 1$. |
| When solving $16^x + 4^x = 20$, why is $4^x = -5$ invalid? | $\log_4(-5)$ is undefined, so there are no solutions for $4^x = -5$. |
| What is the common pattern for rewriting $a^{2x}$ in disguised logarithm equations? | $a^{2x} = (a^x)^2$. |

