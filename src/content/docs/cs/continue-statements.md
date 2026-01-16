---
title: Continue statements
---

A *continue statement* is used inside loops to skip the current iteration and
move on to the next one.

In short, when a `continue` statement is encountered inside a loop, the
loop skips back to the beginning of the loop for the next iteration, bypassing
any code that's left below to run.

## Basic syntax

To continue to the next iteration of a loop, just add this line anywhere in the loop:

```cs
continue;
```

## Example: using continue in a while loop

Here's an example of a while loop that counts from 1 to 5, but uses a `continue`
statement to skip printing the number 3:

```cs
int count = 1;
while (count <= 5) {
    if (count == 3) {
        count++; // Increment count to avoid infinite loop
        continue; // Skip the rest of the loop when count is 5
    }
    Console.WriteLine(count);
    count++; // Increment count by 1
}
```

Output:

```
1
2
4
5
```

> Note that we increment `count` before the `continue` statement to avoid an
> infinite loop when `count` is 3.  
> If we didn't do this, the loop would keep hitting the `continue` statement,
> because `count` would never change from 3.  
> We could also have done this by moving the `count++` line to the very top of
  the loop (and then starting it at 0 instead of 1).

## Example: using continue in a for loop

We can do exactly the same thing with a for loop. Here's an example that counts from 1 to 5,
but continues to the next iteration when the count is 3:

```cs
for (int count = 1; count <= 5; count++) {
    if (count == 3) {
        continue; // Skip the rest of the loop when count is 3
    }
    Console.WriteLine(count);
}
```

Output:

```
1
2
4
5
```

> In this case, we don't need to manually increment `count` before the `continue`
> statement, because the `for` loop automatically increments `count` at the end
> of each iteration (**even** if we use `continue`).

## Continue statements outside conditions

Like with a `break` statement, if we are using `continue` to skip to the next iteration of a loop, it's almost always inside some kind of condition (like an
`if` statement) to decide when to skip the rest of the loop. Otherwise, any code
below the `continue` statement would never run!

