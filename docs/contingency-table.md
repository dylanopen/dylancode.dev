# Contingency table

A contingency table is a table/matrix which shows the frequency of different combinations of two categorical variables.

They show the **frequency** of each combination - the number of times each combination occurs in the data. They don't show the proportion or frequency.

## Total rows/columns

We can add a row and column to show the total of the rows and columns in the table. That's useful if we want to find a [[conditional-probability]] from it, or to calculate the [[chi-squared-value]].

The total rows and columns just show the total frequency of each category of the variables - the values in the rows and columns, all added up.

## Example

|           | Likes pelicans | Likes axolotls | Likes parrots |
| --------- | -------------- | -------------- | ------------- |
| Age < 18  | 10             | 5              | 15            |
| Age 18-65 | 20             | 10             | 25            |
| Age > 65+ | 5              | 15             | 10            |

The two categorical variables in this example are:
- Age group, categories are:
    - Age < 18
    - Age 18-65
    - Age > 65
- Animal preference, categories are:
    - Likes pelicans
    - Likes axolotls
    - Likes parrots

We can add up each row and column to find the row and column totals:

|           | Likes pelicans | Likes axolotls | Likes parrots | Total |
| --------- | -------------- | -------------- | ------------- | ----- |
| Age < 18  | 10             | 5              | 15            | 30    |
| Age 18-65 | 20             | 10             | 25            | 55    |
| Age > 65+ | 5              | 15             | 10            | 30    |
| Total     | 35             | 30             | 50            | 115   |
