# Pointers Exist: But Why?

> The Magic of References

---

The most common concept that trips up new low-level programmers is the idea of *pointers*.

They're often thought of as one of the 'scarier' parts of languages like C, but they really shouldn't be.

Let's explore why pointers exist, what they really are, and how you can use them to make everything easier.

---

Before we can understand pointers, we really need to understand two areas of memory your program uses: the **stack**, and the **heap**.

The *stack* is a special region of memory that stores temporary variables created by each function (including the main function).

For this video, just know that the stack is really fast to access, but we need to know exactly how much memory a function will need at compile time - that means we can't use any dynamic memory allocation (for example, lists or strings that don't have a constant size).

Where do we store those dynamic variables then? In the *heap* - the other area of memory.

The *heap* isn't actually a single continuous block of memory, rather it's the term we use to refer to any memory allocated - it's put in a random place.
