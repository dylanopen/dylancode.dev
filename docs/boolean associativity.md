# Boolean associativity

If a boolean operator is *associative*, it means that we can group the values in 
any way and we get the same result.

For any operator $\ominus$ which is associative, we rewrite:

> $A \ominus (B \ominus C) = (A \ominus B) \ominus C$

The main boolean operations that are associative are:
- AND: $A \cdot (B \cdot C) = (A \cdot B) \cdot C$
- OR: $A + (B + C) = (A + B) + C$
- XOR: $A \oplus (B \oplus C) = (A \oplus B) \oplus C$

This means that we can group the values in any way we like when we're using
these operations, and we'll get the same results.
