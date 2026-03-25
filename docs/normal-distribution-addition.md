# Normal distribution addition

If we add together two [[normal-distribution]]s (they can be multiples) and an optional constant, the result will also follow a normal distribution. That's because the normal distribution is a [[scalable-distribution]].

> $Z=aX+bY+c$
> - $X$, $Y$ and $Z$ are [[independent-events|independent]] and [[random-variable]]s following a normal distribution
> - $a$, $b$ and $c$ are constants.

See [[continuous-random-expectation-transformation]] and [[continuous-random-variance-transformation]] for how to find $aX$ and $bY$.

## Subtraction

We can't easily *subtract* two [[normal-distribution]]s, but we can add them if one of them is negative.

If $Z=aX-bY$:
- $E(Z)=E(aX)+E(-bY)=aE(X)-bE(Y)$
- $Var(Z)=Var(aX)+Var(-bY)=a^2Var(X)+b^2Var(Y)$
    - the negatives disappear because we are squaring the $-b$
