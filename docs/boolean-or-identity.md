# Boolean OR identity

The identity of the OR operation is the value that, when we combine it with value $x$ using the OR operation, we get $x$ back again.

That's because zero is treated as false, and because either side has to be true
for the OR to be true, if $x$ is $0$, then the OR will be $0$, and if $x$ is $1$,
then the OR result will be $1$, so the result is just $x$.

In the case of OR, it's $0$, because:
- $0 + 0 = 0$
- $1 + 0 = 1$

This means that if we have a value $x$ and we OR it with $0$, we get $x$ back
again:
- $0 + 0 = 0$
- $1 + 0 = 1$

> $A + 0 = A$

## Boolean simplification

Now we know that, we can simplify any expression that has something ORed with $0$. Whenever we see something ORed with $0$, we can just remove the $0$ and keep the other value.

For example, if we have $0 + A$, we can simplify it to just $A$.
