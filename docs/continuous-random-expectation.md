# Continuous random expectation

If we have a [[continuous-random-variable]], we can calculate its [[expectation]] (essentially, [[mean]]) using this formula:

> $$
> E(X)=\int_a^b x\times f(x)\,\,dx
> $$

$a$ and $b$ represent the *range* of the [[continuous-random-variable]].

## Deriving the formula

If you imagine the distribution graph for a continuous random variable, the *area under the graph* between a range (say, $a<x<b$) represents the probability of selecting a value in that range.

To find the *expected* value then, we can just integrate *x multiplied by* $f(x)$, the [[probability-density-function]] - because $x$ represents the *value* and we're finding the mean.
