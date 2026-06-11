# Transforming discrete random probabilities

Let's say we have a [[discrete random variable]], called $X$, and we know that
there is another DRV which we can write as $Y=aX+b$ - where $a$ and $b$ are
constants.

If we know the expected value for $X$, as well as its [[variance]], then we can
also find the expected value and [[variance]] of $Y$!

## Finding $E(X)$ 

> $E(Y)=aE(X)+b$

See [[discrete random expectation transformation]] for an explanation.

## Finding $Var(X)$

> $Var(Y)=a^2Var(X)$

See [[discrete random variance transformation]] for an explanation.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the relationship between the expected values of $Y$ and $X$ when $Y = aX + b$? | $E(Y) = aE(X) + b$ |
| What is the relationship between the variance of $Y$ and the variance of $X$ when $Y = aX + b$? | $Var(Y) = a^2 Var(X)$ |
| Given a discrete random variable $Y = aX + b$, what is the formula to find $E(Y)$ if $E(X)$ is known? | $E(Y) = aE(X) + b$ |
| Given a discrete random variable $Y = aX + b$, what is the formula to find $Var(Y)$ if $Var(X)$ is known? | $Var(Y) = a^2 Var(X)$ |

