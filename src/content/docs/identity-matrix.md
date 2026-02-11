---
title: Identity matrix
---

An *identity matrix* for a specific operation is a matrix that, when combined
with another (compatible) matrix using that operation, leaves the other matrix
unchanged.

That's a lot of words, so what I mean is that, if we have a matrix $\mathbf{A}$ and an identity matrix $\mathbf{I}$ of matching, compatible, dimensions, then:

$$
\mathbf{A} \oplus \mathbf{I} = \mathbf{A}
$$

$$
\mathbf{I} \oplus \mathbf{A} = \mathbf{A}
$$

(Where $\oplus$ is whatever operation we're talking about, like addition or
multiplication).

## Identity matrix for addition

For addition, we need to add *nothing* to a matrix to get the same matrix back.
So the identity matrix for addition is a matrix where all the elements are zero,
which we (imaginatively) call the [zero matrix](/zero-matrix).

## Identity matrix for multiplication

The identity matrix for *multiplication* is a matrix where all the elements on
the *leading diagonal* are 1, and all the other elements are 0.

This is generally what people are talking about when they say 'the identity
matrix', and we write it as $\mathbf{I}$.

> See [matrix multiplication identity](/matrix-multiplication-identity) for more
  details on the identity matrix for multiplication.

