# Interquartile range

The *interquartile range* of a set of numbers is the difference between the
third quartile (sometimes called the upper quartile) and the first quartile
(sometimes called the lower quartile).

But what is a quartile?

## Quartiles

A *quartile* is, as it sounds, (a multiple of) a *quarter* of the way through a
set of data. It's the value that you get when you go to the number 1/4 of the
way into your dataset (as well as 2/4 and 3/4 of the way in).

Usually, we just focus on:
- The *first quartile* (Q1), which is the value that is 1/4 of the way through
  the dataset. We can call this the *lower quartile*.
- The *third quartile* (Q3), which is the value that is 3/4 of the way through
  the dataset. We can call this the *upper quartile*.

## Finding the first quartile

The *first* quartile is half way through the lower half of the dataset.

That means that we can find it like this:

1. Arrange the numbers in order from smallest to largest.
1. Find the median of the dataset.
1. Get rid of the median, and everything above it.
   - Doing that leaves us with the lower half of the dataset.
1. Find the median of the lower half of the dataset.
   - That median is the first quartile.

## Finding the third quartile

The *third* quartile is half way through the upper half of the dataset.

So, similarly to finding the first quartile, we can find it like this:

1. Arrange the numbers in order from smallest to largest.
1. Find the median of the dataset.
1. Get rid of the median, and everything below it.
   - Doing that leaves us with the upper half of the dataset.
1. Find the median of the upper half of the dataset.
   - That median is the third quartile.

## Interquartile range

The interquartile range is the difference between the third quartile and the
first quartile.

> $$
> \text{interquartile range} = $\text{third quartile} - \text{first quartile}
> $$

## Examples

### Find the lower quartile of $\{1, 4, 9, 16, 25\}$

- The numbers are already in order: $\{1, 4, 9, 16, 25\}$
- The median is $9$.
- The lower half of the dataset is $\{1, 4\}$.
- The median of the lower half is the value in-between $1$ and $4$, which is
  $\frac{1 + 4}{2} = \frac{5}{2} = 2.5$.
- **Answer**: $\text{first quartile} = 2.5$

### Find the upper quartile of $\{1, 4, 9, 16, 25\}$

- The numbers are already in order: $\{1, 4, 9, 16, 25\}$
- The median is $9$.
- The upper half of the dataset is $\{16, 25\}$.
- The median of the upper half is the value in-between $16$ and $25$, which is
  $\frac{16 + 25}{2} = \frac{41}{2} = 20.5$.
- **Answer**: $\text{third quartile} = 20.5$

### Find the interquartile range of $\{1, 4, 9, 16, 25\}$

- The first quartile is $2.5$.
- The third quartile is $20.5$.
- The interquartile range is the difference between the third quartile and the
  first quartile, which is $20.5 - 2.5 = 18$.
- **Answer**: $\text{interquartile range} = 18$

### Find the interquartile range of $\{3, 1, 4, 1, 5, 9, 2, 6, 5, 8, 11\}$

- Arrange the numbers in order: $\{1, 1, 2, 3, 4, 5, 5, 6, 8, 9, 11\}$
- The median is $5$.
- The lower half of the dataset is $\{1, 1, 2, 3, 4\}$.
- The median of the lower half is $2$, so the first quartile is $2$.
- The upper half of the dataset is $\{5, 6, 8, 9, 11\}$.
- The median of the upper half is $8$, so the third quartile is $8$.
- $\text{interquartile range} = \text{third quartile} - \text{first quartile}$
- $\text{interquartile range} = 8 - 2$
- **Answer**: $\text{interquartile range} = 6$
