# Small contingency table values

Let's say we have this [[contingency-table]] of [expected values](expected-contingency-frequency)

|                  | Likes dogs | Likes cats | Likes hamsters |
| ---------------- | ---------- | ---------- | -------------- |
| Primary school   | 16.2       | 19.6       | 19.2           |
| Secondary school | 14.1       | 12.6       | 15.3           |
| University       | 7.5        | 4.3        | 2.2            |

It looks like a perfectly valid contingency table on the surface, but actually, we *can't* calculate the [[chi-squared-value]] from this data. That's because some of the cells in the table are below 5.

In order to calculate the chi-squared value, we need to make sure that all of the expected values in the contingency table are above 5. If any of the expected values are below 5, then we can't use the chi-squared test to analyse the data.

## How to fix this problem

We can combine some of the categories together to create a larger contingency table with expected values above 5! 

In this example, we can combine the "secondary school" and "university" categories together to create a new category called "secondary school or university". That would give us this contingency table:

|                                | Likes dogs | Likes cats | Likes hamsters |
| ------------------------------ | ---------- | ---------- | -------------- |
| Primary school                 | 16.2       | 19.6       | 19.2           |
| Secondary school or university | 21.6       | 16.9       | 17.5           |

Now all of the expected values are above 5, so we can calculate the [[chi-squared value]] from this new contingency table!