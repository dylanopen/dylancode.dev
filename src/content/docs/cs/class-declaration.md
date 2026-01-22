---
title: Class declaration
---

In C#, we can *declare* a class using the `class` keyword followed by the
class name - and a pair of curly braces `{}` that contain the class members.

```csharp
class ClassName
{
    // Class members go here
}
```

## Example

This code declares a class named `Person` with two fields: `name` and `age`.

```csharp
class Person
{
    public string name;
    public int age;
}
```

This is a class which we can [instantiate objects](/object-instantiation.md)
from.

