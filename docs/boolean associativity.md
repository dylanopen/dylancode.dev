# Boolean associativity

If a [[boolean]] operator is *associative*, it means that we can group the values in 
any way and we get the same result.

For any operator $\ominus$ which is associative, we rewrite:

> $A \ominus (B \ominus C) = (A \ominus B) \ominus C$

The main [[boolean]] operations that are associative are:
- AND: $A \cdot (B \cdot C) = (A \cdot B) \cdot C$
- OR: $A + (B + C) = (A + B) + C$
- XOR: $A \oplus (B \oplus C) = (A \oplus B) \oplus C$

This means that we can group the values in any way we like when we're using
these operations, and we'll get the same results.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What does it mean for a boolean operator to be associative? | It means we can group the values in any way and get the same result: $A \ominus (B \ominus C) = (A \ominus B) \ominus C$ |
| Which main boolean operations are associative? | AND ($A \cdot (B \cdot C) = (A \cdot B) \cdot C$), OR ($A + (B + C) = (A + B) + C$), and XOR ($A \oplus (B \oplus C) = (A \oplus B) \oplus C$) |
| How can we rewrite an expression using an associative operator? | We can rewrite $A \ominus (B \ominus C)$ as $(A \ominus B) \ominus C$ |

