---
title: Resistance in parallel
---

## Resistance in parallel formula

When resistors are connected in parallel, the total or equivalent resistance ($R_{eq}$) can be calculated using the formula:

$$
\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots
$$

We can re-arrange this to find $R_{eq}$:

$$
R_{eq} = \frac{1}{\left(\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots\right)}
$$

... where $R_1$, $R_2$, $R_3$, ... are the resistances of the individual
resistors connected in parallel.

### Calculate the resistance of two resistors in parallel

```
           +-------+           
        +--| 12ohm |--+
        |  +-------+  |
        |             |
--------+             +--------
        |             |
        |  +-------+  |        
        +--| 18ohm |--+
           +-------+   
```

- Total resistance, $R_{eq}$:
  - $\frac{1}{R_{eq}} = \frac{1}{12\Omega} + \frac{1}{18\Omega}$
  - $\frac{1}{R_{eq}} = \frac{3}{36\Omega} + \frac{2}{36\Omega}$
  - $\frac{1}{R_{eq}} = \frac{5}{36\Omega}$
  - $R_{eq} = \frac{36\Omega}{5} = 7.2\Omega$


## Increasing the number of resistors in parallel

If we add more resistors in parallel, the equivalent resistance **decreases**.
This is because adding more paths for the current to flow reduces the overall
resistance of the circuit (because there are more pathways for the electrons to
'choose').

