---
title: Method calling
---

To call a method on an object in C#, we use this syntax:

```cs
returnType value = object.MethodName(arguments);
```

Or, if it's a static method belonging to a class, we use:

```cs
returnType value = ClassName.MethodName(arguments);
```

We don't have to store the return value in a variable; we can call the method
without capturing its return value:

```cs
object.MethodName(arguments);
ClassName.MethodName(arguments);
```

## Our example from before

In the last chapter, we created this function:

```cs
public static int AddNumbers(int a, int b)
{
    return a + b;
}
```

The full code looked like this:

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

Let's focus on this line:

```cs
int sum = AddNumbers(5, 10);
```

- `AddNumbers` is the name of the method we defined earlier.
- We call it by writing its name followed by parentheses `()`.
- Inside the parentheses, we can provide the arguments `5` and `10`, which
  correspond to the parameters `a` and `b` in the method definition.
- The method returns the sum of `a` and `b`, which is `15` in this case.
- We store the returned value in the variable `sum`, which has the type `int`.

When we run this program, it will output `15` to the console. That's because the
`AddNumbers` method returned `15`, which was stored in `sum` and then printed.

