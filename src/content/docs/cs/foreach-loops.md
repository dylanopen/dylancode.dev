---
title: Foreach loops
---

A *foreach* loop is a simpler way to iterate through all the elements in an
array.

Its syntax is this:

```cs
foreach (type itemName in arrayName)
{
    // Use itemName here
}
```

The code above is equivalent to this:

```cs
for (int i = 0; i < arrayName.Length; i++)
{
    type itemName = arrayName[i];
    // Use itemName here
}
```

...but just shorter and easier to read.

## Our example from before: sum of an array

Before, we used this code to find the sum of all the numbers in an array:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
int sum = 0;
for (int i = 0; i < numbers.Length; i++)
{
    sum += numbers[i];
}
Console.WriteLine(sum); // Output: The sum is: 150
```

We can rewrite this using a *foreach* loop like this:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
int sum = 0;
foreach (int number in numbers)
{
    sum += number;
}
Console.WriteLine(sum); // Output: The sum is: 150
```

## Modifying items in an array with foreach

Importantly, you cannot use a *foreach* loop to modify the items in an array.

For example, the following code will not work as intended:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
foreach (int number in numbers)
{
    number *= 2; // This does NOT modify the array!
}
```

The reason this doesn't modify the array is because `number` is a *copy* of the
element in the array. That means that changing `number` does not change the
original element in the `numbers` array, so we're not actually modifying the
array at all.

If you want to modify each element in an array, you need to use a regular `for`
loop instead, like we had before:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
for (int i = 0; i < numbers.Length; i++)
{
    numbers[i] *= 2; // This DOES modify the array
}
```

