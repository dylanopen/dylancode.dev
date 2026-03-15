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

Like all boolean identities, we can use this in both directions, so we can also
say that $\overline{A} + \overline{B} = \overline{A \cdot B}$ and
$\overline{A} \cdot \overline{B} = \overline{A + B}$.

## Using it to simplify expressions

It's most useful when we have an expression with two NOTs 'on top' of each
other, for example, in this example:

### Simplify $\overline{\overline{A} \cdot \overline{B}}$

- Use De Morgan's law to break the line and change the sign:
  - $\overline{\overline{A}} + \overline{\overline{B}}$
- Now we have two NOTs on top of each other, so we can simplify them, using
  the fact that $\overline{\overline{A}} = A$ (see [double negation](
  /boolean-double-negation)):
  - $A + B$
- So the final, simplified expression is $A + B$.
