---
title: For loops
---

There's another type of loop called a *for loop*.

You may ask: "why do we need another type of loop? Isn't a while loop enough?"  
The answer is... yes. A while loop can do absolutely everything a for loop can
do.

So why do we use a for loop? Convenience. You'll grow to like for loops, I 
promise :)

## Basic syntax

In C#, we can write a for loop like this:

```cs
for (initialization; condition; update) {
    // Code to repeat
}
```

This looks much more complicated than a while loop, partly because *it is*.
However, this becomes much simpler if you realise that the code above is
*exactly* the same as this while loop:

```cs
initialization;
while (condition) {
    // Code to repeat
    update;
}
```

*All* that a `for` loop does is run the code in `initialization` once at the
start, then run the code in `update` at the end of each loop iteration.

The second part - the `condition` - is exactly the same as in a while loop.

The fact that the two code snippets above are equivalent is very useful - it
makes for loops much easier to understand!

## Our example from before: counting to 5

If you don't remember the code from the while loops chapter, here it is again:

```cs
int count = 1;
while (count <= 5) {
    Console.WriteLine(count);
    count++; // Increment count by 1
}
```

This looks ***very*** similar to our syntax for how a for loop works, right?
- `int count = 1` is our *initialization*
- `count <= 5` is our *condition*
- `count++` is our *update*

So, we can essentially substitute those parts into our for loop syntax:

```cs
for (int count = 1; count <= 5; count++) {
    Console.WriteLine(count);
}
```

And... there we are! That's a for loop that counts from 1 to 5.

Output:

```
1
2
3
4
5
```

## Changing the values of a for loop

With a for loop, you can easily change the *range* of the loop just by changing
the values in the initialization, condition, and update sections.

For example, to count from 0 to 10, you could write:

```cs
for (int count = 0; count <= 10; count++) {
    Console.WriteLine(count);
}
```

If we then wanted to count up in 2s instead of 1s, we could change the update part:

```cs
for (int count = 0; count <= 10; count += 2) {
    Console.WriteLine(count);
}
```

(remember that the `count++` we had before just meant `count += 1`, or `count = count + 1`)

We can even count backwards! To count from 5 down to 1, we could write:

```cs
for (int count = 5; count >= 1; count--) {
    Console.WriteLine(count);
}
```

- We start the count at 5
- We keep looping as long as `count` is greater than or equal to 1
- We decrease `count` by 1 each time through the loop

## Don't know how to use for loops yet? Use while loops!

As I mentioned earlier, for loops are just a while loop dressed up in fancy
clothes.

You can use a while loop for any task, it's just much *neater* to use a for loop
**when you know in advance** how many times you want to repeat something.

