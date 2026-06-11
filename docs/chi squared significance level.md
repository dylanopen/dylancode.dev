# Chi-squared significance level

Like any statistical test we do, we need to be able to figure out whether our collected data varies enough from the expected values to be considered significant(ly different).

If they are significantly different to the [[critical chi squared value]], then we can say "there is significant evidence to **suggest** that the two [[cs/variables|variables]] are not independent".

To tell whether the data is significantly different from the expected values, we need to calculate the [[chi squared value]] and then compare it to a [[critical chi squared value]] from the chi-squared distribution.

The critical value is determined by two things:
- The [[degrees of freedom]] of the [[contingency table]]
- The [[significance level]] we choose (usually 0.01, 0.05 or 0.10).

The significance level is actually the probability of rejecting the [[null hypothesis]] when it is actually true. It's basically "how likely are we to be wrong, suggesting that the [[cs/variables|variables]] are not independent?".

When we decide on our significance level, we can compare our calculated chi-squared value to the [[critical chi squared value]]

## [[flashcards]]

| Question | Answer |
| --- | --- |
| chi-squared significance level | The threshold used to determine if observed data differs enough from expected values to be considered statistically significant. |
| significance level probability | The probability of rejecting the null hypothesis when it is actually true. |
| How does significance level relate to the null hypothesis? | It is the probability of rejecting the null hypothesis when it is actually true. |
| What factors determine the critical chi-squared value? | The degrees of freedom of the contingency table and the chosen significance level. |
| Common significance levels | Usually 0.01, 0.05, or 0.10. |
| What does it mean if chi-squared value exceeds critical value? | There is significant evidence to suggest that the variables are not independent. |
| Null hypothesis in chi-squared test | The variables are independent. |
| What is a typical significance level meaning? | "How likely are we to be wrong, suggesting that the variables are not independent?" |
| How is significance level used in chi-squared testing? | It is used to determine the critical chi-squared value for comparison with the calculated chi-squared value. |

