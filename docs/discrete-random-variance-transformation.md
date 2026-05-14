# Discrete random variance transformation

For a [[discrete-random-variable]], called $X$, if we know that there is another DRV which we can write as $Y=aX+b$ - where $a$ and $b$ are
constants:

> $Var(Y)=a^2\,Var(X)$

We ignore the added constant and multiply the old variance by the **square** of $a$.

## Why square $a$ when finding the variance?

If we didn't square $a$, we'd be finding the [[standard-deviation]] (if multiplying $a\times\sigma$). If we want to find the variance from the standard deviation, then we'll need to **square the result**, so $(a\sigma)^2=a^2\,Var(X)$

## Why do we ignore the constant?

If we add a constant ($b$) to a discrete random variable, it shifts the distribution one way, but doesn't actually change how far apart the values are. That means the variance 
