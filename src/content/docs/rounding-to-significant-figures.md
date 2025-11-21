---
title: Rounding to significant figures
---

When we round to $n$ significant figures (where $n$ is an [integer](/integers)),
we follow these steps:
1. Find the position of the $n$th significant figure in the number (see below).
2. Check the digit *after* that:
   - If less than $5$, you are rounding down, so keep the $n$th significant
     figure the same.
   - If more than or equal to $5$, you are rounding up, so increase the $n$th
     significant figure by one (if it is $9$, it becomes $0$ and you carry $1$
     to the left, where you do the same).
3. Remove all digits after the $n$th significant figure. For any digits you
   remove, if they're *before* the decimal point, replace them with zeroes to
   keep the place value the same.

## Finding the nth significant figure

To find the $n$th significant figure in a number:
- Start counting from the first non-zero digit (this is the 1st significant
  figure).
- Continue counting each digit (including zeroes) until you reach the $n$th
  significant figure.

## Examples

### Round $0.0045678$ to 3 significant figures

- The 3rd significant figure is $6$ (the first significant figure is $4$, the
  second is $5$, and the third is $6$).
- The number after that is $7$.
- $7$ is more than $5$, so we round up and increase the $6$ to $7$.
- Remove all digits after the 3rd significant figure, giving $0.00457$.
- **Answer**: $0.00457$.

### Round $12345$ to 2 significant figures

- The 2nd significant figure is $2$ (the first significant figure is $1$, and
  the second is $2$).
- The number after that is $3$.
- $3$ is less than $5$, so we round down and keep the $2$ the same.
- Remove all digits after the 2nd significant figure, replacing them with zeroes
  to keep the place value the same, giving $12000$.
- **Answer**: $12000$.

### Round $0.09986$ to 2 significant figures

- The 2nd significant figure is $9$ (the first significant figure is $9$, and
  the second is $9$).
- The number after that is $8$.
- $8$ is more than $5$, so we round up and increase the $9$ to $10$.
- Since $9$ becomes $10$, we set the 2nd significant figure to $0$ and increase the 1st
  significant figure by $1$ (which is also $9$) to get $10$.
- Now we have $0.100...$.
- Remove all digits after the 2nd significant figure, giving $0.10$.
- **Answer**: $0.10$.

### Round $450600$ to 3 significant figures

- The 3rd significant figure is $0$ (the first significant figure is $4$, the
  second is $5$, and the third is $0$).
- The number after that is $6$.
- $6$ is more than $5$, so we round up and increase the $0$ to $1$.
- Now we have $451000$.
- Remove all digits after the 3rd significant figure, replacing them with zeroes
  to keep the place value the same, giving $451000$.
- **Answer**: $451000$.

### Round $0.09974$ to 2 significant figures

- The 2nd significant figure is $9$ (the first significant figure is $9$, and
  the second is also $9$).
- The number after that is $7$.
- $7$ is more than $5$, so we round up and increase the $9$ to $10$.
- Since $9$ becomes $10$, we set the 2nd significant figure to $0$ and increase the 1st
  significant figure by $1$ (which is also $9$) to get $10$.
- Now we have $0.100...$.
- Remove all digits after the 2nd significant figure, giving $0.10$.
- **Answer**: $0.10$.

> Note: Make sure you include *both* significant figures (including the $0$) in
? your answer. Even though $0.10 = 0.1$, writing $0.10$ shows that you have
? rounded to 2 significant figures instead of just 1.

