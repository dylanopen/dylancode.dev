# Rounding to nearest integer

When rounding to the nearest integer, we do exactly the same steps as when
[[rounding to decimal places]], but the $n$th decimal
place is the *units* column (the digit to the left of the decimal point).

Make sure to round up if the next digit is $5$ or more, and then we remove all digits after the decimal point.

## Examples

### Round 4.3 to the nearest integer

- The digit we are rounding to is the $4$.
- The next digit is $3$, which is less than $5$, so we round down and keep the
  $4$ the same.
- **Answer**: $4$.

### Round 5.7 to the nearest integer

- The digit we are rounding to is the $5$.
- The next digit is $7$, which is more than $5$, so we round up and increase the
  $5$ by $1$ to get $6$.
- **Answer**: $6$.

### Round 2.5 to the nearest integer

- The digit we are rounding to is the $2$.
- The next digit is $5$, which is equal to $5$, so we round up and increase the
  $2$ by $1$ to get $3$.
- **Answer**: $3$.

### Round 9.99 to the nearest integer

- The digit we are rounding to is the $9$.
- The next digit is $9$, which is more than $5$, so we round up and increase the
  $9$ by $1$ to get $10$.
- Since $9$ becomes $10$, we set the units place to $0$ and increase the tens
  place by $1$ (which is also $9$) to get $10$ (so now we have $10.0...$).
- **Answer**: $10$.

### Round 0.49 to the nearest integer

- The digit we are rounding to is the $0$.
- The next digit is $4$, which is less than $5$, so we round down and keep the
  $0$ the same.
- **Answer**: $0$.

> Don't be tempted to round $0.49$ to $0.5$, which would then round to $1$.
> Always look directly at the digit after the decimal point - don't try to
> round in stages!

### Round 999.50 to the nearest integer

- The digit we are rounding to is the last $9$ (the units place).
- The next digit is $5$, which is equal to $5$, so we round up and increase the last
  $9$ by $1$ to get $10$.
- Since $9$ becomes $10$, we set the units place to $0$ and increase the tens place by $1$ (which is also $9$) to get $10$.
- We repeat this process for the hundreds place, resulting in $1000.0...$.
- **Answer**: $1000$.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the key difference between rounding to the nearest integer and rounding to decimal places? | When rounding to the nearest integer, the $n$th decimal place is the units column (the digit to the left of the decimal point), rather than a digit to the right. |
| When rounding to the nearest integer, what is the rule for whether you round up or down? | Round up if the next digit (the first decimal digit) is $5$ or more; round down (keep the digit the same) if it is less than $5$. |
| Round $4.3$ to the nearest integer. | The digit we are rounding to is the $4$. The next digit is $3$, which is less than $5$, so we round down and keep the $4$ the same. **Answer**: $4$. |
| Round $5.7$ to the nearest integer. | The digit we are rounding to is the $5$. The next digit is $7$, which is more than $5$, so we round up and increase the $5$ by $1$ to get $6$. **Answer**: $6$. |
| Round $2.5$ to the nearest integer. | The digit we are rounding to is the $2$. The next digit is $5$, which is equal to $5$, so we round up and increase the $2$ by $1$ to get $3$. **Answer**: $3$. |
| Round $9.99$ to the nearest integer. | The digit we are rounding to is the $9$ (units). The next digit is $9$, which is more than $5$, so we round up. The $9$ becomes $10$, so we set the units place to $0$ and increase the tens place by $1$ (which is also $9$) to get $10$. **Answer**: $10$. |
| Round $0.49$ to the nearest integer. | The digit we are rounding to is the $0$. The next digit is $4$, which is less than $5$, so we round down and keep the $0$ the same. **Answer**: $0$. |
| How should you round $0.49$ to avoid a common mistake? | Always look directly at the digit after the decimal point ($4$) and round down to $0$; do not round $0.49$ to $0.5$ first (which would then round to $1$). Don't try to round in stages. |
| Round $999.50$ to the nearest integer. | The digit we are rounding to is the last $9$ (units). The next digit is $5$, so we round up. The $9$ becomes $10$, set units to $0$ and increase tens ($9$) to $10$; repeat for hundreds place, resulting in $1000$. **Answer**: $1000$. |

