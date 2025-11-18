# Optimisation through differentiation

Optimisation is where we find the maximum or minimum value of a function,
usually in order to solve a real-world problem - e.g. what is the optimal
dimensions of a box to maximise volume, or what is the optimal price to charge
to maximise profits.

## Steps

1. Find an expression for the quantity to be optimised (e.g. area, volume,
  profit) in terms of just one variable.  
  This often involves eliminating other variables using a limiting condition.
2. Find the derivative of the thing to be optimised with respect to the
  variable.
3. Find where the derivative is equal to zero - these are the critical points.
4. Use the second derivative to work out if each critical point is a maximum or
  minimum point.

### Example: a wire has length 12 cm - what is the maximum area of a rectangle that can be formed?

- Let x = length
- Let y = width
- Area, A = xy
- Perimeter of rectangle = $2(x+y)=12$
- Write $y$ in terms of $x$:
  - $2(x+y) = 12$
  - $x + y = 6$
  - $y = 6 - x$
- We can then substitute this expression for $y$ into the area formula:
  - $A = x(6 - x)$
  - $A = 6x - x^2$
- We noww differentiate area with respect to $x$:
  - $\frac{dA}{dx} = 6 - 2x$
- To find the maximum area, we set the derivative equal to zero:
  - $6 - 2x = 0$
  - $2x = 6$
  - $x = 3$
- We can then find $y$:
  - $y = 6 - x = 6 - 3 = 3$
Find the area:
  - $A = xy = 3 \times 3 = 9$
Answer: the maximum area is found when both $width=3$ and $length=3$ (a square).
The area is $9 cm^2$.

