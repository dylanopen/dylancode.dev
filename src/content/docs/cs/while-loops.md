---
title: While loops
---

A *while loop* is a type of condition-controlled loop that repeats a block of
code as long as a certain condition is true.

In pseudocode, we might write this as:

```cs
while (condition is true) {
    // Code to repeat
}
```

## Basic syntax

In C#, we can write a for loop like this:

```cs
while (condition) {
    // Code to repeat
}
```

The `condition` has to evaluate to a boolean value (`true` or `false`).

> While loops can be confusing, but *all* that is happening here is that the
> code inside the `{}` is being repeated as long as the condition is true.

## Example: counting to 5

Here's an example of a while loop that counts from 1 to 5:

```cs
int count = 1;
while (count <= 5) {
    Console.WriteLine(count);
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

How does this code work?
- We start by initializing a variable `count` to 1.
- The while loop checks if `count` is less than or equal to 5.
- If the condition is true:
  - it prints the value of `count` 
  - it increments `count` by 1.
- This process repeats until `count` becomes 6, at which point the condition
  `count <= 5` becomes false, and the loop ends.

