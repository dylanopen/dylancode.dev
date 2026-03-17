# Sum of poisson distributions

> If $X\sim Po(\lambda_X)$ and $Y\sim Po(\lambda_Y)$, then $X+Y\sim Po(\lambda_X + \lambda_Y)$.

What that means is that, if we have two independent [[discrete-random-variable]]s following a [[poisson-distribution]], then their **sum** also follows a [[poisson-distribution]], with the *mean* being the sum of the means of the two original distributions.

## Examples

- If $X\sim Po(3)$ and $Y\sim Po(5)$, then $X+Y\sim Po(3 + 5) = Po(8)$.
- If $X\sim Po(2)$ and $Y\sim Po(4)$, then $X+Y\sim Po(2 + 4) = Po(6)$.
- If $X\sim Po(1)$ and $X+Y\sim Po(2)$, then $Y\sim Po(2 - 1) = Po(1)$. 
- If $Y\sim Po(6)$ and $X+Y\sim Po(10)$, then $X\sim Po(10 - 6) = Po(4)$.
