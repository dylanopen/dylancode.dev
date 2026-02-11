---
title: Class methods
---

As previously mentioned, classes can store two different things:
- [fields](/cs/fields) - variables that hold data relevant to the class.
- *methods* - functions that are *attached* to the class and can operate on
  its data.

## Defining a method

You've already defined a method in a class, since the first
[hello world program](/cs/hello-world) you wrote was actually a method named
`Main` inside a class named `Program`.

This wasn't quite a regular class method, though - it was a *static method*.

## Static methods

A *static method* is not tied to a specific object of the class. Instead, it
belongs to the class itself.

That means that it can be called without creating an object of the class:

```csharp
ClassName.StaticMethodName();
```

...instead of:

```csharp
ClassName objectName = new ClassName();
objectName.InstanceMethodName();
```

### When to use a static method

We should use a static method whenever the function *doesn't need to* access any
data from a specific object of the class - or when it operates on data that is
shared across **the entire program** - `static` fields.

## Method syntax

Just like we covered in the [methods](/cs/methods) article, we define a method
inside a class using this syntax:

```csharp
access_modifier return_type MethodName(parameter_list)
{
    // Method body goes here
}
```

> We can optionally add the `static` keyword after the access modifier to make
> the method static.

### Example

Take our program from before about the `Car` class with fields for `make`,
`price` and `year`:

```csharp
class Car
{
    public string make;
    public float price;
    public int year;
}
```

Let's say we added a method to print the car's details:

```csharp
class Car
{
    public string make;
    public float price;
    public int year;

    public void PrintDetails()
    {
        Console.WriteLine($"Make: {make}, Price: {price}, Year: {year}");
    }
}
```

We can then call `PrintDetails` on any object of the `Car` class to print its details:

```csharp
Car myCar = new Car();
myCar.make = "Toyota";
myCar.price = 25000;
myCar.year = 2020;
myCar.PrintDetails();

Car anotherCar = new Car();
anotherCar.make = "Honda";
anotherCar.price = 22000;
anotherCar.year = 2019;
anotherCar.PrintDetails();
```

This would output:

```
Make: Toyota, Price: 25000, Year: 2020
Make: Honda, Price: 22000, Year: 2019
```

## Static method example

Let's say we have a class named `MathUtilities` that contains a static method to
calculate the square of a number:

```csharp
class MathUtilities
{
    public static int Square(int number)
    {
        return number * number;
    }
}
```

We can call the `Square` method without creating an object of the
`MathUtilities` class:

```csharp
int result = MathUtilities.Square(5);
Console.WriteLine(result); // Outputs: 25
```

> This is a good use for a static method, because it doesn't need to access any
> instance-specific data - it just performs a calculation based on the input
> parameter.

