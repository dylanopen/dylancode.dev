---
title: Named method arguments
---

In the last chapters, we have been calling methods like this:

```cs
int result = DivideNumbers(20, 4);
```

We'll assume the implementation of `DivideNumbers` looks like this:

```cs
int DivideNumbers(int dividend, int divisor)
{
    return dividend / divisor;
}
```

We're passing two arguments to `DivideNumbers`: `20` and `4`.

The order of these arguments matters because the method expects the first
argument to be the first number and the second argument to be the second number.

If we instead did this:

```cs
int result = DivideNumbers(4, 20);
```

Then we wouldn't get what we expect, because now `4` is being used as the
dividend and `20` as the divisor.

If we want to give the arguments in a different order, we can use *named
arguments*. This allows us to specify the name of the parameter that each
argument corresponds to.

> It is important to understand the difference between a **parameter** and an
> **argument**.  
> A *parameter* is part of the definition for the **method we are calling**. In
> this example, `dividend` and `divisor` are parameters of the `DivideNumbers`
> method.  
> An *argument* is part of the **method call**. In this example, `20` and `4`
> are arguments being *passed* to the `DivideNumbers` method.

Using named arguments, we can call `DivideNumbers` like this:

```cs
int result = DivideNumbers(divisor: 4, dividend: 20);
```

Here, we are explicitly stating which argument corresponds to which parameter.

## Which is better?

I would recommend never using named arguments unless you have a specific reason
to do so. The reason for that is:
- using named arguments is more verbose, so:
  - it takes longer to write
  - it takes longer to read
- if the method signature changes (e.g. parameter names change), then named
  arguments can break, whereas positional arguments will not.

However, there are some scenarios where named arguments can be useful:
- when a method has many parameters, and you only want to specify a few of them
  (this is because some parameters may have **default values** or be
  **optional**)
- when there are multiple parameters of the same type, and using named arguments
  can make it clear which argument corresponds to which parameter.

## A case scenario of the flaws of named arguments

Imagine we have a method that creates a user account:

```cs
void CreateUserAccount(string username, string password, bool isAdmin) { ... }
```

We can call this method using named arguments like this:

```cs
CreateUserAccount(password: "P@ssw0rd", username: "john_doe", isAdmin: false);
```

(please don't use "P@ssw0rd" as your actual password...)

The same code with positional arguments would look like this:

```cs
CreateUserAccount("john_doe", "P@ssw0rd", false);
```

Now, imagine that later on, we decide to change the parameter names in the
`CreateUserAccount` method to be more descriptive:

```cs
void CreateUserAccount(string userName, string userPassword, bool userIsAdministrator) { ... }
```

If we had used named arguments in our method call, like in the first example,
our code would now break because the parameter names have changed. We'd get
this error:

```
The best overload for 'CreateUserAccount' does not have a parameter named 'userName'
```

However, if we had used positional arguments, like in the second example, our
code would still work perfectly fine, because positional arguments are based on
the order of the parameters, not their names.

> I've been a bit biased here, because you may realise that exactly the same
> issue happens, but in reverse, if you change the order of parameters in a
> method signature. That would then break the position argument method, but
> *not* the named way. But this almost never happens - you don't just randomly
> change the order of parameters in a method signature. However, renaming
> parameters is something that happens quite often when refactoring code.

