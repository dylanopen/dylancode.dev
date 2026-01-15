---
title: Comparison operators
---

A *comparison operator* is an operator which usually compares two values.

It then gives a *boolean* result, which we can use to make decisions in our code
(e.g. in if statements or loops).

> The key thing is that they **evaluate to a boolean value** (true or false).

## Cheatsheet

| Operator | Name               | Description                          | Example        | Result  |
|----------|--------------------|--------------------------------------|----------------|---------|
| `==`     | Equal to           | Returns `true` if both values are equal | `5 == 5`      | `true`  |
| `!=`     | Not equal to       | Returns `true` if both values are **not** equal | `5 != 3`      | `true`  |
| `>`      | Greater than       | Returns `true` if the left value is greater than the right value | `7 > 4`       | `true`  |
| `<`      | Less than          | Returns `true` if the left value is less than the right value | `2 < 5`       | `true`  |
| `>=`     | Greater than or equal to | Returns `true` if the left value is greater than or equal to the right value | `6 >= 6`     | `true`  |
| `<=`     | Less than or equal to    | Returns `true` if the left value is less than or equal to the right value | `3 <= 4`     | `true`  |

## Equal to (`==`)

The equal to operator (`==`) checks if two values are the same.
- If they are the same, it returns `true`.
- If they are different, it returns `false`.

```cs
int a = 5;
int b = 3;
bool result = (a == b); // true
```

Because the value of `a` (5) is not equal to the value of `b` (3), the
comparison will evaluate to `false`.

## Not equal to (`!=`)

The not equal to operator (`!=`) checks if two values are different.
- If they are the same, it returns `false`.
- If they are different, it returns `true`.

```cs
int a = 5;
int b = 3;
bool result = (a != b); // true
```

Because the value of `a` (5) is different from the value of `b` (3), the
comparison will evaluate to `true`.

## Greater than (`>`)

The greater than operator (`>`) checks if the value on the left is larger
than the value on the right.
- If the left value is smaller or equal, it returns `false`.
- If the left value is larger, it returns `true`.

```cs
int a = 7;
int b = 4;
bool result = (a > b); // true
```

Because the value of `a` (7) is larger than the value of `b` (4), the
comparison will evaluate to `true`.

## Less than (`<`)

The less than operator (`<`) checks if the value on the left is smaller
than the value on the right.
- If the left value is smaller, it returns `true`.
- If the left value is larger or equal, it returns `false`.

```cs
int a = 2;
int b = 5;
bool result = (a < b); // true
```

Because the value of `a` (2) is smaller than the value of `b` (5), the
comparison will evaluate to `true`.

## Greater than or equal to (`>=`)

This operator (`>=`) checks if the value on the left is larger than or equal to
the value on the right.
- If the left value is larger or equal, it returns `true`.
- If the left value is smaller, it returns `false`.

```cs
int a = 6;
int b = 6;
bool result = (a >= b); // true
```

Because the value of `a` (6) is equal to the value of `b` (6), the
comparison will evaluate to `true`.

```cs
int a = 8;
int b = 5;
bool result = (a >= b); // true
```

Because the value of `a` (8) is larger than the value of `b` (5), the
comparison will evaluate to `true`.

## Less than or equal to (`<=`)

This operator (`<=`) checks if the value on the left is smaller than or equal to
the value on the right.
- If the left value is smaller or equal, it returns `true`.
- If the left value is larger, it returns `false`.

```cs
int a = 4;
int b = 4;
bool result = (a <= b); // true
```

Because the value of `a` (4) is equal to the value of `b` (4), the
comparison will evaluate to `true`.

```cs
int a = 7;
int b = 5;
bool result = (a <= b); // false
```

Because the value of `a` (7) is larger than the value of `b` (5), the
comparison will evaluate to `false`.

