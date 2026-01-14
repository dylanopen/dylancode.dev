---
title: Chars
---

A `char` is a data type in C# which represents a single 16-bit Unicode
character.  
Essentially, it stores a single character, such as a letter, digit, or symbol.

## Examples of chars

- `'A'`
- `'2'`
- `'$'`
- `'\n'` (newline character)

## Declaring and initializing chars

You can declare and initialize a `char` variable using single quotes:

```csharp
char letter = 'A';
char digit = '5';
char symbol = '#';
```

## Char operations

Chars are really just a number under-the-hood, so you can do any normal maths
operations on them:

```csharp
char letterA = 'A'; // Unicode value 65
char letterB = 'B'; // Unicode value 66
int difference = letterB - letterA; // difference is 1
```

or:

```csharp
char letter = 'F';
char lowercaseLetter = (char)(letter + 32); // 'f'
```

