# Chi-squared significance level

Like any statistical test we do, we need to be able to figure out whether our collected data varies enough from the expected values to be considered significant(ly different).

If they are significantly different to the [[critical-chi-squared-value]], then we can say "there is significant evidence to **suggest** that the two variables are not independent".

To tell whether the data is significantly different from the expected values, we need to calculate the [[chi-squared-value]] and then compare it to a [[critical-chi-squared-value]] from the chi-squared distribution.

The critical value is determined by two things:
- The [[degrees-of-freedom]] of the [[contingency-table]]
- The [[significance-level]] we choose (usually 0.01, 0.05 or 0.10).

The significance level is actually the probability of rejecting the null hypothesis when it is actually true. It's basically "how likely are we to be wrong, suggesting that the variables are not independent?".

When we decide on our significance level, we can compare our calculated chi-squared value to the [[critical-chi-squared-value]]
