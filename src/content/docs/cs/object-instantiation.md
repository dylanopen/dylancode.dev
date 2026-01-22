---
title: Object instantiation
---

When we *instantiate* a class, we create an *object* from that class. An
object is basically a specific instance of the class with its own set of
data.

## Syntax

To instantiate a class, use the `new` keyword, then the class name, followed
by the parentheses `()`.

```csharp
ClassName objectName = new ClassName();
```

## Example

Given the `Person` class declared in the
[last article](/cs/class-declaration) as:

```csharp
class Person
{
    public string name;
    public int age;
}
```

...we can instantiate an object of the `Person` class like this:

```csharp
Person person1 = new Person();
```

`person1` is an object of type `Person`. 

We can access the *fields* of the `person1` object - see
[fields](/cs/fields) - and assign values to them.

