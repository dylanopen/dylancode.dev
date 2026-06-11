# Boolean OR one

If we have an [[expression]] like:

$$
A+1
$$

...then for any value of $A$, we are ORing it with 1. If we or anything with
1, then we just get `1` (because at least one is 1, so OR must be true (`1`)).

We know that, because of the `OR` [[truth table]]:
- `1 OR 1 = 1`
- `0 OR 1 = 1`, so:
- `A OR 1 = 1`
- (because `A` must represent either a `1` or a `0`)

In [[short]]:

$$
A+1=1
$$

We can use this to [[simplifying boolean algebra|simplify boolean algebra]]!

We can replace anywhere we see $A+1$ with $1$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is $A+1$ equal to in boolean algebra? | $A+1 = 1$ |
| Why does $A+1$ always equal 1? | Because ORing anything with 1 always gives 1, as per the truth table (1 OR 1 = 1, 0 OR 1 = 1). |
| How can the rule $A+1=1$ be used? | It can be used to simplify boolean algebra by replacing any occurrence of $A+1$ with 1. |

