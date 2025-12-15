---
title: Variables
---

A *variable* is a *named storage location* in memory.

Essentially, it represents a box of data.

We can use variables to store data that we want to use later in our program.  
This is useful because it allows us to reuse data without having to hard-code
it multiple times, and also allows our program to do different things based on
user input or other changing data.

## Declaring variables

When we *declare* a variable, we essentially **create** it and **state that it
exists**. It does not yet have a value (well, it does, but it's just some
random garbage value we don't want).

We do this by specifying the *type* of the variable, followed by its *name*.

```cs
type variableName;
```

For example, to declare a variable named `population` of type `int` (integer),
we would do:

```cs
int population;
```

## Initializing variables

When we *initialise* a variable, we **give it a value for the first time**.

We do this by using the *assignment operator* (`=`) to assign a value to the
variable.

```cs
variableName = value;
```

For example, to initialise the `population` variable to `1200`, we would do:

```cs
population = 1200;
```

## Shorthand declaration and initialisation

We can also declare and initialise a variable in one line, like this:

```cs
type variableName = value;
```

For example, to declare and initialise the `population` variable in one line,
we would do:

```cs
int population = 1200;
```

## Reading a variable

We can *read* the value of a variable by simply using its name in an
expression. For example, to print the value of the `population` variable to
the console, we would do:

```cs
Console.WriteLine(population);
```

Or, if we wanted to set the `int` variable called `newPopulation` to be
double the value of `population`, we would do:

```cs
int newPopulation = population * 2;
```

## Assignment

*Assignment* is just like *initialisation*, except that it happens after the
variable has already been initialised. Basically, it's changing the value of
a variable after it's already got a value.

We do this the same way as initialisation, using the assignment operator
(`=`):

```cs
variableName = newValue;
```

For example, to change the value of the `population` variable to `1500`, we
would do:

```cs
population = 1500;
```

## Variable name rules

In C#, variable names need to follow these rules:

- They must start with a letter (A-Z, a-z) or an underscore (_).
- They can only contain letters, digits (0-9), and underscores (_) (no special
  characters or spaces).
- They can't be called the same thing as an existing C# keyword (like `for`,
  `class`, `if`, etc.).
- They are case-sensitive (so `myVariable` and `MyVariable` are different
  variables).

## Variable name conventions

C# has some strange naming conventions compared to other languages, but here's
a (mostly) comprehensive list of them:

- Use *camelCase* for local variables and function/method parameters (e.g.,
  `myVariable`).
- Use *PascalCase* for fields/properties and methods (e.g., `MyProperty`,
  `CalculateSum()`).
- Use *PascalCase* for type names (classes, structs, enums, etc.) (e.g.,
  `MyClass`, `UserProfile`).
- Don't use underscores in names.
- Constants should use *PascalCase* (e.g., `MaxValue`).

