---
title: Integers
---

*Integers* are just whole numbers. They're kind of the main data type used in C!

In fact, when C was just beginning, pretty much everything was an integer, or
made out of integers.

## Syntax

Integers have the type `int`.

We can declare an int variable like this:

```c
int myInteger;
```

We can also assign a value to it:

```c
myInteger = 42;
```

Or we can do both at the same time:

```c
int myInteger = 42;
```

## Size of integers

Integers are usually 4 bytes (32 bits) in size on modern systems, but this can
vary depending on the architecture and compiler - because... C.

If we assume integers are 4 bytes:
- The smallest integer we can represent is -2,147,483,648 (which is $-2^31$)
- The largest integer we can represent is 2,147,483,647 (which is $2^31 - 1$)
- Or, in other words, we can represent integers from -2.1 billion to +2.1
  billion.
- We can represent a total of $2^{32}$ different integer values (about 4.2
  billion)

That's *usually* enough, but we also have other integer types if we need more or
less range. We'll cover those later.

## Integer constants

We've seen an integer constant already - `42`.

A *constant* is any value in our program that doesn't change. Here, `42` is a
*hardcoded* value and doesn't change depending on input to the program or
anything else.

To use an integer constant, we just write it out in our code! Here's some
examples:

```c
int a = 10;
int b = 0;
int c = -5;
```

## Operations on integers

THere are lots of operations we can do to integer variables. For example:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulus (remainder): `%`
- Increment: `++`
- Decrement: `--`
- Bitwise AND: `&`
- Bitwise OR: `|`
- Bitwise XOR: `^`
- Bitwise NOT: `~`
- Left shift: `<<`
- Right shift: `>>`

...and more!

Here's an example of some integer operations:

```c
int a = 10;
int b = 3;
int sum = a + b;          // sum is 13
int difference = a - b;   // difference is 7
int product = a * b;      // product is 30
int quotient = a / b;     // quotient is 3
int remainder = a % b;    // remainder is 1
a++;                       // a is now 11
b--;                       // b is now 2
int andResult = a & b;    // andResult is 2
int orResult = a | b;     // orResult is 11
int xorResult = a ^ b;    // xorResult is 9
int notResult = ~a;       // notResult is -12
int leftShift = a << 1;   // leftShift is 22
int rightShift = a >> 1;  // rightShift is 5
```

