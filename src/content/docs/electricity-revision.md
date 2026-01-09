---
title: Electricity revision
---

> A document summarising the important parts of the electricity topic.

# Current and charge

## Definition of current

Current is the rate of flow of electric charge.

## Equation linking charge, current and time

$$
Q = I t
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| Q      | Electric charge     | Coulomb      | C           |
| I      | Electric current    | Ampere       | A           |
| t      | Time                | Second       | s           |

## Equation linking current, potential difference and resistance

$$
V = I R
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| I      | Electric current    | Ampere       | A           |
| V      | Potential difference| Volt         | V           |
| R      | Resistance          | Ohm          | Ω           |

## Coulomb

1 coulomb is the charge that flows past a point in 1 second when there is a
current of 1 amp. It's essentially an 'amp-second'

## Calculating the number of electrons

If we know the charge or total number of electrons, we can calculate the other:

$$
Q = n e
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| Q      | Electric charge     | Coulomb      | C           |
| n      | Number of electrons | (unitless)   |             |
| e      | Charge of electron  | Coulomb      | C           |

There are $6.25 \times 10^{18}$ electrons in 1 coulomb of charge.

## Current and potential difference in series circuits

In a series circuit:
- The current is the same everywhere.
- The potential difference is shared between the components.

We can explain this using [Kirchoff's second law](/kirchoff-second-law)

## Current and potential difference in parallel circuits

In a parallel circuit:
- The current is shared between the branches.
- The potential difference is the same across all branches.

We can explain this using [Kirchoff's first law](/kirchoff-first-law)

# Voltage

## Definition of potential difference

Potential difference is the energy transferred *by* 1 coulomb of charge, across a
component.

## Definition of electromotive force

The EMF is the energy transferred *to* 1 coulomb of charge, **by a power
source** (i.e. a cell or a battery).

It's essentially the voltage provided by the power source.

## Equation linking energy, charge and potential difference

$$
E = Q V
$$

or:

$$
W= Q V
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| E/W    | Energy transferred  | Joule        | J           |
| Q      | Electric charge     | Coulomb      | C           |
| V      | Potential difference| Volt         | V           |

> Energy transferred is sometimes represented by E, and sometimes by W (for work
> done, it is the same thing).

## Series and parallel circuits

(see above, under 'current and potential difference')

# Resistance

## Ohm's law

The current through a conductor at a constant temperature is directly
proportional to the potential difference across the conductor.

## Equation linking voltage, current and resistance

$$
V = I R
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| I      | Electric current    | Ampere       | A           |
| V      | Potential difference| Volt         | V           |
| R      | Resistance          | Ohm          | Ω           |

## I-V graph for a fixed resistor

- A straight line through the origin
- This shows the current is directly proportional to the voltage
- That means that, the resistor obeys Ohm's law

## I-V graph for a filament lamp

- A curve that gets shallower as voltage increases
- This shows that as the voltage increases, the current increases at a
  decreasing rate
- This does not obey Ohm's law
- The reason why the current doesn't increase as much as the p.d. gets higher is
  because the filament gets hotter, so its resistance increases.
  - This means that less current can flow for a given p.d.

## Why do hotter filaments have a higher resistance?

1. At higher temperatures, the atoms in the metal vibrate more.
1. This makes it more difficult for electrons to pass through the metal, because
   the metal ions collide more frequently with the electrons.
1. This means that the resistance increases.

## I-V graph for a diode

- In the negative-voltage region (the left of the graph) the current is *almost*
  zero.
- That's because the resistance is very high in the opposite direction.
- In the positive voltage region *below the threshold voltage* the current is
  also almost zero.
  - That's because, below around 0.6V, diodes have a very high resistance.
- Above the threshold voltage, the current increases rapidly as the voltage
  increases.
  - That's because, above around 0.6V, diodes have a very **low** resistance.

## Thermistor

- The resistance of a thermister *decreases* as the temperature increases.
- That means that the current gets *higher* if the thermister gets hotter.
- This is the opposite of a metal wire.

## Light dependent resistor (LDR)

- The resistance of an LDR *decreases* as the light intensity increases.
- This means that the current gets *higher* if the LDR is in brighter light.

# Resistor networks

## Resistors in series

The symbol for an ohm is Ω (the Greek letter omega).


When resistors are put in series, their resistances add up:

$$
R_{total} = R_1 + R_2 + R_3 + ...
$$

In other words, if we have two resistors in series, we just add up their
resistances to get the total resistance.

### Example

The total resistance of this circuit is $10Ω + 12Ω + 18Ω = 40Ω$:

```
       +-----+      +-----+      +-----+   
    ---| 10Ω |------| 12Ω |------| 18Ω |---
       +-----+      +-----+      +-----+   
```

## Resistors in parallel

If we put two resistors in parallel to each other, the total resistance of the
circuit actually *decreases*.

That's because the current has more options in which path it takes.

We can calculate the total resistance of resistors in parallel using this
equation:

$$
\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...
$$

Or, rearranged:

$$
R_{total} = 1\div(\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...)
$$


### Example

The total resistance of this circuit is $3Ω$ 

```
       +-----+   
   +---| 6Ω  |---+
   |   +-----+   |
---|             |---
   |   +-----+   |
   +---| 6Ω  |---+
       +-----+   
```

To calculate this, we do:

$$
R_{total} = 1\div(\frac{1}{6} + \frac{1}{6}) = 1\div(\frac{2}{6}) = 1\div(\frac{1}{3}) = 3Ω
$$

# Resistivity

## Equation of resistivity

$$
R = ρ \frac{L}{A}
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| R      | Resistance          | Ohm          | Ω           |
| ρ      | Resistivity         | Ohm metre    | Ω m         |
| L      | Length              | Metre        | m           |
| A      | Cross-sectional area| Metre squared| m²          |

## What affects resistance?

From the equation above, we can find that:
- The longer the wire, the higher the resistance (directly proportional)
- The larger the cross-sectional area, the lower the resistance (inversely
  proportional)
- The material of the wire affects its resistivity, and that in turn affects its
  resistance.

## Calculating the cross-sectional area of a wire

1. Find the diameter (e.g. using a micrometer)
1. Calculate the radius: $r = \frac{d}{2}$
1. Calculate the area using: $A = \pi r^2$

# Power and energy

## Definition of electrical power

Power is the rate of transfer of electrical energy.

## Equation linking power, current and potential difference

$$
P=VI
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| P      | Power               | Watt         | W           |
| V      | Potential difference| Volt         | V           |
| I      | Electric current    | Ampere       | A           |

## Equation linking power, current and resistance

$$
P=I^2R
$$

- We can derive this from the equation above and Ohm's law ($V=IR$).
  - $V=IR$
  - $P=VI$
  - $P=(IR)I$
  - $P=I^2R$

## Equation linking power, potential difference and resistance

$$
P=\frac{V^2}{R}
$$

- Again, we can derive this from the equation above and Ohm's law ($V=IR$)!
  - $I=\frac{V}{R}$
  - $P=VI$
  - $P=V(\frac{V}{R})$
  - $P=\frac{V^2}{R}$

## Equation linking energy, power and time

$$
E = Pt
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| E      | Electrical energy   | Joule        | J           |
| P      | Power               | Watt         | W           |
| t      | Time                | Second       | s           |

# EMF and internal resistance

## Definition of internal resistance

The internal resistance is the resistance *within* a power supply.

## Equation for internal resistance

$$
V = E - I r
$$

| Symbol | Quantity            | Unit         | Unit symbol |
|--------|---------------------|--------------|-------------|
| V      | Terminal p.d.       | Volt         | V           |
| E      | EMF                 | Volt         | V           |
| I      | Current             | Ampere       | A           |
| r      | Internal resistance | Ohm          | Ω           |

- We can rearrange this to find EMF: $E = V + I r$

## Finding the EMF from a graph of V against I

- Draw a line of best fit.
- The y-intercept is the EMF.

## Finding the internal resistance from a graph of V against I

- Draw a line of best fit.
- The gradient is the negative internal resistance.
- So, to find the internal resistance, take the negative of the gradient.

# Potential dividers

## Definition of a potential divider

A potential divider si a circuit which takes an input voltage and then splits it
across two or more components in a specific ratio.

In other words, it 'divides' the voltage into smaller voltages.

## What is a potential divider made up of?

- Two resistors in series.
- They share the EMF in the ratio of the resistances.

## Equation for potential dividers

$$
\frac{V_1}{V_2} = \frac{R_1}{R_2}
$$

## Potentiometer

A potentiometer is a variable resistor which can be used like a potential
divider.

It is not very efficient, but it allows us to get the *full range* of EMFs
(from 0V to the maximum voltage).

