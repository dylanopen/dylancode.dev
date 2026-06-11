# Expected contingency frequency

If we have a [[contingency table]], we can use it to find the expected frequency of each cell in the table, which gives what we would expect if the two [[cs/variables|variables]] were independent of each other.

## Calculating the expected frequency

Knowing the row total, column total, and *grand* total (the total of all the frequencies in the table), we can calculate the expected frequency for each cell using this formula:

> $$
> \text{Expected frequency} = \frac{\text{Row total} \times \text{Column total}}{\text{Grand total}}
> $$

Sometimes, we refer to the expected frequency as $E_i$

## Example

Suppose we have the following [[contingency table]] showing the number of people who like different types of music, split by their age group:

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the formula for calculating the expected frequency of a cell in a contingency table? | $\text{Expected frequency} = \frac{\text{Row total} \times \text{Column total}}{\text{Grand total}}$ |
| What is the symbol sometimes used to refer to the expected frequency? | $E_i$ |
| In a contingency table, what would the expected frequency represent if the two variables were independent? | The value we would expect in each cell if the variables were independent of each other. |
| In the example table, what is the expected frequency for "Under 18" and "Pop"? | $\frac{40 \times 100}{160} = 25$ |
| In the example, what is the grand total for the contingency table? | 160 |
| What is the row total for the "18-35" age group in the example? | 70 |
| What is the column total for "Instrumental" in the example table? | 60 |
| What is the expected frequency for the "35+" and "Instrumental" cell in the example? | $\frac{50 \times 60}{160} = 18.75$ |
| In the example table, what is the total for the "Pop" column? | 100 |
| What is the expected frequency for the "Under 18" and "Instrumental" cell? | $\frac{40 \times 60}{160} = 15$ |

