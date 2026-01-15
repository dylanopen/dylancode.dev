---
title: Else-if statements
---

> An `else ... if` statement allows us to check another condition if the
> previous `if` condition was false.

Importantly, the code inside an `else if` block will only run if the previous
`if` condition was false. Even if the `else if` condition is true, it won't run
if the previous `if` condition was true.

We can write this using words like this:
- Check `condition1`:
  - If `condition1` is true, run the code inside the `if` block.
  - If `condition1` is false, check `condition2`:
    - If `condition2` is true, run the code inside the `else if` block.
    - If `condition2` is false, skip the `else if` block \[and move on to the
      next else if or else block, if any\].

## Basic syntax

```cs
if (condition1) {
    // Code to run if condition1 is true
} else if (condition2) {
    // Code to run if condition1 is false and condition2 is true
}
```

We can have multiple `else if` statements to check multiple conditions in
sequence:

```cs
if (condition1) {
    // Code to run if condition1 is true
} else if (condition2) {
    // Code to run if condition1 is false and condition2 is true
} else if (condition3) {
    // Code to run if condition1 and condition2 are false and condition3 is true
}
```

> Remember that, for example, `condition3` will only be checked if both
> `condition1` and `condition2` are false.

## Example: positive, negative, or zero

Suppose we have an if statement that checks if a number is positive:

```cs
int number = 10;
if (number > 0) {
    Console.WriteLine("The number is positive.");
}
```

But what if we also want to check if the number is negative or zero? We can use
*else-if* statements to handle these additional conditions.

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

Output:

```
The number is negative.
```

In this example:
- The first `if` checks if `number` is greater than 0. Since `number` is -5, this condition is false.
- The program then checks the `else if` condition to see if `number` is less than 0. This condition is true, so it prints "The number is negative."
- The last `else if` condition is not checked because one of the previous conditions was true.

You may realise that, if the number is not positive and not negative, it must be
zero. So we don't actually need to check the last condition - and we'll learn
how to do that next!

