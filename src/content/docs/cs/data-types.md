---
title: Data types
---

To understand data types, you need to understand that there are two 'types' of
programming languages:
- statically typed languages
- dynamically typed languages

## What are dynamically typed languages?

Dynamically typed languages **don't** require you to give a variable a data type
when you create it. Instead, types don't really exist and the language just
figures out how best to store the variable based on the value you give it.

An example of a dynamically typed language is Python. We can give any variable
data of any type:

```python
x = 5          # x is an integer
x = "hello"    # now x is a string
```

## What are statically typed languages?

Statically typed languages (such as C#) **do** require you to give a variable a
data type when you create it. This means that the variable can only hold data of
that type.

For example, in C# we can create an integer variable like this:

```csharp
int x = 5; // x is an integer
```

If we try to give `x` a string value later on, we'll get an error:

```csharp
x = "hello"; // Error: cannot convert string to int
```

## Common data types

These are some important data types that we'll cover in future chapters!

| Data Type | Description                           | Example Values         |
|-----------|---------------------------------------|------------------------|
| int       | Integer (whole) numbers               | 1, -5, 42              |
| float     | Floating-point (decimal) numbers      | 3.14, -0.001, 2.0      |
| string    | Textual data                          | "hello world", "123"   |
| bool      | Boolean values (true or false)        | true, false            |
| char      | Single character                      | 'a', 'Z', '1'          | 
| array     | Collection of values of the same type | [1, 2, 3], ["a", "b"]  |
| object    | Complex data structure                | {name: "Bob", age: 30} |
| null      | Represents no value                   | `null` (only state)    |

