# Boolean De Morgan

## De Morgan's law

De Morgan's law can help us simplify expressions which have lots of NOTs in 
them. It says that if we have a NOT of an AND, we can rewrite it as an OR of
NOTs, and if we have a NOT of an OR, we can rewrite it as an AND of NOTs.

If you'd like a less wordy explanation of it, we 'break the line and change the
sign', so, for example, $\overline{A \cdot B}$ becomes $\overline{A} +
\overline{B}$.

> $\overline{A \cdot B} = \overline{A} + \overline{B}$  
> $\overline{A + B} = \overline{A} \cdot \overline{B}$

Like all [[boolean]] identities, we can use this in both directions, so we can also
say that $\overline{A} + \overline{B} = \overline{A \cdot B}$ and
$\overline{A} \cdot \overline{B} = \overline{A + B}$.

## Using it to simplify expressions

It's most useful when we have an [[expression]] with two NOTs 'on top' of each
other, for example, in this example:

### Simplify $\overline{\overline{A} \cdot \overline{B}}$

- Use De Morgan's law to break the line and change the sign:
  - $\overline{\overline{A}} + \overline{\overline{B}}$
- Now we have two NOTs on top of each other, so we can simplify them, using
  the fact that $\overline{\overline{A}} = A$ (see [[
  /[[boolean double negation]]|double negation]]):
  - $A + B$
- So the final, simplified [[expression]] is $A + B$.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is De Morgan's Law for breaking a NOT of an AND? | $\overline{A \cdot B} = \overline{A} + \overline{B}$ |
| What is De Morgan's Law for breaking a NOT of an OR? | $\overline{A + B} = \overline{A} \cdot \overline{B}$ |
| What is the concise phrase to remember De Morgan's Law? | We 'break the line and change the sign'. |
| Can De Morgan's Law be applied in reverse? | Yes, we can use it in both directions, e.g. $\overline{A} + \overline{B} = \overline{A \cdot B}$. |
| How do you simplify $\overline{\overline{A} \cdot \overline{B}}$ using De Morgan's Law? | First apply De Morgan: $\overline{\overline{A}} + \overline{\overline{B}}$, then use double negation to get $A + B$. |
| What is the result of simplifying $\overline{\overline{A} \cdot \overline{B}}$? | $A + B$ |

