# Angled projectile motion

When we have a projectile which is launched at an angle (somewhat upwards,
somewhat horizontally), we can treat it as a combination of vertical projectile
motion and horizontal [[projectile motion]].

## Separating velocity into horizontal and vertical components

Let's say we know a projectile is launched with an initial [[velocity]] of $v$ at an
angle of $\theta$ to the horizontal. We can find the horizontal and vertical
components of the [[velocity]] using trigonometry:
- Horizontal component: $v_x = v \cos \theta$
- Vertical component: $v_y = v \sin \theta$

## Horizontal component

The horizontal component of the motion will be the same as in
[[horizontal projectile motion]], so we can use the
same equations and values as in that chapter to solve problems involving the
horizontal component of the motion:

### Velocity

Gravity works on the *vertical* component of the motion (see
[[vertical projectile motion]]), so [[weight]] has no
effect on the horizontal component of the motion.

There's no other forces involved after the projectile is launched! That means
that the horizontal [[velocity]] of the projectile will stay constant throughout the
motion.

> Horizontal [[velocity]] is constant.

The horizontal [[velocity]] will be the same as it was launched with: the initial
horizontal [[velocity]].

### Displacement

Because $\text{displacement} = \text{velocity} \times \text{time}$, the
horizontal [[displacement]] of the projectile will be the horizontal [[velocity]]
multiplied by the time it's in the air for.

### Acceleration

There's no forces acting on the horizontal component of the motion, so the
[[acceleration]] of the projectile in the horizontal direction will be zero.

## Vertical component

The vertical component values can be calculated in a similar way to in the
[[vertical projectile motion]] chapter, but the
object will likely fall *further* than it originally rose, because it was
launched off a cliff, for example.

(It may even fall *less far* than it rose, if it was launched from a hole in the
ground, onto the surface, for example.)

### Acceleration

The [[acceleration]] which acts vertically is caused by gravity, so the [[acceleration]]
of the projectile in the vertical direction will be $-9.81ms^{-2}$ (negative
because it's downwards).

> Vertical [[acceleration]] is $-9.81ms^{-2}$.

### Velocity

The [[velocity]] will start at $u_v$ (the vertical component of the initial
[[velocity]]), and will increase in the negative direction (downwards) as the
projectile falls, due to the [[acceleration]] of gravity.

Unlike in [[horizontal projectile motion]], the
vertical [[velocity]] won't start at $0ms^{-1}$, because the projectile is launched
somewhat upwards at an angle, so it has an initial vertical [[velocity]].

That means that the vertical [[velocity]] will start positive, and will decrease to 
$0ms^{-1}$ at the maximum height, before increasing in the negative direction
(downwards) as the projectile falls, due to the [[acceleration]] of gravity.

We can use $\text{velocity} = \text{initial velocity} + \text{acceleration} \times \text{time}$
to find the vertical [[velocity]] at any point in time while the projectile is
falling.

> $\text{Vertical velocity} = u_v - 9.81ms^{-2} \times \text{time}$

### Displacement

We can use $\text{displacement} = \text{initial velocity} \times \text{time} + \frac12 \times \text{acceleration} \times \text{time}^2$ to find the vertical [[displacement]] of the projectile at any point in time while it's falling.

We can find that equation from the SUVAT equation $s=ut+\frac12at^2$ by substituting $u=u_v$ (the vertical component of the initial [[velocity]], since the projectile is launched at an angle, so it has an initial vertical [[velocity]]) instead of $u=0ms^{-1}$ (since the projectile is launched horizontally, so no initial vertical [[velocity]]) as in horizontal [[projectile motion]].

### Time

Time is the same as in [[horizontal projectile motion]].
Just calculate it using our known values for:
- $u_v$ (the vertical component of the initial [[velocity]])
- $a$ (the [[acceleration]] due to gravity, which is $-9.81ms^{-2}$)
- $v$ (the vertical [[velocity]] at the end of the motion, which will be negative,
  because it's falling downwards)

$$
t = \frac{v - u_v}{a}
$$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Question | Answer |
| What are the two components of motion in angled projectile motion? | Vertical projectile motion and horizontal projectile motion. |
| How do you calculate the horizontal component of initial velocity? | $v_x = v \cos \theta$ |
| How do you calculate the vertical component of initial velocity? | $v_y = v \sin \theta$ |
| What is the horizontal velocity of a projectile throughout its motion? | Constant (equal to the initial horizontal velocity). |
| Why is horizontal velocity constant? | There are no forces (including weight) acting on the horizontal component after launch. |
| How do you calculate horizontal displacement? | Horizontal displacement = horizontal velocity × time |
| What is the horizontal acceleration of a projectile? | Zero. |
| What is the vertical acceleration of a projectile? | $-9.81ms^{-2}$ (downwards due to gravity). |
| What is the initial vertical velocity in angled projectile motion? | $u_v$ (the vertical component of the initial velocity, $v \sin \theta$), not $0ms^{-1}$. |
| How does vertical velocity change over time? | Starts positive, decreases to $0ms^{-1}$ at maximum height, then increases in the negative (downwards) direction. |
| What equation gives vertical velocity at any time? | Vertical velocity $= u_v - 9.81ms^{-2} \times \text{time}$ (or $v = u_v + at$ with $a = -9.81ms^{-2}$). |
| What equation gives vertical displacement at any time? | $s = u_v t + \frac12 a t^2$, where $a = -9.81ms^{-2}$. |
| How is the time of flight calculated in angled projectile motion? | $t = \frac{v - u_v}{a}$, where $v$ is the final vertical velocity (negative), $u_v$ is the initial vertical velocity, and $a = -9.81ms^{-2}$. |
| What value is used for acceleration in the vertical SUVAT equations? | $a = -9.81ms^{-2}$ (gravity). |
| How does the vertical displacement compare to vertical projectile motion? | The object may fall further (e.g., launched off a cliff) or less far (e.g., launched from a hole) than it rose. |

