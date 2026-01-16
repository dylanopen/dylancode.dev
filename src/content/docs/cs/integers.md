---
title: Integers
---

An *integer* is a whole number (i.e., a number without a decimal point).

They **can** be positive, negative, or zero.

## Examples of integers

- `42`
- `-7`
- `0`

## Declaring an integer variable

In C#, you can declare an integer variable using the `int` data type:

```csharp
int myNumber = 10;
```

You can *also* use the `Int32` data type, which is essentially equivalent:

```csharp
Int32 myNumber = 10;
```

## Signed vs unsigned integers

There exist two types of integers: *signed* and *unsigned*.

- A *signed* integer can represent both positive and negative whole numbers.
- An *unsigned* integer can only represent non-negative whole numbers (i.e.,
  zero and positive numbers).

> Importantly, unsigned integers can store a larger range of positive values
> compared to signed integers of the same size, since they don't need to use a
> bit to represent the sign.

Usually, we can tell whether an integer is signed or unsigned by its name:
- Signed integers: `int`, `short`, `long`
- Unsigned integers: `uint`, `ushort`, `ulong`

Sometimes, signed integers are prefixed with an `s`, such as `sbyte` (while a
`byte` is unsigned). This is non-standard, and it's typical of microsoft to name
things badly ;)

## Other types of integer

While `int` is the standard integer type, there are lots more which can store
different ranges of whole numbers. The most common are:

| Data Type | Size (bits) | Range                          |
|-----------|-------------|--------------------------------|
| byte      | 8           | 0 to 255 ($2^8)                |
| short     | 16          | - 32,768 to 32,767             |
| int       | 32          | $-2^31$ to $2^31 - 1$          |
| long      | 64          | - $2^63$ to $2^63 - 1$         |
| sbyte     | 8           | -128 to 127                    |
| ushort    | 16          | 0 to 65,535                    |
| uint      | 32          | 0 to $2^32 - 1$                |
| ulong     | 64          | 0 to $2^64 - 1$                |

You can use these types in the same way as `int`, just by replacing `int` with
the desired type name:

```csharp
byte smallNumber = 200;
short mediumNumber = -30000;
long largeNumber = 9000000000;
sbyte negativeSmallNumber = -100;
ushort positiveMediumNumber = 60000;
uint positiveLargeNumber = 4000000000;
ulong veryLargeNumber = 18000000000000000000;
```

## Integer overflow

If you try to store a value that is too big (or small) to be stored in the
integer type, then you will get an error. That's called an *integer overflow*.

For example, if you try to store the value `300` in a `byte` variable, you'll
get an overflow error, because `byte` can only store values from `0` to `255`.

```csharp
byte myByte = 300; // Error: Overflow
```

