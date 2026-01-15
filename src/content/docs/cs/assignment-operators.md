---
title: Assignment operators
---

*Assignment operators* are any type of operators that change the value of a
variable.

## Cheatsheet

| Operator | Description                                      | Example               | Equivalent to          |
|----------|--------------------------------------------------|-----------------------|--------------------------|
| `=`      | Sets the variable on the left to the value on the right | `x = 5;`              || N/A                      |
| `+=`    | Adds the value on the right to the variable on the left and assigns the result back to the variable | `x += 3;`              | `x = x + 3;`            |
| `-=`    | Subtracts the value on the right from the variable on the left and assigns the result back to the variable | `x -= 2;`              | `x = x - 2;`            |
| `*=`    | Multiplies the variable on the left by the value on the right and assigns the result back to the variable | `x *= 4;`              | `x = x * 4;`            |
| `/=`    | Divides the variable on the left by the value on the right and assigns the result back to the variable | `x /= 2;`              | `x = x / 2;`            |
| `%=`    | Finds the remainder when the variable on the left is divided by the value on the right and assigns the result back to the variable | `x %= 3;`              | `x = x % 3;`            |
| `++`     | Increments (adds 1 to) the variable on the left | `x++;`                 | `x = x + 1;`            |
| `--`     | Decrements (subtracts 1 from) the variable on the left | `x--;`                 | `x = x - 1;`            |

## Basic assignment operator

We've already seen one assignment operator - the `=` operator, which assigns a
value to a variable:

```cs
int myNumber = 5; // assigns the value 5 to the variable myNumber
```

We can combine it with other operators (e.g. arithmetic operators) to change the
value of a variable:

```cs
myNumber = myNumber + 3; // adds 3 to myNumber, so myNumber is now 8
```

## Addition assignment operator

Instead of doing the above of `myNumber = myNumber + 3`, we can use the
*addition assignment operator* `+=`, which adds a value to a variable and
assigns the result back to the variable:

```cs
int myNumber = 5; // assigns the value 5 to the variable myNumber
myNumber += 3; // adds 3 to myNumber, so myNumber is now 8
```

This is effectively equivalent to `myNumber = myNumber + 3`.

## Subtraction assignment operator

We can also use the *subtraction assignment operator* `-=`, which subtracts a
value from a variable and assigns the result back to the variable:

```cs
int myNumber = 10; // assigns the value 10 to the variable myNumber
myNumber -= 4; // subtracts 4 from myNumber, so myNumber is now 6
```

This is effectively equivalent to `myNumber = myNumber - 4`.

## Multiplication assignment operator

We can use the *multiplication assignment operator* `*=`, which multiplies a
variable by a value and assigns the result back to the variable:

```cs
int myNumber = 5; // assigns the value 5 to the variable myNumber
myNumber *= 3; // multiplies myNumber by 3, so myNumber is now 15
```

This is effectively equivalent to `myNumber = myNumber * 3`.

## Division assignment operator

We can use the *division assignment operator* `/=`, which divides a variable by a
value and assigns the result back to the variable:

```cs
int myNumber = 20; // assigns the value 20 to the variable myNumber
myNumber /= 4; // divides myNumber by 4, so myNumber is now 5
```

This is effectively equivalent to `myNumber = myNumber / 4`.

## Modulus assignment operator

We can use the *modulus assignment operator* `%=`, which finds the remainder
when a variable is divided by a value and assigns the result back to the variable:

```cs
int myNumber = 10; // assigns the value 10 to the variable myNumber
myNumber %= 3; // finds the remainder when myNumber is divided by 3, so myNumber is now 1
```

This is effectively equivalent to `myNumber = myNumber % 3`.

## Increment and decrement operators

We can use the *increment operator* `++` to add `1` to a variable:

```cs
int myNumber = 5; // assigns the value 5 to the variable myNumber
myNumber++; // adds 1 to myNumber, so myNumber is now 6
```

This is equivalent to both of the following:

```cs
myNumber = myNumber + 1;
myNumber += 1;
```

> It's usually faster to use `++` than the other two forms, especially in loops,
> because there's often a dedicated CPU instruction for incrementing. In
> reality though, modern compilers are very good at optimising code, so the
> performance difference is negligible in most cases.

## Decrement operator

Similarly, we can use the *decrement operator* `--` to subtract `1` from a
variable:

```cs
int myNumber = 5; // assigns the value 5 to the variable myNumber
myNumber--; // subtracts 1 from myNumber, so myNumber is now 4
```

This is equivalent to both of the following:

```cs
myNumber = myNumber - 1;
myNumber -= 1;
```

## Bitwise assignment operators

There are some operators which operate on the individual bits of integer values,
but as we've not covered bitwise manipulation yet, we won't cover the bitwise
assignment operators here, but instead, in a later chapter.

