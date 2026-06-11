# Properties of binary operators

## Commutativity

- A binary operator is *commutative* if changing the order of the inputs doesn't
  change the output.
- For example, addition ($+$) is commutative because $a + b = b + a$ for any
  numbers $a$ and $b$.
- [[multiplication]] ($*$) is also commutative: $a * b = b * a$.
- However, [[subtraction]] ($-$) and [[riscv/division|division]] ($/$) are *not* commutative:
  - $a - b$ is generally not equal to $b - a$.
  - $a / b$ is generally not equal to $b / a$.
  - Exponentiation (`^`) - powers - are also not commutative: $a^b$ is generally
    not equal to $b^a$.

## Associativity

- A binary operator is *associative* if the way in which inputs are grouped does
  not affect the output.
- For example, addition is associative because $(a + b) + c = a + (b + c)$ for
  any numbers $a$, $b$, and $c$.
- [[multiplication]] is also associative: $(a * b) * c = a * (b * c)$.
- However, [[subtraction]] and [[riscv/division|division]] are *not* associative:
  - $(a - b) - c$ is generally not equal to $a - (b - c)$.
  - $(a / b) / c$ is generally not equal to $a / (b / c)$.
  - Exponentiation is also not associative: $(a^b)^c$ is generally not equal to
    $a^(b^c)$.

## Identity elements

- If $e*a=a*e$ for ALL values in the set, $e$ is the identity.
- For addition, for example, the identity is $0$, because $0 + a = a + 0 = a$
  for any number $a$.
- For [[multiplication]], the identity is $1$, because $1 * a = a * 1 = a$ for any
  number $a$.

> The inverse of the identity element is the identity element itself.

## Inverse elements

- The inverse element is the 
- If $a*b=b*a=e$, $a$ and $b$ are *inverse* of each other.
- For addition, the inverse of a number $a$ is $-a$, because $a + (-a) = (-a) +
  a = 0$.
- For [[multiplication]], the inverse of a number $a$ (assuming $a \neq 0$) is
  $\frac{1}{a}$, because $a * \frac{1}{a} = \frac{1}{a} * a = 1$.

> Not all binary operators have an inverse.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a commutative binary operator? | A binary operator is commutative if changing the order of the inputs does not change the output, e.g., $a + b = b + a$ for addition. |
| Name two commutative binary operators and two non-commutative binary operators with examples. | Commutative: addition ($a + b = b + a$) and multiplication ($a * b = b * a$).<br/>Non-commutative: subtraction ($a - b \neq b - a$ generally) and division ($a / b \neq b / a$ generally). |
| Is exponentiation ($^$) commutative? Give an example. | No, exponentiation is not commutative; $a^b$ is generally not equal to $b^a$. |
| What is an associative binary operator? | A binary operator is associative if the way inputs are grouped does not affect the output, e.g., $(a + b) + c = a + (b + c)$ for addition. |
| Name two associative binary operators and two non-associative binary operators. | Associative: addition and multiplication.<br/>Non-associative: subtraction and division (e.g., $(a - b) - c \neq a - (b - c)$ generally). |
| Is exponentiation associative? | No, exponentiation is not associative; $(a^b)^c$ is generally not equal to $a^{(b^c)}$. |
| What is an identity element for a binary operator? | If $e * a = a * e$ for all values in the set, then $e$ is the identity element. |
| Give the identity elements for addition and multiplication. | For addition, the identity is $0$ ($0 + a = a + 0 = a$).<br/>For multiplication, the identity is $1$ ($1 * a = a * 1 = a$). |
| What is the relationship between the identity element and its inverse? | The inverse of the identity element is the identity element itself. |
| What defines inverse elements for a binary operator? | If $a * b = b * a = e$ (where $e$ is the identity), then $a$ and $b$ are inverses of each other. |
| Give the inverse elements for addition and multiplication. | For addition, the inverse of $a$ is $-a$ ($a + (-a) = 0$).<br/>For multiplication, the inverse of $a$ (assuming $a \neq 0$) is $\frac{1}{a}$ ($a * \frac{1}{a} = 1$). |
| Do all binary operators have an inverse? | No, not all binary operators have an inverse. |

