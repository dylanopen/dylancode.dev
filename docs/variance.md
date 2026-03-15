# Variance

Variance measures how spread out a set of numbers / results is - how *varied*
they are.

It's a better measurement of spread than the range, because it takes into
account all the values in the set, not just the absolute extremes.

## Variance symbol

Because variance is just the [standard deviation](/standard-deviation) squared,
we write it as $\sigma^2$ as $\sigma$ is the symbol for standard deviation.

> $$
> \text{variance:}\quad\sigma^2
> $$

## Calculating variance

To calculate variance, we first need to calculate the *mean* of the set of
numbers.

Then, for each number in the set, we calculate the difference between that
number and the mean, and square that difference.

Then finally, we average that sum of squared differences by dividing it by the
number of values in the set (to find the mean).

## Formula

There are three formulas we can use, they're the same thing, but sometimes one
is easier than the others, depending on what we know.

### Calculating from *mean of squares* and *square of mean*

If we know the mean of squares (the average of the squares of the numbers) -
which we write as $\overline{x^2}$ - and the square of the mean (the square of
the average of the numbers) - which we write as $\overline{x}^2$ - then we can 
calculate the variance using this formula:

> $$
> \sigma^2 = \overline{x^2} - \overline{x}^2
> $$

(Remember that the $\overline{\quad}$ (bar) symbol means "mean of"

### Calculating from just the values

If we just have the values, then we can calculate the variance using this
formula:

> $$
> \sigma^2 = \frac{\sum(x-\overline{x})^2}{n}
> $$

That does mean we need to calculate the difference between the mean and each
value. We can rearrange it to stop us having to do this:

> $$
> \sigma^2 = \frac{\sum x^2}{n} - \left(\frac{\sum x}{n}\right)^2
> $$

Which, actually, is just the same as the first formula! We've just substituted
$\overline{x^2}$ for $\frac{\sum x^2}{n}$ and $\overline{x}^2$ for
$\left(\frac{\sum x}{n}\right)^2$ into our formula of $\sigma^2 =
\overline{x^2} - \overline{x}^2$.
