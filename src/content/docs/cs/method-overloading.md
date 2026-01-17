---
title: Method overloading
---

Let's say we have a method that adds two numbers together:

```cs
static int Add(int a, int b)
{
    return a + b;
}
```

This method works great for adding two integers. But what if we want to add two
float numbers instead? We could create a new method with a different name,
like `AddFloats`, but that would be less intuitive for users of our code.

Instead, we can use *method overloading* to define multiple methods with the
same name but different parameter types or counts!

The compiler will choose the correct method to call based on the arguments we
provide.

## The `Add` example

Have a look at this code:

```cs
static int Add(int a, int b)
{
    return a + b;
}
static float Add(float a, float b)
{
    return a + b;
}
```

We're defining the `Add` method twice. Normally, this would cause a compilation
error, but because the parameter types are different (one takes `int`s and the
other takes `float`s), the compiler can distinguish between them.

Now, when we call `Add`, the compiler will pick the right method based on the
argument types:

```cs
int sumInt = Add(3, 5);           // Calls the int version
float sumFloat = Add(2.5f, 4.5f); // Calls the float version
```

## Distinguishing by return type

> It's important to note that the compiler *cannot* distinguish between methods
> that differ only by their return type.  
> For example, the following code would cause a compilation error:

```cs
static int Add(int a, int b)
{
    return a + b;
}
static float Add(int a, int b) // This will cause a compilation error!
{
    return float(a + b);
}
```

This will give this error:

```
Type 'ClassName' already defines a member called 'Add' with the same parameter types
```

