---
title: Creating arrays
---

An *array* is a data type which stores a *collection* of items.

It's essentially a *list* of items, where:
- each item is the same data type (e.g. all integers, or all strings)
- the size of the array is fixed (i.e. it cannot grow or shrink)
- each item can be accessed by its *index* (i.e. its position in the list)

## Declaring an array

We can declare an array using the type, followed by square brackets `[]`, and
the name of the array:

```cs
int[] numbers;
```

This declares an array of `int` values called `numbers`.

> Note: we don't declare the size of the array yet - that's done when we
> initialise it.

## Initialising an array

We can initialise an array using the `new` keyword, followed by the type,
square brackets `[]`, and the size of the array in the brackets:

```cs
int[] numbers;
numbers = new int[5];
```

This initialises the `numbers` array to hold 5 `int` values.

We can also declare and initialise an array in one line:

```cs
int[] numbers = new int[5];
```

## Assigning values to an array

If we want to create an array called `primes` to hold the first 4 prime numbers,
we can do this:

```cs
int[] primes = new int[4] { 2, 3, 5, 7 };
```

> Note the use of curly braces `{}` to hold the values of the array. Any values
> in the array go inside them.

## Creating arrays: examples

```cs
int[] nums;
nums = new int[3];
nums = [ 2, 4, 6 ]

bool[] studentsPassed = new bool[]{ true, false, false, true, true };


```

