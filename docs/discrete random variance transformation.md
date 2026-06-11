# Discrete random variance transformation

For a [[discrete random variable]], called $X$, if we know that there is another DRV which we can write as $Y=aX+b$ - where $a$ and $b$ are
constants:

> $Var(Y)=a^2\,Var(X)$

We ignore the added constant and multiply the old [[variance]] by the **square** of $a$.

## Why square $a$ when finding the variance?

If we didn't square $a$, we'd be finding the [[standard deviation]] (if multiplying $a\times\sigma$). If we want to find the [[variance]] from the [[standard deviation]], then we'll need to **square the result**, so $(a\sigma)^2=a^2\,Var(X)$

## Why do we ignore the constant?

If we add a constant ($b$) to a discrete [[random variable]], it shifts the distribution one way, but doesn't actually change how far apart the values are. That means the [[variance]] 

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the formula for variance of a transformed discrete random variable $Y=aX+b$? | $Var(Y)=a^{2}\,Var(X)$ |
| What happens to variance when a constant $b$ is added to a discrete random variable? | The variance is unchanged because the constant shifts the distribution but does not change the spread of values. |
| Why is the constant $b$ ignored in $Var(aX+b)=a^{2}Var(X)$? | Adding a constant shifts the distribution but does not affect how far apart the values are, so the variance remains the same. |
| Why is $a$ squared in $Var(aX+b)=a^{2}Var(X)$? | If $a$ were not squared, the calculation would find the standard deviation ($a\sigma$). To find variance from standard deviation, the result must be squared, giving $(a\sigma)^{2}=a^{2}Var(X)$. |

