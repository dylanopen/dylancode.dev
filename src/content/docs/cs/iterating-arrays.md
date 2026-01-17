---
title: Iterating arrays
---

Using the knowledge that we can read an element (item) of an array like this:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
int firstNumber = numbers[3]; // 40
```

...we can loop through all the elements of an array by accessing elements 0
through to 4 in this example:

```cs
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(numbers[i]);
}
```

This will output:

```
10
20
30
40
50
```

- The reason this works is that the loop variable `i` starts at `0` and
  increases by `1` each time through the loop, until it reaches `5`.
- Each time through the loop, we use `i` as the index to get the element from
  the `numbers` array at that position.
- When `i` reaches `5`, the loop stops because the condition `i < 5` is no
  longer true. We end the loop before trying to access `numbers[5]`, which
  would cause an error because there is no element at that index (it is 'out of
  bounds').

## Using the Length property

We don't want to hard-code the number `5` in the loop condition, because if the
array changes size, we would have to change the code. Instead, we can use the
`Length` property of the array to get the number of elements in the array:

```cs
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

Because `numbers.Length` evaluates to `5`, this code behaves the same way as the
previous example, but it will also keep working if the size of the `numbers`
array changes.

## Example: sum of an array

Let's say we wanted to find the sum (total) of all the numbers in an array. We
can do this by iterating through the array and adding each number to a running
total:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
int sum = 0;
for (int i = 0; i < numbers.Length; i++)
{
    sum += numbers[i];
}
Console.WriteLine(sum); // Output: The sum is: 150
```

## Example: doubling each element

We can also modify each element in the array by iterating through it. For
example, to double each number in the array:

```cs
int[] numbers = { 10, 20, 30, 40, 50 };
for (int i = 0; i < numbers.Length; i++)
{
    numbers[i] = numbers[i] * 2; // or numbers[i] *= 2;
}
// Now numbers is { 20, 40, 60, 80, 100 }
```

