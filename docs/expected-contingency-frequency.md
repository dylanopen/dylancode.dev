# Expected contingency frequency

If we have a contingency table, we can use it to find the expected frequency of each cell in the table, which gives what we would expect if the two variables were independent of each other.

## Calculating the expected frequency

Knowing the row total, column total, and *grand* total (the total of all the frequencies in the table), we can calculate the expected frequency for each cell using this formula:

> $$
> \text{Expected frequency} = \frac{\text{Row total} \times \text{Column total}}{\text{Grand total}}
> $$

Sometimes, we refer to the expected frequency as $E_i$

## Example

Suppose we have the following contingency table showing the number of people who like different types of music, split by their age group:

| Age Group    | Pop | Instrumental |
| ------------ | --- | ------------ |
| Under 18 | 30  | 10           |
| 18-35    | 50  | 20           |
| 35+      | 20  | 30           |

Let's first add the row and column totals:

| Age Group | Pop | Instrumental | Total |
| ------------- | ------- | ---------------- | --------- |
| Under 18  | 30      | 10               | 40        |
| 18-35     | 50      | 20               | 70        |
| 35+       | 20      | 30               | 50        |
| Total     | 100     | 60               | 160       |

Now, let's calculate the expected frequency for the cell corresponding to "Under 18" and "Pop":
- Row total for under 18: $40$
- Column total for pop: $100$
- Grand total: $160$
- Expected frequency: $\frac{40 \times 100}{160} = 25$

We can do that for the entire table, to get:

| Age Group | Pop   | Instrumental | Total |
| --------- | ----- | ------------ | ----- |
| Under 18  | 25    | 15           | 40    |
| 18-35     | 43.75 | 26.25        | 70    |
| 35+       | 31.25 | 18.75        | 50    |
| Total     | 100   | 60           | 160   |
