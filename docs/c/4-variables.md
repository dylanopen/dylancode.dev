---
sidebar_position: 4
---

# Variables

> Learn how to create, set and read variables (changable values) in C

## Base code

For every C program, we need to define the `main` function. We'll start off this
chapter from this code:

```c
int main(int argc, char* argv[]) {
    // we'll write our new code here
}
```

## Declaring a variable

Variable *declaration* is where we *create* a variable. We don't necessarily
give it a value yet - that's ***assignment***.

The syntax in C for declaring a variable is:

```c
type variableName;
```

There are various different data types we can use - they will all be discussed
in a later chapter! One of them is the `int`, for a signed integer. We can 
declare an integer variable called, for example, `numPages` like this:

```c
int numPages;
```

> If we try to access a variable that has been declared but not initialised or
  assigned, then we may get garbage data.

## Assigning a variable

Once we've declared a variable, we can give it a value through *assignment*.

For example, take the `numPages` example from above. We can give `numPages` a
value of `382` using this code:

```c
int numPages;
numPages = 382;
```

We can also assign a variable even after it has already been assigned before,
because the variable is **mutable**:

```c
int numPages;
numPages = 382;
// do something with numPages
numPages = 395; // maybe the author added some pages?
```








