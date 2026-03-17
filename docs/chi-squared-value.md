# Chi-squared value

> The chi-squared value tells us how different the data we observed is from what we would expect given the column totals and row totals.

A high chi-squared value means that the observed data is very different from what we would expect. Though we do need to consider the [[degrees-of-freedom]] - a high chi-squared value might not necessarily be significant if the degrees of freedom are also high.

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

Let's take our table from the [[expected-contingency-frequency]] note.

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

We can then compare this to a [[significance-level]], considering the [[degrees-of-freedom]] and the [[chi-squared-distribution]], to determine whether this chi-squared value is significant or not.
