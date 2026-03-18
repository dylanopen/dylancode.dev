# Continuous random median

Remember that the [[median]] of any [[distribution]] is the value in the middle: 50% of the data is below it and 50% of the data is above it.

When talking about [[probability]] and distributions, the median is where the probability is $0.5$.

## Finding a formula

Knowing our formula for [finding the probability of a continuous random variable](continuous-random-probability), $P(a \leq X \leq b) = \int_a^b f(x)\,dx$, as well as that the median is where the probability is 0.5, we can find that:

> $$
> \int_0^mf(x)dx=0.5
> $$

We can use [[definite-integration]] and find the value of $m$ - that's the median.
