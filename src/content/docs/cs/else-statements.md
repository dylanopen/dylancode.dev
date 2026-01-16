---
title: Else statements
---

An *else statement* allows us to run a block of code if the previous `if` (or
`else if`) condition was false.

We can write this using words like this:
- Check `condition`:
  - If `condition` is true, run the code inside the `if` block.
  - If `condition` is false, run the code inside the `else` block.

## Basic syntax

```cs
if (condition) {
    // Code to run if the condition is true
} else {
    // Code to run if the condition is false
}
```

Or, if we're using `else if` statements:

```cs
if (condition1) {
    // Code to run if condition1 is true
} else if (condition2) {
    // Code to run if condition1 is false and condition2 is true
} else if (condition3) {
    // Code to run if condition1 and condition2 are false and condition3 is true
} else {
    // Code to run if all previous conditions are false
}
```

## `else`'s relationship with `else if` statements

You may be able to tell that an `else if` statement is actually just syntax
sugar for an `if` statement wrapped inside an `else` block.

This code:

```cs
if (condition1) {
    // Code to run if condition1 is true
} else if (condition2) {
    // Code to run if condition1 is false and condition2 is true
}
```

Is exactly the same as this code:

```cs
if (condition1) {
    // Code to run if condition1 is true
} else {
    if (condition2) {
        // Code to run if condition1 is false and condition2 is true
    }
}
```

...but much easier to read and write!

## Our example from before: positive, negative, or zero

In the last chapter, we wrote this code:

```cs
int number = -5;
if (number > 0) {
    Console.WriteLine("The number is positive.");
} else if (number < 0) {
    Console.WriteLine("The number is negative.");
} else if (number == 0) {
    Console.WriteLine("The number is zero.");
}
```

We worked out that, if the number is not greater than zero, and not less than
zero, it must, well, *be zero*!

So there really is no need to check the last condition.  
We can just use an `else` statement instead:

```cs
int number = -5;
if (number > 0) {
    Console.WriteLine("The number is positive.");
} else if (number < 0) {
    Console.WriteLine("The number is negative.");
} else {
    Console.WriteLine("The number is zero.");
}
```

Output:

```
The number is negative.
```

Or, if we set `number` to `0`:

```
The number is zero.
```

