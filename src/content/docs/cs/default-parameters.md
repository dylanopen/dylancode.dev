---
title: Default arguments
---

In C#, you can define methods with *default parameters*. This means that when
you call the method, you can choose to omit some arguments, and the method will
use the default values you specified instead.

In more simple terms - we don't need to provide values for all parameters when
calling a method if some of them have default values.

## Syntax

You can specify default values for parameters in the method definition by using
the `=` operator followed by the default value. For example:

```cs
static void Greet(string name = "Guest", string greeting = "Hello")
{
    Console.WriteLine(greeting + ", " + name + "!");
}
```

Now, we can call the `Greet` method in several ways:

```cs
Greet("Alice", "Hi"); // the normal way
Greet("Bob");         // uses default greeting
Greet();              // uses default name and greeting
```

The output of the above calls will be:

```
Hi, Alice!
Hello, Bob!
Hello, Guest!
```

## Default arguments before specified arguments

In the example above, we can't easily call `Greet` with a custom greeting but
the default name. That's because C# will assume we're providing the first
argument of type string, which is `name`.

To work around this, we can use *named arguments* to specify which parameter we
want to provide a value for:

```cs
Greet(greeting: "Welcome");
// default name, custom greeting
```

This will output:

```
Welcome, Guest!
```

