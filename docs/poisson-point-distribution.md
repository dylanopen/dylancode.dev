# Poisson point distribution

Like with the [[binomial-distribution]], the [[poisson-distribution]] has a formula we can use to calculate the [[point-distribution]] - the probability of the outcome exactly equalling a certain value.

The formula is:

> $$
> P(X=x)=\frac{e^{-\lambda}\lambda^x}{x!}
> $$

Where:
- $P(X=x)$ is the probability of the outcome exactly equalling $x$.
- $\lambda$ is the *mean* number of occurrences in the given interval - or the [expectation](poisson-distribution-expectation)
- $x$ is the number of occurrences we want to calculate the probability of (e.g. checking the probability of exactly 7 occurences). **This must be in the same time frame as the $\lambda$ value!**

## What does this calculate?

The probability of getting *exactly* $x$ occurrences in a given interval, given that the average number of occurrences **in that interval** is $\lambda$.
