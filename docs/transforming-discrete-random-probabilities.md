# Transforming discrete random probabilities

Let's say we have a discrete random variable, called $X$, and we know that
there is another DRV which we can write as $Y=aX+b$ - where $a$ and $b$ are
constants.

If we know the expected value for $X$, as well as its variance, then we can
also find the expected value and variance of $Y$!

## Finding $E(X)$ 

> - $E(Y)=aE(X)+b$

## FInding $Var(X)$

> - $Var(Y)=a^2Var(X)$

## Why square $a$ when finding the variance?

If we didn't square $a$, we'd be finding the [standard deviation](
/standard-deviation). If we want to find the variance from the standard
deviation, then we'll need to **square the result**.
