# Discrete random expectation transformation

For a [[discrete random variable]], called $X$, if we know that there is another DRV which we can write as $Y=aX+b$ - where $a$ and $b$ are
constants:

> $E(Y)=a\,E(X)+b$

## Explanation

- If we add $b$ to the result of any outcome of the DRV, we would expect to get, on average, a value $b$ more than before (because we've shifted our entire distribution by $b$).
- When multiplying by $a$, we multiply the [[random variable]] $X$ by $a$, so the average we can expect to get from $X$ (so $E(X)$) is $a$ times what it was.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| E($Y$) = $a$E($X$) + $b$ when $Y = aX + b$ | For a discrete random variable $X$, if $Y = aX + b$ with constants $a$ and $b$, then the expected value of $Y$ is $a$ times the expected value of $X$ plus $b$. |
| Why does adding $b$ increase the expectation by $b$? | Adding $b$ to every outcome shifts the entire distribution upward by $b$, so the average (expected value) also increases by $b$. |
| Why does multiplying by $a$ multiply the expectation by $a$? | Multiplying the random variable $X$ by $a$ scales all outcomes by $a$, so the average (expected value) becomes $a$ times the original average E($X$). |

