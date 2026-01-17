---
title: Method declaration
---

When we *declare* a method, we *create* the method.

But... what is a method?

## Methods

A *method* is simply a named block of code that performs a specific task.

For example, we might have a method that adds two numbers together (pseudocode):

```
method AddNumbers(number a, number b)
{
    return a + b
}
``` 

The important thing that distinguishes a method from a *function* you may see in
other programming languages is that a method is always associated with a class
or an object.

That means that methods are defined *inside* classes.

## Method declaration syntax

Since the `Hello World` chapter, we've started off from this assumed code 
structure:

```cs
using System;
class Program
{
    static void Main()
    {
        // CODE HERE
    }
}
```

Now, however, instead of adding *all* our code where the `CODE HERE` comment is,
we can start to create *other methods* than just `Main`.

To declare a method, we use this syntax:

```cs
accessModifier [static] returnType MethodName(parameterList)
{
    // Method body (code to be executed)
}
```

That looks a little complicated, so let's break it down piece by piece.

## Access modifier

An *access modifier* specifies who can call the method.

There are a few different types, with the main 3 being:
- `public`: The method can be called from anywhere.
- `private`: The method can only be called from within the same class.
- `protected`: The method can be called from within the same class and from
  derived classes (inheritance).

## Static keyword

We can optionally use the `static` keyword to indicate that the method belongs
to the class itself, rather than to instances of the class.

What's the difference?

- A **class** is just a blueprint for creating objects. It doesn't have a
  specific state - so any method that is `static` can be called without creating
  an instance of the class (object).
- An **instance** of a class (object) has its own state (data). Non-static
  methods can access and change this state, but they need to be called on an
  instance of the class to be called.

We then can call these methods like this:
- Static method: `ClassName.MethodName()`
- Non-static method: `object.MethodName()`

## Return type

The *return type* is just a regular [data type](/cs/data-types).

It specifies what type of value the method will return when it is called.

Methods *return* values so that the function which *called* the method can use
that value for whatever it needs to.

If a method does not return any value, we use the `void` keyword as the return
type. That just means 'returns nothing'.

## Parameter list

The parameter list looks like this:

```cs
(type1 param1, type2 param2, ...)
```

For example, if we had a method that takes two integers as parameters, the
parameter list would look like this:

```
cs(int a, int b)
```

`a` and `b` can be called anything you like. They're essentially just variables
which can be used in that method.

When we call the method, we need to provide values (arguments) for each of the
parameters. These get 'mapped' to the parameter names in the order they are
passed in.

## Method body

The *method body* is just the block of code inside the curly braces `{}`.

Anything in here will run when we call the method.

## Example method declaration

To create a method which adds two numbers together and returns the result, we
could write:

```cs
public static int AddNumbers(int a, int b)
{
    return a + b;
}
```

If we wanted to call this method from the `Main` method, we could do:

```cs
using System;
class Program
{
    public static int AddNumbers(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        int sum = AddNumbers(5, 10);
        Console.WriteLine(sum); // Output: 15
    }
}
```

We'll go over how to call methods in the next chapter!

