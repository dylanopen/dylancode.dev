# Normal distribution addition

If we add together two [[normal distribution]]s (they can be multiples) and an optional constant, the result will also follow a [[normal distribution]]. That's because the [[normal distribution]] is a [[scalable distribution]].

> $Z=aX+bY+c$
> - $X$, $Y$ and $Z$ are [[independent events|independent]] and [[random variable]]s following a [[normal distribution]]
> - $a$, $b$ and $c$ are constants.

See [[continuous random expectation transformation]] and [[continuous random variance transformation]] for how to find $aX$ and $bY$.

## Subtraction

We can't easily *subtract* two [[normal distribution]]s, but we can add them if one of them is negative.

If $Z=aX-bY$:
- $E(Z)=E(aX)+E(-bY)=aE(X)-bE(Y)$
- $Var(Z)=Var(aX)+Var(-bY)=a^2Var(X)+b^2Var(Y)$
    - the negatives disappear because we are squaring the $-b$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the result when adding two normal distributions (with optional constant)? | The result also follows a normal distribution because the normal distribution is scalable. |
| Given $Z = aX + bY + c$, what conditions apply to X, Y, and Z? | X, Y, and Z are independent random variables following a normal distribution; a, b, and c are constants. |
| How can we handle subtraction of two normal distributions like $Z = aX - bY$? | We treat it as addition with a negative coefficient, using $E(Z)=aE(X)-bE(Y)$ and $Var(Z)=a^2Var(X)+b^2Var(Y)$. |
| Why does the negative sign disappear in the variance formula for $Z = aX - bY$? | Because variance calculation squares the coefficient: $Var(-bY) = (-b)^2 Var(Y) = b^2 Var(Y)$. |

