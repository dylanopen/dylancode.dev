# Solving simultaneous equations by elimination

*Simultaneous equations* are when we have two or more equations with multiple
*unknowns* (letters that represent numbers we don't know yet). The goal is to
find the values of these letters ([[cs/variables|variables]]) that make all the equations true at
the same time.

## When can we solve using elimination?

We **can** use the elimination method when the equations are both *linear* (in
the form $ax + by = c$), and we have the same number of equations as unknowns (
for example, two equations with two unknowns, $x$ and $y$).

## Basic steps to solve

The key steps to solve a simultaneous equation with *two* unknowns by
elimination are:

- Find both equations in the form $ax + by = c$.
- Multiply one or both equations by a number so that the coefficients (the numbers
  in front of the [[cs/variables|variables]]) of one of the [[cs/variables|variables]] are the same (or
  opposites). This allows us to cancel out that variable.
- Add or subtract one equation from another. This involves adding or subtracting
  each term individually to form a new equation with just one variable.
- Solve this new equation to find the value of one variable.
- Substitute this value back into one of the original equations to find the value
  of the other variable.

Like with most concepts, it's much easier to see with some examples.

## Examples

## Example: solve the simultaneous equations $2x + 3y = 16$ and $4x - y = 2$.

- First, we have the two equations:
  - $2x + 3y = 16$  (Equation 1)
  - $4x - y = 2$    (Equation 2)
- We want to eliminate one of the [[cs/variables|variables]]. You can do whichever you want, but
  I will eliminate $y$ here. To do this, we can multiply Equation 2 by 3 so that
  the coefficient of $y$ in both
  equations will be opposites:
  - $2x + 3y = 16$ (Equation 1)
  - $12x - 3y = 6$ (Equation 2 multiplied by 3)
- Add the two equations together to eliminate the $y$ variable:
  - $(2x + 12x) + (3y - 3y) = 16 + 6$
  - $14x + 0 = 22$
  - $14x = 22$
- Solve for $x$:
  - $x = \frac{22}{14} = \frac{11}{7}$
- substitute $x = \frac{11}{7}$ back into one of the original equations to find
  $y$. You can use whichever equation you like: I'll use Equation 1:
    - $2(\frac{11}{7}) + 3y = 16$
    - $\frac{22}{7} + 3y = 16$
    - $3y = 16 - \frac{22}{7}$
    - $3y = \frac{112}{7} - \frac{22}{7}$
    - $3y = \frac{90}{7}$
    - $y = \frac{90}{21} = \frac{30}{7}$
- So the solution to the simultaneous equations is:
  - $x = \frac{11}{7}$
  - $y = \frac{30}{7}$

## Checking your solution

To check if your solution is correct, substitute the values of $x$ and $y$ back
into one or both of the original equations to see if they work!

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What are simultaneous equations? | Equations with two or more unknowns where the goal is to find values that make all equations true at the same time. |
| When can we use the elimination method to solve simultaneous equations? | When both equations are linear (in the form $ax + by = c$) and there is the same number of equations as unknowns. |
| What is the first step in solving by elimination? | Rewrite both equations in the form $ax + by = c$. |
| After arranging equations in the form $ax + by = c$, what do you do next? | Multiply one or both equations so that the coefficients of one variable are the same or opposites. |
| After making coefficients the same or opposites, what operation is performed? | Add or subtract the equations term-by-term to eliminate one variable, creating a new equation with one variable. |
| After you have a new equation with one variable, what do you do? | Solve it to find the value of that variable. |
| After finding one variable's value, how do you find the other variable? | Substitute that value back into one of the original equations and solve for the other variable. |
| In Example: $2x + 3y = 16$ and $4x - y = 2$, which step eliminates $y$? | Multiply equation 2 by 3 to get $12x - 3y = 6$, so the $y$ coefficients are opposites ($+3y$ and $-3y$). |
| In the example $2x + 3y = 16$ and $12x - 3y = 6$, what happens when you add them? | $14x + 0 = 22$, which gives $14x = 22$. |
| What is the $x$ solution in the example $2x + 3y = 16$ and $4x - y = 2$? | $x = \frac{11}{7}$ |
| After finding $x = \frac{11}{7}$, how do you find $y$ in the example? | Substitute into equation 1: $2(\frac{11}{7}) + 3y = 16$, solving gives $y = \frac{30}{7}$. |
| How do you check if a solution to simultaneous equations is correct? | Substitute the values of $x$ and $y$ back into one or both original equations to see if they work. |

