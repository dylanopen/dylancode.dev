# Continuous random linear transformation

If we have a [[continuous-random-variable]], and we *transform* it by a linear function in the form $mx+c$, then we can apply some rules to find the [[continuous-random-expectation]] and [[continuous-random-variance]] of the transformed variable.

## Expectation after transformation

If the [[expectation]] before the transformation was $E(X)$, and we transform by the function $mX+c$, then:

> $$
> E(mX+c)=m\times E(X)+c
> $$

You might be able to see then that, for any **linear** transformation of a [[continuous-random-variable]], we just substitute the value of $E(X)$ into the transformation function to get the expectation after the transformation:  
$t(E(X))$ for a transformation function $t(x)$.

See [[continuous-random-expectation-transformation]]

## Variance after transformation

If the [[variance]] before the transformation was $Var(X)$, then, for a transformation of $mX+c$ or $mX$, the transformed variance is the initial variance times the **square** of $m$.

> $$
> Var(mX+c)=m^2\times Var(X)
> $$

See [[continuous-random-variance-transformation]]
