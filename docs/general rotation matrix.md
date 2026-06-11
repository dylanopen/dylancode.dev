# General rotation matrix

In the chapter '[[matrix transformations about the origin]]',
we learned how to represent common rotations (i.e. 90 and 180 degrees) about the
origin.

Here, we'll learn how to represent a rotation of *any angle*.

> Note: because all [[matrix transformations]] **must** keep the origin at, well,
> the origin. This means that our centre of rotation is always $(0,0)$ when
> working with [[matrix transformations]].

## General rotation matrix

A rotation anticlockwise by $\theta$ degrees (an angle) can be written as a
matrix tranformation:

$$
\begin{pmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{pmatrix}
$$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the centre of rotation for all matrix transformations? | $(0,0)$, because matrix transformations must keep the origin at the origin. |
| What matrix represents an anticlockwise rotation by $\theta$ degrees about the origin? | $\begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}$ |

