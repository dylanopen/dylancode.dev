---
title: Arithmetic operators
---

An *arithmetic operator* is essentially a symbol that performs maths.

They're usually self-explanatory - the expression `3+4` evaluates to `7` - but
you may not be familiar with all of the symbols used in C#!

## Addition

You can do addition with the `+` operator:

```cs
int sum = 3 + 4; // 7
double total = 5.5 + 2.3; // 7.8
char letter = (char)('A' + 4); // 'E'
```

Note that the `+` operator can also be used to concatenate (join together)
strings:

```cs
string greeting = "Hello, " + "world!"; // "Hello, world!"
```

Its purpose depends on the data types of the values being added together.

## Subtraction

You can do subtraction with the `-` operator:

```cs
int difference = 10 - 4; // 6
double result = 5.5 - 2.3; // 3.2
```

## Multiplication

You can do multiplication with the `*` operator (an asterisk, **not** the times
symbol `×` or letter `x`):

```cs
int product = 3 * 4; // 12
double result = 2.5 * 4.0; // 10.0
```

## Order of operations

When you have multiple arithmetic operators in a single expression, the order of
operations matters!

C# follows the normal mathematical order of operations - you probably know this
as `BIDMAS`, `BODMAS`, `PEMDAS`, or something similar.

In the expression `3 + 4 * 2`, the multiplication is done first, so the result
is `3 + 8`, which is `11`.

You can use parentheses `()` to change the order of operations. In the
expression `(3 + 4) * 2`, the addition is done first, so the result is `7 * 2`,
which is `14`.

