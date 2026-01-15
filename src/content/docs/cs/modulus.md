---
title: Modulus
---

The *modulus* operator is represented by the `%` symbol, and it gives us the
*remainder* of a division operation.

For example, the remainder of `7` divided by `3` is `1`, because `3` goes into
`7` twice (which is `6`), and there is `1` left over.

We can use the modulus operator like this:

```cs
int remainder = 7 % 3; // 1
int remainder2 = 10 % 4; // 2
int remainder3 = 15 % 5; // 0
```

## Common use: odd/even checking

One of the most common uses for the `%` operator is to check whether a number is
*odd* or *even*. An **even** number is divisible by `2` with **no** (`0`)
remainder, whereas an **odd** number has a remainder of `1` when divided by `2`.

So we could check for an even number like this:

```cs
int number = 8;
bool isEven = (number % 2 == 0); // true
```

...or for an odd number like this:

```cs
int number = 7;
bool isOdd = (number % 2 == 1); // true
```

## Common use: wrapping values

Suppose we have a variable that represents a colour in the RGB format.

The last 8 bits of the RGB value represent the blue component, which can have a
value from `0` to `255`. We can get the last 8 bits by finding the *remainder*
when dividing by `256` (because `256` is `2^8`, or `1` followed by `8` zeroes in
binary):

```cs
int rgbValue = 0xFFAA33; // some RGB colour value
int blueComponent = rgbValue % 256; // 0x33 (51 in decimal)
```

This technique of using the modulus operator to 'wrap' values around a certain
range is very common in programming!

## A case study: fizzbuzz

A classic programming exercise is called *fizzbuzz*. The task is to print the
numbers from `1` to `100`, but for multiples of `3`, print `"fizz"` instead of
the number, for multiples of `5`, print `"buzz"` instead of the number, and for
multiples of both `3` and `5`, print `"fizzbuzz"` instead of the number.

Here is a (bad) implementation of fizzbuzz in C#:

```cs
for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine("fizzbuzz");
    }
    else if (i % 3 == 0)
    {
        Console.WriteLine("fizz");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine("buzz");
    }
    else
    {
        Console.WriteLine(i);
    }
}
```

> Don't worry if you don't understand all of this code yet. It covers concepts
> that we haven't covered yet, such as loops and conditional statements. The key
> parts are the modulus operations (`i % 3` and `i % 5`), which check whether
> `i` is a multiple of `3` or `5`.

There are *far* better ways to implement fizzbuzz - e.g. by building up a
string, or using a hashmap (or `Dictionary` in C#) - but this basic
implementation shows the uses of the modulus operator.

