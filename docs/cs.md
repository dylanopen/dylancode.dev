# C# programming

- [[cs/hello world]]
- [[cs/comments]]
- [[cs/variables]]
- [[Data types]]
    - [[cs/data types]]
    - [[cs/integers]]
    - [[cs/floats]]
    - [[cs/chars]]
    - [[cs/boolean]]
    - [[cs/type casting]]
- [[Operators]]
    - [[cs/arithmetic operators]]
    - [[cs/division]]
    - [[cs/modulus]]
    - [[cs/assignment operators]]
    - [[cs/comparison operators]]
    - [[cs/logical operators]]
- [[Selection]]
    - [[cs/if statements]]
    - [[cs/else if statements]]
    - [[cs/else statements]]
- [[Iteration]]
    - [[cs/loops]]
    - [[cs/while loops]]
    - [[cs/for loops]]
    - [[cs/break statements]]
    - [[cs/continue statements]]
- [[Arrays]]
    - [[cs/creating arrays]]
    - [[cs/indexing arrays]]
    - [[cs/iterating arrays]]
    - [[cs/foreach loops]]
- [[Methods]]
    - [[cs/method declaration]]
    - [[cs/method calling]]
    - [[cs/named method arguments]]
    - [[cs/default parameters]]
    - [[cs/method overloading]]
- [[User input]]
    - [[cs/readline]]
- [[Classes]]
    - [[cs/classes]]
    - [[cs/class declaration]]
    - [[cs/object instantiation]]
    - [[cs/fields]]
    - [[cs/class methods]]

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the starting point for a C# console application? | The `Main` method. |
| How do you write a single-line comment in C#? | `// comment text` |
| How do you declare a variable that stores whole numbers? | `int variableName;` |
| What data type stores a single character? | `char` |
| What data type stores a boolean value? | `bool` |
| What is implicit type conversion? | Automatic conversion between compatible types, e.g. `int` to `double`. |
| Which operator performs integer division in C# if both operands are integers? | The `/` operator (truncates the decimal part). |
| Which operator returns the remainder of a division? | The `%` operator. |
| Which operator assigns the value of the right operand to the left variable? | `=` (assignment operator). |
| Which operator checks if two values are equal? | `==` |
| Which logical operator returns `true` only if both conditions are true? | `&&` |
| What structure executes code only if a condition is true? | `if (condition) { code }` |
| How do you check multiple conditions in sequence? | Use `else if` after an `if`. |
| What keyword handles the case when no prior condition is true? | `else` |
| What type of loop repeats code while a condition is true? | A `while` loop. |
| What loop structure is best for iterating a known number of times? | A `for` loop. |
| What statement immediately exits the current loop? | `break;` |
| What statement skips the rest of the current iteration and moves to the next loop cycle? | `continue;` |
| How do you declare an array of 5 integers? | `int[] myArray = new int[5];` |
| What is the index of the first element in a C# array? | `0` |
| How do you iterate over all elements of an array named `arr` using a for loop? | `for (int i = 0; i < arr.Length; i++)` |
| What loop is designed to iterate over each element in a collection? | `foreach` |
| What are the three parts of a method signature? | Return type, method name, and parameters. |
| How do you call a method named `CalculateSum` that takes no arguments? | `CalculateSum();` |
| How do you pass arguments to a method using named parameters? | `MethodName(parameterName: value);` |
| How do you define a default value for a method parameter? | `void Method(int x = 5)` |
| What is method overloading? | Defining multiple methods with the same name but different parameter lists. |
| Which method reads a line of text from the console? | `Console.ReadLine();` |
| What keyword is used to define a class? | `class` |
| How do you create an object (instance) of a class named `Car`? | `new Car();` |
| What are variables declared inside a class but outside any method called? | Fields (or instance variables). |
| Can a method belonging to a class access its own fields directly? | Yes, without needing any qualifier (if no ambiguity). |

