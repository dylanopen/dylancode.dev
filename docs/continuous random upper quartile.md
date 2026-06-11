# Continuous random upper quartile 

Remember that the [[lower quartile]] of any [[distribution]] is the value where 75% of the data is below it and 25% of the data is above it.

When talking about [[probability]] and distributions, the upper quartile is where the cumulative probability is $0.75$.

## Finding a formula

Knowing our formula for [[continuous random probability|finding the probability of a continuous random variable]], $P(a \leq X \leq b) = \int_a^b f(x)\,dx$, as well as that the upper quartile is where the probability is 0.75, we can find that:

> $$
> \int_0^af(x)dx=0.75
> $$

We can use [[definite integration]] and find the value of $a$ - that's the upper quartile!

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Remember that the lower quartile of any distribution is the value where 75% of the data is below it and 25% of the data is above it. | True |
| When talking about probability and distributions, what is the upper quartile? | The value where the cumulative probability is $0.75$. |
| What formula defines the probability of a continuous random variable between $a$ and $b$? | $P(a \leq X \leq b) = \int_a^b f(x)\,dx$ |
| How do you find the upper quartile $a$ for a continuous random distribution? | By solving $\int_0^a f(x)\,dx = 0.75$ using definite integration. |

