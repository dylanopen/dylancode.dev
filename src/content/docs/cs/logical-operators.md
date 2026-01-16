---
title: Logical operators
---

A *logical operator* is an operator that combines multiple boolean values
(tests that evaluate to `true` or `false`) into a single boolean value.

> The key thing is that they **work with boolean values** (true or false)
> and produce another boolean value as a result.

We can logically think of this as:
- If `true AND true` the the result is `true`
- If `true OR false` the the result is `false`
- If `NOT true` the result is `false`
- etc.

## Cheatsheet

| Operator | Name        | Returns | Example            | Result  |
|----------|-------------|--------------------------------------------------|--------------------|---------|
| `&&`     | Logical AND | `true` if **both** are `true`       | `true && false`    | `false` |
| `\|\|`     | Logical OR  | `true` if **at least one** is `true` | `true \|\| false`    | `true`  |
| `!`      | Logical NOT | **opposite** of the value              | `!true`          | `false` |

## Logical AND (`&&`)

The logical AND operator returns:
- `true` if **both** values are `true`
- `false` if **at least one** value is `false`

We can write this as a truth table:

| A     | B     | A && B |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | false   |
| false | true  | false   |
| false | false | false   |

An example of using the logical AND operator in C# is:

```cs
bool isLoggedIn = true;
bool isAdmin = false;
bool canAccess = isLoggedIn && isAdmin; // false
```

Or, for an example which returns **true**:

```cs
int age = 20;
bool hasLicence = true;
bool hasCar = true;
bool isOldEnough = age >= 17;
bool canDrive = hasLicence && hasCar && isOldEnough; // true
```

> This also shows an example of *chainingg* multiple logical operators together.

## Logical OR (`||`)

The logical OR operator returns:
- `true` if **at least one** value is `true`
- `false` if **both** values are `false`

We can write this as a truth table:

| A     | B     | A \|\| B |
|-------|-------|-----------|
| true  | true  | true      |
| true  | false | true      |
| false | true  | true      |
| false | false | false     |

In other words, the only time it returns `false` is when **both** values are
`false`.

An example of using the logical OR operator in C#:

```cs
bool isWeekend = false;
bool isHoliday = true;
bool canRelax = isWeekend || isHoliday; // true
```

## Logical NOT (`!`)

The logical NOT operator returns the **opposite** of the boolean value.
- If the value is `true`, it returns `false`
- If the value is `false`, it returns `true`

We can write this as a truth table:

| A     | !A    |
|-------|-------|
| true  | false |
| false | true  |

In other words, it *inverts* the boolean value.

Here's an example:

```cs
bool isRaining = true;
bool goodTimeForAPicnic = !isRaining; // false
```

Or, another example:

```cs
bool isWeekend = false;
bool isWeekday = !isWeekend; // true
```

## Combining logical operators

Logical operators can be combined to create more complex boolean expressions.

For example:

```cs
bool isWeekend = true;
bool isHoliday = false;
bool isSunny = true;
bool canGoToBeach = (isWeekend || isHoliday) && isSunny; // true
```

Or, using the logical NOT operator:

```cs
bool isRaining = false;
bool isWindy = true;
bool isBadWeather = !(isRaining || isWindy);
```

## Operator precedence

In the last example, you might wonder why the parentheses were necessary.

That's because the logical NOT operator (`!`) has a higher precedence than the
logical AND (`&&`) and logical OR (`||`) operators, and so, without the
brackets, we would just have been negating the value of `isRaining` only.

Here's the order of precedence for logical operators (from highest to lowest):
- Logical NOT (`!`)
- Logical AND (`&&`)
- Logical OR (`||`)

The ones higher on the list will be evaluated **first**.

