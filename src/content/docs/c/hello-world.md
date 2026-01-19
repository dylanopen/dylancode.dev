---
title: Hello World
---

> Learn the basic syntax and print text to the console.

*It is important to note that this page is extremely detailed as I explain every
single part of a hello world program in-depth. If you do not understand
everything yet, don't worry - we will be going over each of the concepts in more
detail in future chapters.*

## The code

In your `main.c` file you created in the last chapter, add the following code:

```c
#include <stdio.h>
int main(int argc, char* argv[]) {
    printf("Hello, World!");
    return 0;
}
```

When we run the code (we'll learn how to do this in the next chapter) we will
get the following output printed to the console:

```
Hello, World!
```

## The `#include` statement in C

Consider this snippet of code:

```c
#include <stdio.h>
```

Most programming languages have a way of *importing code*. This allows us to use
some of the code from other files, often known as *modules*, in our code,
allowing for code re-use.

In our case: why would we write the implementation for printing to the console
manually, when the standard library already provides it for us?

We can import files in C using the `#include` statement. Interestingly, unlike
most other programming languages, this code is *identical* to if we had written
out the code for the `stdio` library manually. `#include <stdio.h>` is simply
replaced with the code contained in `stdio.h`, which, in turn, allows us to use
its functions.

> The `#include` statement is executed by a program known as the
  *preprocessor*.  
> This program is executed *before* the compiler reads the code, and it is the
  first step towards turning source code into machine code.  
> *All statements in C which start with a `#` are preprocessor **directives***.

### The difference between `#include <file.h>` and `#include "file.h"`

When you're looking at C tutorials, you might find that in some cases, angle
brackets are used around the file included, while other times, quotes (speech
marks) are used instead. What's the difference?

- **Angle brackets** tell the preprocessor to look for the header file *in the
  system path for C libraries*. On Linux, for example, the first place it looks
  is usually the `/usr/include/` directory.
- **Quotes** tell the preprocessor to look for the header file *relative to the
  current directory*. For example, if we have 2 files: `main.c` and `lib.h`, we
  use `#include "lib.h"` instead of `#include <lib.h>`, because `lib.h` is a
  header *in the current directory* (i.e. project-specific).

## The main function

Let's now look at this code snippet:

```c
int main(int argc, char* argv) {
    // ...
}
```

This is what is known as a *function* - a block of code which we can *call*.

All functions in C have this format:

```c
return_type function_name(type parameter_name_1, type parameter_name_2, ...) {
    // function *body*
}
```

Functions act as a way of reusing code: we can simply call a function multiple
times in different areas of our code, instead of writing out all the code
multiple times.

When we call a function, all the code inside its **code block** will be
executed (run).

### What's special about `main`?

The `main` function is a little different. Instead of being something that we
call, it is instead automatically run by the operating system when we start our
program.

We call it the *entrypoint* to our program. Interestingly, it is both where the
program starts and where the program ends.

### Function return type

If we look back to our function format, we can see that before the function
name, we have a return type. This tells C what value our function will *send
back* to the caller.

In the case of the `main` function, we return an integer, because we need to
return a status code to the operating system (in order to tell it whether the
program was successful or not).

The standard type for an integer in C is `int`, so we return an `int` and
therefore our function **signature** is `int main(...)`.

### Parameters

Functions can take *parameters*. These are pieces of data that the function can
operate on and use to make decisions (known as selection).

### The `argc` parameter

`main` takes an argument called `argc`. It represents the *number of
command-line arguments* the program was passed.

This is useful in **CLI tools**, where the program needs to do different things
depending on the arguments that were passed to the program.

`argc` is an **integer** type, meaning we write the argument as `int argc`.

### The `argv` parameter

`main` also takes another argument, called `argv`. This is an *array* of all
command line arguments that were passed to the program. 

Again, this is useful in **CLI tools**, where the program needs to do different
things depending on the arguments that were passed to the program.

`argv` has a slightly strange type. It is `char* argv[]`, which means a
*pointer* to the start of an array, and this array contains other arrays of
`char`s. An array of chars is a `string`, so essentially, `argv` is an array
of strings.

> We'll learn *why* C needs to take the length of the `argv` array as a seperate
  parameter instead of just calling a function on `argv` to get the length (like
  most other programming languages hand it) and also why the `argv` type is so weird,
  in a later chapter.

### Function code block

When we declare a function in `C`, such as above where we declared the function
with this signature:

```c
int main(int argc, char* argv[])
```

... we need a way of telling the C compiler what code is part of a function
body. For this, we use braces `{}`.

Consider the following code:

```c
int randomFunction() {
    other();
    cool();
    functions();
}
```

Here, we use `{}` to define what code is part of the `randomFunction` function.

In this case, we call the `other`, `cool` and `functions` functions from inside
the `randomFunction` function. That means that, when we call `randomFunction`,
it will execute the code inside the braces `{}`.

## Printing text

If we now turn our attention to the body of the `main` function, you can see we
have two statements inside our function:

```c
printf("Hello, World!");
return 0;
```

For now, we are concerned with the first statement:

```c
printf("Hello, World!");
```

What we have done here is *called a function* - specifically, the `printf`
function.

When called with a `string` like we have done above, `printf` will output the
text it was passed to the console. That means that when running the code, we
will get this output:

```
Hello, World!
```

`printf` can also take other arguments and use a **format string** - this allows
us to print out the value of variables and other non-constant data. We'll get to
that in another chapter!

## Statement termination

Every *statement* (essentially, a line of code that does something) in C must be
terminated with a semicolon (`;`).

That basically means that we need to put a semicolon at the end of every line of
code, in order to tell the C compiler that the statement is finished.

## The `return` statement

Finally, we have this line:

```c
return 0;
```

All programs can return a value to the operating system known as the **exit
code**. This exit code tells the operating system whether the program completed
successfully or not.

In our case, our program completed successfully (probably!) so we can return `0`
\- the exit code for a successful program execution.

The return statement will also end the function. If we put the `return 0;`
**before** the `printf` statement, we would exit the function before `printf`
could run, and so nothing would be printed.

