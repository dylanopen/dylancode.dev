# Contingency table

A contingency table is a table/matrix which shows the frequency of different combinations of two categorical [[cs/variables|variables]].

They show the **frequency** of each combination - the number of times each combination occurs in the data. They don't show the proportion or frequency.

## Total rows/columns

We can add a row and column to show the total of the rows and columns in the table. That's useful if we want to find a [[conditional probability]] from it, or to calculate the [[chi squared value]].

The total rows and columns just show the total frequency of each category of the [[cs/variables|variables]] - the values in the rows and columns, all added up.

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a contingency table? | A table/matrix which shows the frequency of different combinations of two categorical variables. |
| What do contingency tables show? | The frequency of each combination - the number of times each combination occurs in the data, not the proportion. |
| Why add total rows and columns to a contingency table? | To find a conditional probability or to calculate the chi squared value. |
| How are total rows and columns calculated in a contingency table? | The total shows the sum of frequencies for each category of the variables (values in rows and columns added up). |
| In the example contingency table, what are the two categorical variables? | Age group (Age < 18, Age 18-65, Age > 65) and animal preference (Likes pelicans, Likes axolotls, Likes parrots). |
| What is the total frequency for Age < 18 in the example? | 30 |
| What is the total frequency for "Likes axolotls" in the example? | 30 |
| What is the overall total frequency in the example contingency table? | 115 |

