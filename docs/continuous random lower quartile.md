# Continuous random lower quartile 

Remember that the [[lower quartile]] of any [[distribution]] is the value where 25% of the data is below it and 75% of the data is above it.

When talking about [[probability]] and distributions, the lower quartile is where the cumulative probability is $0.25$.

## Finding a formula

Knowing our formula for [[continuous random probability|finding the probability of a continuous random variable]], $P(a \leq X \leq b) = \int_a^b f(x)\,dx$, as well as that the lower quartile is where the probability is 0.25, we can find that:

> $$
> \int_0^af(x)dx=0.25
> $$

We can use [[definite integration]] and find the value of $a$ - that's the lower quartile!


## [[flashcards]]

| Question | Answer |
| --- | --- |
| lower quartile | The value where 25% of data is below it and 75% is above it; for a probability distribution, the cumulative probability is $0.25$. |
| How do you find the lower quartile of a continuous random variable? | Solve $\int_0^a f(x)\,dx = 0.25$ for $a$, using definite integration. |
| What equation defines the lower quartile $a$ for a continuous random variable with PDF $f(x)$? | $\int_0^a f(x)\,dx = 0.25$ |

