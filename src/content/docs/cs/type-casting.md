---
title: Type casting
---

*Type casting* is done whenever we have a value/variable of one 
[data type](/cs/data-types), and we want to convert it to another data type.

## Types of type casting

There are two main types of type casting:
- **Explicit** casting
- **Implicit** casting

## Explicit casting

Explicit casting is when we manually convert a value from one data type to
another.

We use the `(type)` syntax to cast the value to the type we want.

For example, if we have a `float` variable and we want to convert it to an
`int`, we can do:

```cs
float myFloat = 5.7f;
int myInt = (int)myFloat; // myInt is now 5
```

## Implicit casting

Implicit casting is when the compiler automatically converts a value from one
data type to another, based on the context.

For example, here, the compiler will automatically convert the `int` to a
`double`:

```cs
int myInt = 5;
double myDouble = myInt; // myDouble is now 5.0
```

> This only works when converting from a 'smaller' type to a 'larger' type (for
> example, from `short` to `int` or from `int` to `float`).  
> The compiler can do this without us explicitly telling it to, because there is
> no risk of losing data or the output not being what you'd expect.

## When do we need explicit casting?

Note that when we cast a `float` to an `int`, for example, the decimal part is
truncated (not rounded). Essentially, we 'chop off' the decimal part.  

> For example, `5.7` becomes `5`, and `-2.9` becomes `-2`.  

Because we have a *loss of data* (the decimal part), we need to explicitly cast
the value to an `int`, otherwise we'll get this error:

```
Cannot implicitly convert type 'double' to 'int'.
An explicit conversion exists (are you missing a cast?)
```

There are also other type conversions where an explicit cast is needed.
  
## Type conversion methods

C# has a `Convert` class which has methods to convert between different data
types. This is strange if you come from other programming languages, which often
choose to create methods on the data types themselves (for example,
`myInt.ToString()` or `String.from(myInt)`).

Here are some common uses of the `Convert` class:

```cs
Convert.ToInt32   // to Int32 (int)
Convert.ToInt64   // to Int64 (long)
Convert.ToSingle  // to Single (float)
Convert.ToDouble  // to Double (double)
Convert.ToString  // to String (string)
Convert.ToBoolean // to Boolean (bool)
Convert.ToChar    // to Char (char)
```

### Convert.ToInt32 examples

```cs
int fromFloat = Convert.ToInt32(5.7f);      // 6
int fromDouble = Convert.ToInt32(5.3);       // 5
int fromString = Convert.ToInt32("42");      // 42
int fromBoolTrue = Convert.ToInt32(true);     // 1
int fromBoolFalse = Convert.ToInt32(false);   // 0
```

### Convert.ToInt64 examples

```cs
long fromFloat = Convert.ToInt64(8e13f);    // 80000000000000
long fromDouble = Convert.ToInt64(9.99e12);  // 9990000000000
long fromString = Convert.ToInt64("1234567890123"); // 1234567890123
```

### Convert.ToSingle examples

```cs
float fromInt = Convert.ToSingle(42);         // 42.0f
float fromDouble = Convert.ToSingle(3.14159);  // 3.14159f
float fromString = Convert.ToSingle("2.71828"); // 2.71828f
```

### Convert.ToDouble examples

```cs
double fromInt = Convert.ToDouble(42);         // 42.0
double fromFloat = Convert.ToDouble(3.14f);     // 3.14
double fromString = Convert.ToDouble("2.71828"); // 2.71828
```

### Convert.ToString examples

```cs
string fromInt = Convert.ToString(42);          // "42"
string fromFloat = Convert.ToString(3.14f);      // "3.14"
string fromDouble = Convert.ToString(2.71828);   // "2.71828"
string fromBool = Convert.ToString(true);        // "True"
```

### Convert.ToBoolean examples

```cs
bool fromIntZero = Convert.ToBoolean(0);        // false
bool fromIntNonZero = Convert.ToBoolean(-42);    // true
bool fromStringTrue = Convert.ToBoolean("True");  // true
bool fromStringFalse = Convert.ToBoolean("False"); // false
```

### Convert.ToChar examples

```cs
char fromInt = Convert.ToChar(65);          // 'A'
char fromString = Convert.ToChar("Z");      // 'Z'
```

## When to use which method of casting?

- Use **implicit casting** when converting from a smaller type to a larger type
  (for example, from `int` to `float`).
- Use **explicit casting** when converting from a larger type to a smaller type
  (for example, from `float` to `int`).
- Use the **Convert class** methods when converting between types that are not
  directly compatible (for example, from `string` to `int` or from `bool` to
  `int`). They're usually 'directly compatible' if they both represent numeric
  types under the hood (e.g. from `int` to `char`).

