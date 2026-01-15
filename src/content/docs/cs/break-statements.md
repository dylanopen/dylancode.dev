---
title: Break statements
---

A *break statement* is used to exit a loop or switch statement before it has
naturally completed its execution.

In other words, even if the condition for the loop is still true, a `break`
statement will **immediately** exit the loop and continue executing the code
that follows *after* the loop.

## Basic syntax

To break out of a loop, just add this line anywhere in the loop:

```cs
break;
```

## Example: breaking out of a while loop

Here's an example of a while loop that counts from 1 to 10, but uses a `break`
statement to exit the loop when the count reaches 5:

```cs
int count = 1;
while (count <= 10) {
    Console.WriteLine(count);
    if (count == 5) {
        break; // Exit the loop when count is 5
    }
    count++; // Increment count by 1
}
```

Output:

```
1
2
3
4
5
```

> Note that the 5 is printed before the loop exits, because the `break`
> statement is executed *after* the `Console.WriteLine(count);` line.

## Example: breaking out of a for loop

We can do exactly the same thing with a for loop. Here's an example that counts from 1 to 10,
but breaks out of the loop when the count reaches 5:

```cs
for (int count = 1; count <= 10; count++) {
    Console.WriteLine(count);
    if (count == 5) {
        break; // Exit the loop when count is 5
    }
}
```

## Break statements outside conditions

If we are using `break` to break out of a loop, it's almost always inside some
kind of condition (like an `if` statement) that checks for a specific situation.

For example, in the example above, we only want to break out of the loop when
`count` is equal to 5.

You shouldn't put a `break` statement directly inside a loop without any
condition, because that would make the loop exit immediately on the first
iteration, which is usually not what you want (as the loop would be entirely
pointless).

Here's an example of a loop with a `break` statement *outside* an `if`
condition:

```cs
int count = 1;
while (count <= 10) {
    Console.WriteLine(count);
    break; // This will exit the loop immediately
    count++; // This line will never be reached
}
```

Output:

```
1
```

