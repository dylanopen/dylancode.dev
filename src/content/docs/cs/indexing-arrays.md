---
title: Indexing arrays
---

Every item in an array has an *index*. This represents where the item is located
within the array.

The index starts from `0` for the first item, `1` for the second item, and so
on.

## Reading an item from an array

Let's say we have an array of numbers:

```cs
//     index:      0   1   2   3   4
int[] numbers = { 10, 20, 30, 40, 50 };
```

We can get the first item (which is `10`) by using its index `0`:

```cs
int firstNumber = numbers[0]; // firstNumber is 10
```

Or, we can get the third item (which is `30`) by using its index `2`:

```cs
int thirdNumber = numbers[2]; // thirdNumber is 30
```

Then, we can print these values:

```cs
Console.WriteLine(firstNumber); // Output: 10
Console.WriteLine(thirdNumber); // Output: 30
```

Or, to print them directly:

```cs
Console.WriteLine(numbers[0]); // Output: 10
Console.WriteLine(numbers[2]); // Output: 30
```

## Modifying an item in an array

We can also change an item in the array by using its index. For example, to
change the second item (which is `20`) to `25`, we can do:

```cs
numbers[1] = 25;
// Now the array is { 10, 25, 30, 40, 50 }
```

## Finding the length of an array

We can find out how many items are in an array by using the `Length` property:

```cs
int length = numbers.Length; // length is 5
Console.WriteLine(length); // Output: 5
```

> It is important to remember that since array indexing starts at `0`, the last
> index of an array is always `Length - 1`. For example, in our `numbers` array,
> the last index is `4` (since `5 - 1 = 4`).

