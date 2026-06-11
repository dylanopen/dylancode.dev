# Class declaration

In C#, we can *declare* a class using the `class` keyword followed by the
class name - and a pair of curly braces `{}` that contain the class members.

```csharp
class ClassName
{
    // Class members go here
}
```

## Example

This code declares a class named `Person` with two [[fields]]: `name` and `age`.

```csharp
class Person
{
    public string name;
    public int age;
}
```

This is a class which we can [[object instantiation|instantiate objects]]
from.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| How do you declare a class in C#? | Using the `class` keyword followed by the class name and curly braces `{}` containing class members. |
| What is the syntax for declaring a class in C#? | `class ClassName { // Class members }` |
| In the example, what class is declared? | A class named `Person`. |
| What members does the `Person` class example contain? | Two [[fields]]: `name` (type `string`) and `age` (type `int`). |
| What access modifier is used for the `name` and `age` fields in the example? | `public`. |
| What can you create from a class like `Person`? | [[object instantiation|Instantiate objects]]. |

