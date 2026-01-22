---
title: Fields
---

Any *useful* class contains *fields* - variables that hold data relevant to
the class.

For example, in the `Person` class declared in a
[recent article](/cs/class-declaration), we have two fields: `name` and
`age`.

```csharp
class Person
{
    public string name;
    public int age;
}
```

## Defining a field

Inside of a class, we define a field by specifying its *access modifier*
(like `public`), its *data type* (like `string` or `int`), and its *name*
(like `name` or `age`).

Use this syntax on any line inside the class body:

```csharp
access_modifier data_type field_name;
```

For example, to define a field named `height` of type `float` with `private`
access, we would write:

```csharp
public float height;
```

## Access modifiers

An *access modifier* tells us who can access a field of a class.

There are a few common access modifiers in C#:

| Access Modifier | Description                                      |
|-----------------|--------------------------------------------------|
| `public`        | The field can be accessed from anywhere.         |
| `private`       | The field can only be accessed within the class. |
| `protected`     | The field can be accessed within the class and by *inheriting* classes. |
| `internal`      | The field can be accessed within the same assembly. |

If there are no access modifiers on it, the field is `private` by default.

## Example

Let's say we created a `Car` class with fields for `make`, `price`, and
`year`.

```csharp
class Car
{
    public string make;
    private float price;
    public int year;
}
```

> Because we're a car-salesman, we want to keep the `price` field private
> so that only the `Car` class can access it - that way, we can charge
> whatever we like ;)

If we're outside of the `Car` class, say, in `Main`, we can access the
`make` and `year` fields, but not the `price` field:

```csharp
Car myCar = new Car();
myCar.make = "Toyota"; // OK
myCar.year = 2015;     // OK
myCar.price = 6849.99; // Errors!
```

That's because `make` and `year` are `public`, while `price` is `private`.

If however we're in a method inside the `Car` class, we can access all three
fields.

