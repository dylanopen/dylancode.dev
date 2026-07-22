---
title: Rounding to decimal places
---

We can round numbers to the nearest $n$ decimal places using these steps:
1. Find the digit at the $n$th decimal place.
2. Check if the number *after* that is less than 5:
   - If less than 5, you are rounding down, so keep the $n$th decimal place the
     same.
   - If more than or equal to 5, you are rounding up, so increase the $n$th
     decimal place by one (if it is 9, it becomes 0 and you carry 1 to the left,
     where you do the same).
3. Remove all digits after the $n$th decimal place.

## Examples

### Round $3.14159$ to 2 decimal places

- 2nd decimal place is $4$.
- The number after that is $1$.
- $1$ is less than $5$, so we round down and keep the $4$ the same.
- Remove all digits after the 2nd decimal place, giving $3.14$.
- **Answer**: $3.14$.

### Round $2.71828$ to 3 decimal places

- 3rd decimal place is $8$.
- The number after that is $2$.
- $2$ is less than $5$, so we round down and keep the $8$ the same.
- Remove all digits after the 3rd decimal place, giving $2.718$.
- **Answer**: $2.718$.

### Round $1.98765$ to 4 decimal places

- 4th decimal place is $6$.
- The number after that is $5$.
- $5$ is equal to $5$, so we round up and increase the $6$ by $1$ to get $7$.
- Remove all digits after the 4th decimal place, giving $1.9877$.
- **Answer**: $1.9877$.

### Round $0.798$ to 2 decimal places

- 2nd decimal place is $9$.
- The number after that is $8$.
- $8$ is more than $5$, so we round up and increase the $9$ by $1$ to get $10$.
- Since $9$ becomes $10$, we set the 2nd decimal place to $0$ and increase the
  1st decimal place by $1$ (which is $7$) to get $8$ (so now we have $0.80...$).
- Remove all digits after the 2nd decimal place, giving $0.80$.
- **Answer**: $0.80$.

