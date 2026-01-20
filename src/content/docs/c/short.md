---
title: Short
---

A *short* in C is a data type which can store whole numbers, just like an
integer. However, a short *usually* (and I say *usually* because C is weird and
doesn't guarantee exact sizes) takes up less memory than a regular integer.

Generally, a short is 2 bytes (16 bits) in size. This means it can represent
integer values from -32,768 to 32,767.

## Syntax

The data type for a short integer is `short`. Here's how we can declare
a short variable:

```c
short myShort;
```

We can also assign a value to it:

```c
myShort = 25565;
```

Or we can do both at the same time:

```c
short myShort = 25565;
```

## When to use shorts

YOu should use a short when you need to save memory and you're sure the values
you'll be working with will fit within the range of a short (-32,768 to 32,767).

Some good examples of when to use shorts include:
- Storing small counts, like the number of items in a list that won't exceed
  32,767.
- Representing things like *ports* which use exactly 16 bits.
- When working with large arrays of numbers where memory usage is a concern and
  the values fit within the short range.

However, if you need to work with larger numbers, or if you're unsure about the
range of values, it's safer to use a regular `int` instead (or even a `long`).

## Integer constants with shorts

Just like with regular integers, we can use integer constants with shorts. For
example:

```c
short a = 12345;
short b = -30000;
short c = a + b; // c will be -17655
```

*As long as* the constant is being assigned to a short variable or passed to
a function which expects a short, the compiler will handle it correctly.

However, be careful not to assign a value that exceeds the range of a short,
like this:

```c
short d = 40000; // This will cause an overflow!
```

> Some compilers may give a warning or error for this, while others may
> silently wrap the value around, leading to unexpected results. It's one of the
> most common mistakes to make with C - so make sure you get this right!

## Operations on shorts

We can do exactly the same operations on shorts as we do with regular
[integers](/c/integers).

