# Non-mutually exclusive union

We know how to find the probability of either (at least one) of two
[[mutually exclusive events]] happening (see
[[mutually exclusive or|here]]). The formula is $P(A)+P(B)$.

How about if the events are **not** mutually exclusive?

## Formula

The probability of **either** event A **or** event B occuring (A union B) is:

> $$
> P(A\cup B)=P(A)+P(B)-P(A\cap B)
> $$

## Why subtract the intersection?

The reason we subtract the *intersection* $A\cap B$ is because we double count
it. Anything in both A and B will show up in the probability of both A and B,
so we need to subtract one 'lot' of that intersection to remove the duplicates.

### An example of why we need to

For an example, let's say we have a fruit bowl, and we have a:
- 70% chance of picking a yellowey-orange fruit
- 60% chance of picking a round fruit

If we just added their probabilities [[mutually exclusive or|like we do]] with
[[mutually exclusive events]], we'd end up with a
probability of 130%... which is impossible.

## Finding the probability from a Venn diagram

If we have a Venn diagram showing the *frequency* of A, the frequency of B and
the frequency of A *and* B (the **intersection**), we can just add the 3
frequencies together (then divide by the total frequency of everything, to get
our probability).

That's because the frequency shown in the A circle isn't the frequency of the
A, but the frequency of **only A** and nothing else, so A and not B. The same is
true for the B circle. So we're not double counting anything.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the formula for the probability of either event A or event B occurring when they are **not** mutually exclusive? | $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ |
| Why do we subtract $P(A\cap B)$ in the non-mutually exclusive union formula? | To remove the double count of the intersection (items in both A and B). |
| What is the problem if you add probabilities of non-mutually exclusive events without subtracting? | You can get a probability greater than 100% (e.g., 70% + 60% = 130%). |
| How do you find $P(A\cup B)$ from a Venn diagram showing frequencies? | Add the frequency of **only A**, the frequency of **only B**, and the frequency of the intersection, then divide by the total frequency. |

