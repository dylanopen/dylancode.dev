---
title: Floats
---

A *float* is a **floating point number**.

It's called that because it stores a *fractional number* where the decimal point
(well, it's actually a *binary* point) can move - as opposed to in *fixed* point
notation).

> The short answer is that floating point variables store decimal numbers!

## Examples of floats

- $7.8$
- $4.0$
- $-8.1$

## Declaring a float variable

You can declare and initialise a variable with a `float` datatype in C# like
this:

```cs
float myFloat = 5.7;
```

## The `double` type

You may be wondering: why would we use a new type if the `float` type can
already represent a huge range of values?

The answer is because `float` is *not very precise*, and you can tell when
working with very big (or very small) numbers.

To solve this, we can use the `float` data type, which stores a number using
`64 bits` instead of `float`'s `32 bits`.

Declare and initialise a variable like this:

```cs
double myDouble = 3.14159265358979
```

## Signed or unsigned?

Unlike integers, **all floating point values are signed**.

This means that both `float`s and `double`s can represent either positive or
negative values.

## The issues with `float`s and `double`s

Floating point calculations don't always give you what you want.

A common solution to this is 'loose equality', which I'll cover here soon :)

