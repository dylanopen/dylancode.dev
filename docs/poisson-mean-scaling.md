# Poisson mean scaling

When we're trying to solve problems involving the [[poisson-distribution]], we might have a question which involves comparing two things that don't have the mean set to the same scale.

For example, we might know the mean number of cars that pass through a junction in 1 hour, but we want to know the probability that a certain number of cars pass through in 30 minutes.

To solve these problems, we can just **scale the mean** up/down to the new, correct, time period.

For our example, if we know that the mean number of cars that pass through a junction in 1 hour is 10, then the mean number of cars that pass through in 30 minutes is just half of that, so an average of 5 cars per 30 minutes.

We **can't** scale our value of $x$ up/down. So if we wanted to find the probability of $3$ cars passing in 30 minutes, we can't scale $3/30min$ up to $6/1hr$. We need to keep $x$ as $3$ and just scale the mean down to $5$.
