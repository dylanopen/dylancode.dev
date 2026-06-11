# Chi-squared value

> The chi-squared value tells us how different the data we observed is from what we would expect given the column totals and row totals.

A high chi-squared value means that the observed data is very different from what we would expect. Though we do need to consider the [[degrees of freedom]] - a high chi-squared value might not necessarily be significant if the [[degrees of freedom]] are also high.

## Calculating chi-squared for a single cell

If we want to calculate the chi-squared value for a single cell, and we know that the observed value is $O$ and the expected value is $E$, then we can calculate the chi-squared value for that cell using the formula:

> $$
> \chi^2 = \frac{(O - E)^2}{E}
> $$


## Calculating chi-squared for a whole table

We can just do the same formula above ($\chi^2 = \frac{(O - E)^2}{E}$) for each cell in the table, and then add up all of those values to get the total chi-squared value for the whole table.

If we say that $O_r$ represents the observed value for any cell indexed by $r$ (just a way of saying 'for any cell'), and that $E_r$ represents the expected value for that cell, then we can write the formula for calculating the chi-squared value for the whole table as:

> $$
> \chi^2 = \sum_{r} \frac{(O_r - E_r)^2}{E_r}
> $$

## Example

Let's take our table from the [[expected contingency frequency]] note.

### Observed values

| Age Group | Pop | Instrumental | Total |
| --------- | --- | ------------ | ----- |
| Under 18  | 30  | 10           | 40    |
| 18-35     | 50  | 20           | 70    |
| 35+       | 20  | 30           | 50    |
| Total     | 100 | 60           | 160   |

### Expected values

| Age Group | Pop   | Instrumental | Total |
| --------- | ----- | ------------ | ----- |
| Under 18  | 25    | 15           | 40    |
| 18-35     | 43.75 | 26.25        | 70    |
| 35+       | 31.25 | 18.75        | 50    |
| Total     | 100   | 60           | 160   |

### Calculating the chi-squared value

| Age Group | Pop                            | Instrumental                   |
| --------- | ------------------------------ | ------------------------------ |
| Under 18  | $\frac{(30 - 25)^2}{25}$       | $\frac{(10 - 15)^2}{15}$       |
| 18-35     | $\frac{(50 - 43.75)^2}{43.75}$ | $\frac{(20 - 26.25)^2}{26.25}$ |
| 35+       | $\frac{(20 - 31.25)^2}{31.25}$ | $\frac{(30 - 18.75)^2}{18.75}$ |

Calculating those values gives us:

| Age Group | Pop  | Instrumental |
| --------- | ---- | ------------ |
| Under 18  | 1    | 1.67         |
| 18-35     | 0.89 | 1.51         |
| 35+       | 4.05 | 6.75         |

Adding up all of those values gives us the total chi-squared value for the table:

$$
\chi^2 = 1 + 1.67 + 0.89 + 1.51 + 4.05 + 6.75 = 15.87
$$

We can then compare this to a [[significance level]], considering the [[degrees of freedom]] and the [[chi squared distribution]], to determine whether this chi-squared value is significant or not.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What does the chi-squared value tell us about observed data? | It tells us how different the observed data is from what we would expect given the column totals and row totals. |
| What does a high chi-squared value indicate? | A high chi-squared value means that the observed data is very different from what we would expect. |
| What factor must be considered when interpreting a high chi-squared value? | The degrees of freedom must be considered; a high chi-squared value might not be significant if the degrees of freedom are also high. |
| What is the formula for calculating the chi-squared value for a single cell? | $\chi^2 = \frac{(O - E)^2}{E}$ |
| How do you calculate the chi-squared value for a whole contingency table? | Apply the formula $\chi^2 = \frac{(O - E)^2}{E}$ to each cell and sum all the resulting values. |
| Give the summation notation formula for calculating the chi-squared value for a whole table. | $\chi^2 = \sum_{r} \frac{(O_r - E_r)^2}{E_r}$ |
| In a study of age groups and music preference, 30 people under 18 preferred Pop (observed) versus an expected value of 25. What is the chi-squared contribution for this cell? | $\frac{(30 - 25)^2}{25} = 1$ |
| In a study of age groups and music preference, 10 people under 18 preferred Instrumental (observed) versus an expected value of 15. What is the chi-squared contribution for this cell? | $\frac{(10 - 15)^2}{15} \approx 1.67$ |
| In a study of age groups and music preference, 50 people aged 18-35 preferred Pop (observed) versus an expected value of 43.75. What is the chi-squared contribution for this cell? | $\frac{(50 - 43.75)^2}{43.75} \approx 0.89$ |
| In a study of age groups and music preference, 20 people aged 18-35 preferred Instrumental (observed) versus an expected value of 26.25. What is the chi-squared contribution for this cell? | $\frac{(20 - 26.25)^2}{26.25} \approx 1.51$ |
| In a study of age groups and music preference, 20 people aged 35+ preferred Pop (observed) versus an expected value of 31.25. What is the chi-squared contribution for this cell? | $\frac{(20 - 31.25)^2}{31.25} \approx 4.05$ |
| In a study of age groups and music preference, 30 people aged 35+ preferred Instrumental (observed) versus an expected value of 18.75. What is the chi-squared contribution for this cell? | $\frac{(30 - 18.75)^2}{18.75} \approx 6.75$ |
| What is the total chi-squared value for the example table with observed and expected frequencies? | $\chi^2 = 1 + 1.67 + 0.89 + 1.51 + 4.05 + 6.75 = 15.87$ |
| After calculating a chi-squared value of 15.87, what must be done to determine if it is significant? | Compare it to a significance level, considering the degrees of freedom and the chi-squared distribution. |

