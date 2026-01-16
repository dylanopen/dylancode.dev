---
title: Loops
---

A *loop* is simply a way to repeat a block of code multiple times.

## Types of loops

There are a few different types of loops, including:

- Count-controlled loops
- Condition-controlled loops
- Infinite loops

## Count-controlled loops

A *count-controlled loop* repeats a block of code a specific number of times -
e.g. by repeating it for each item in a collection, or by counting from one
number to another.

The most common example is a *for loop*.

## Condition-controlled loops

A *condition-controlled loop* repeats a block of code as long as a certain
condition is true.

In pseudocode, we might write this as:

```
while (condition is true) {
    // Code to repeat
}
```

..and the `Code to repeat` will keep running until the condition becomes
`false`.

## Infinite loops

An infinite loop is a loop that never ends. This usually happens when the
condition for a condition-controlled loop never becomes `false`.

An infinite loop is essentially the same as saying:

```
while (true) {
    // Code to repeat forever
}
```

(because the condition will never be false).

Often, infinite loops are a mistake - for example, if we forget to update a
variable. But they do have uses!

### Types of infinite loops

There are actually two types of infinite loops:
- actually infinite loops, which never end
- inifinite loops that we manually break out of

### Actually infinite loops

These are infinite loops that actually never end. For example:

```cs
while (true) {
    Console.WriteLine("This will print forever!");
}
```

These are almost always a mistake, unless you're writing something like an
operating system or server that is supposed to run forever.

### Infinite loops that we manually break out of

Using the `break` (or `return`) keyword (which we will cover soon!), we can
create a `while` loop that, even though the condition never becomes false, we
can still exit the loop when we want to.

For example:

```cs
while (true) {
    Console.WriteLine("Type 'exit' to quit the loop:");
    string input = Console.ReadLine();
    if (input == "exit") {
        break; // Exit the loop
    }
    Console.WriteLine("You typed: " + input);
}
```

In this example, the loop will keep running until the user types "exit", at
which point the `break` statement will exit the loop.

