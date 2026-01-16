---
title: If statements
---

An *if statement* is a way to only run a block of code if a certain condition
is true.

It allows us to make 'decisions' in our code.

## Basic syntax

```cs
if (condition) {
    // Code to run if the condition is true
}
```

The condition has to evaluate to a boolean value (`true` or `false`).

## Examples

```cs
int age = 20;
bool isOldEnough = age >= 17;
if (isOldEnough) {
    Console.WriteLine("You are old enough to drive!");
}
```

Output:

```
You are old enough to drive!
```

## Conditions in the if statement

We can also put the condition directly in the if statement:

```cs
int age = 20;
if (age >= 17) {
    Console.WriteLine("You are old enough to drive!");
}
```

Output:

```
You are old enough to drive!
```

In these examples, the code inside the if statement will only run if the value
of `age` is greater than or equal to 17.

