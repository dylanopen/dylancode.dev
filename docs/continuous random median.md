# Continuous random median

Remember that the [[median]] of any [[distribution]] is the value in the middle: 50% of the data is below it and 50% of the data is above it.

When talking about [[probability]] and distributions, the [[median]] is where the probability is $0.5$.

## Finding a formula

Knowing our formula for [[continuous random probability|finding the probability of a continuous random variable]], $P(a \leq X \leq b) = \int_a^b f(x)\,dx$, as well as that the [[median]] is where the probability is 0.5, we can find that:

> $$
> \int_0^mf(x)\,\,dx=0.5
> $$

We can use [[definite integration]] and find the value of $m$ - that's the [[median]].

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the median of any distribution? | The value in the middle: 50% of the data is below it and 50% of the data is above it. |
| Where is the median located in terms of probability for distributions? | The median is where the probability is 0.5. |
| What formula for a continuous random variable gives $P(a \leq X \leq b)$? | $P(a \leq X \leq b) = \int_a^b f(x)\,dx$ |
| What is the defining equation for the median $m$ of a continuous distribution? | $\int_0^m f(x)\,\,dx = 0.5$ |
| How do you find the median $m$ for a continuous random variable? | Use definite integration on $\int_0^m f(x)\,dx = 0.5$ and solve for $m$. |

