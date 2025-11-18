---
title: Solving simultaneous equations by substitution
---

*Simultaneous equations* are when we have two or more equations with multiple
*unknowns* (letters that represent numbers we don't know yet). The goal is to find
the values of these letters (variables) that make all the equations true at the
same time.

## When should we solve using substitution?

Using substitution for simple simultaneous equations is often more difficult
than it is to use elimination. But we can't always use elimination.

We should generally use substitution when the equations are not both linear (not
in the form $ax + by = c$).

## Basic steps to solve

- Rearrange one of the equations to make one variable the subject (get it on its
  own on one side of the equation).
- Substitute this expression into the other equation. This means replacing the
  variable you made the subject with the expression you found.
- Solve the resulting equation to find the value of one variable.
- Substitute this value back into one of the original equations to find the value
  of the other variable.

## Writing our answer

When we have any sort of quadratic or non-linear equations, we may get more than
one value for each variable.

It's important that we write out which values are 'pairs' of each other - for
example, we may find $x$ to have two different values, and $y$ to have two
different values. When we substitute each value of $x$ back into one of the
original equations to find the corresponding value of $y$, we need to make sure
we write out which values of $x$ produce which values of $y$.

We write this as "when $x = a$, $y = b$" and "when $x = c$, $y = d$", etc.

## Examples

Like with most concepts, it's much easier to see with some examples.

### Example: solve the simultaneous equations $x + y = 10$ and $x^2 + y^2 = 58$.

- We have the two equations:
  - $x + y = 10$  (Equation 1)
  - $x^2 + y^2 = 58$    (Equation 2)
- We can rearrange Equation 1 to make $y$ the subject:
  - $y = 10 - x$
  We could also have made $x$ the subject, but I'll choose $y$ here.
- Next, we substitute this expression for $y$ into Equation 2:
  - $x^2 + (10 - x)^2 = 58$
- Now we solve this equation for $x$:
  - $x^2 + (100 - 20x + x^2) = 58$
  - $2x^2 - 20x + 100 = 58$
  - $2x^2 - 20x + 42 = 0$
  - $x^2 - 10x + 21 = 0$
  - $(x - 3)(x - 7) = 0$
  - So, $x = 3$ or $x = 7$
- Now we substitute BOTH these values back into Equation 1 to find the
  corresponding values of $y$:
  - If $x = 3$:
    - $3 + y = 10$
    - $y = 7$
  - If $x = 7$:
    - $7 + y = 10$
    - $y = 3$
- We need to remember to write it in the correct form:
  - When $x = 3$, $y = 7$
  - When $x = 7$, $y = 3$

