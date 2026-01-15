---
title: Division
---

The reason that we didn't cover division in the main
[arithmetic operators](/cs/arithmetic-operators) chapter is that division
behaves a little differently depending on the data types of the values being
divided.

## Floating-point division

If we're working with `float` or `double` values, division behaves as you'd
expect:

```cs
double result = 7.0 / 2.0; // 3.5
float result2 = 5.5f / 2.0f; // 2.75f
```

These results are the same as what you'd get from a calculator.

> Note that, because of how floating-point numbers are represented in binary,
> you may sometimes get results that are very slightly off from what you'd
> expect.  
> For example, `0.1 + 0.2` may evaluate to `0.30000000000000004` instead of
> `0.3`. That is perfectly normal, *but* can cause some unexpected behaviour if
> you're not aware of it! You should always use 'loose equality' when working
> with floats

## Integer division

*Integer* division is a little different.

Instead of giving us a decimal result, integer division *truncates* the decimal
part and only gives us the whole number part of the result.

For example, you may thing that `7 / 2` would evaluate to `3.5`, but because
we're using integers, the result is truncated to just `3`. Remember that
truncation isn't rounding, but rather 'chopping off' the decimal part entirely:

```cs
int result = 7 / 2; // 3.5 -> 3
int result2 = 5 / 3; // 1.666... -> 1
```

If you want to get a decimal result from dividing two integers, you need to
*cast* one (or both) of the integers to a floating-point type first:

```cs
int a = 7;
int b = 2;
double result1 = (double)a / b; // 3.5
double result2 = a / (double)b; // 3.5
double result3 = (double)a / (double)b; // 3.5
```

