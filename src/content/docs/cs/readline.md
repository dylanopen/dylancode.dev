---
title: Console.ReadLine
---

C# has a built-in method for reading input from the user via the console: `Console.ReadLine`.

Technically, the method name is `ReadLine`, and it is part of the `Console`
class. If you get an error about an unresolved reference to `Console`, make sure
you have the following at the top of your file:

```cs
using System;
```

The `Console.ReadLine` method reads a line of text from the console until the
user presses the Enter key. It then returns that line of text as a string.

For example, the following code prompts the user to enter their name, reads the
input using `Console.ReadLine`, and then greets the user by name:

```cs
using System;
class Program
{
    static void Main()
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine("Hello, " + name + "!");
    }
}
```

When you run this program, it will wait for the user to type their name and
press Enter. After that, it will display a greeting message.

Example output:

```
Enter your name: John
Hello, John!
```

## A simpler example

If you want to see a simpler example, here it is:

```cs
string input = Console.ReadLine();
Console.WriteLine("You entered: " + input);
```

This code reads a line of input from the user and then prints it back to the
console.

Example output:

```
Hello, World!
You entered: Hello, World!
```

## `Console.ReadLine` return value

It's important to note that `Console.ReadLine` returns a string - always.

If you need to convert the input to another data type (like an integer or a
float), you'll need to use methods to parse the string into the desired type!

For example:

```cs
Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = int.Parse(input);
int nextYearAge = age + 1;
Console.WriteLine("You will be " + nextYearAge + " years old next year.");
```

