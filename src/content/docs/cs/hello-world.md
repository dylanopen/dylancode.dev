---
title: Hello world
---

## The code

```cs
using System;
namespace HelloWorld
{
    public class Hello
    {
        public static void Main(String[] args)
        {
	        Console.WriteLine("Hello, World!");
        }
    }
}
```

## Output

```
Hello, World!
```

## How it works

### `namespace HelloWorld`

- A namespace is a way to organize code and avoid name conflicts.
- Essentially, it's a container for classes and other types.
- Here, we define a namespace called `HelloWorld` to contain our program.

### `{}`

- Curly braces `{}` are used to define the beginning and end of code blocks.
- In short, we put them after we define a namespace, class, function, if
  statement, or any other code structure.
- Everything inside of them is *part of* that structure. In this case,
  everything between the `{}` after `namespace HelloWorld` is part of that
  namespace.

### `public class Hello`

- A class is a *blueprint* for creating objects.
- For now, just think of it as a way to group related code together.
- We define a class named `Hello` to hold our program's `Main` method.

### `public static void Main(String[] args)`

- Here, we *define* (create) a method named `Main`.
- A method is a block of code that performs a specific task. It's essentially
  the same as a function, just that it belongs to a class.
- `public` means that this method can be accessed from outside the class.
- `static` means that this method belongs to the class itself, rather than to
  instances of the class. Basically, we can call it using `Hello.Main()` without
  having to create an object of type `Hello` first.
- `void` says that this method does not return any value.
- `String[] args` is a parameter that allows the program to accept command-line
  arguments. Here, `args` is an array of strings. We'll get onto function
  parameters, strings and arrays later on.

#### What's special about `Main`?

- The `Main` method is the *entry point* of a C# program.
- Basically, it's the first thing that runs when you start the program.
- Every C# program must have a `Main` method to run.

### `Console.WriteLine("Hello, World!");`

- This line of code prints the text "Hello, World!" to the console (the
  command line interface).
- `Console` is a built-in class in C# that contains *methods* for working with
  the console (terminal window).
- `WriteLine` is a method of the `Console` class that outputs text to the
  console, followed by a new line.
- The text to be printed is passed as an argument to the `WriteLine` method.
- The double quotes `"` around `Hello, World!` tell C# that it's a *string
  literal* (text).
- The semicolon `;` at the end of the line indicates the end of a statement. We
  need to put a semicolon at the end of every ***statement*** in C#.

### I don't understand...

- Don't worry if you don't fully understand the explanation of the code!
- We will cover all the concepts in detail in other pages.

## The base for all examples

This hello world program is essentially the base for which all other examples in
this tutorial build upon. Whenever you see code examples, you can assume that
the code is inside the `Main` method of the `Hello` class in the `HelloWorld`
namespace.

```cs
using System;
namespace HelloWorld
{
    public class Hello
    {
        public static void Main(String[] args)
        {
            // Any code examples go here unless
            // explicitly stated otherwise.
        }
    }
}
```

You are welcome to rename the class and namespace to whatever you like, as long
as you keep the `Main` method as it is.

For example, if an example states this code:

```cs
int result = 5 + 3;
Console.WriteLine(result);
```

You can assume that the full code looks like this:

```cs
using System;
namespace HelloWorld
{
    public class Hello
    {
        public static void Main(String[] args)
        {
            int result = 5 + 3;
            Console.WriteLine(result);
        }
    }
}
```

