# Gas kinetic theory

In the kinetic theory of gases, we assume the [[gas]] is an [[ideal gas]].

## Assumptions made

- We have a large number of **identical** particles (same mass) - this enables statistical averaging.
- Particle motion is random (moving in different [[direction]]s with a range of [[speed]]s).
- The [[volume]] of the [[particle]]s is [[negligible]], compared to the volume of the container.
- There are no [[force]]s between the [[gas]] particles (the [[internal energy]] is only [[kinetic energy]], there is no [[potential energy]]).
- The collisions are [[elastic collision|perfectly elastic]] (kinetic energy is conserved). 

## Change in momentum

- A gas is heading towards a wall at momentum $mv$.
- It will rebound at momentum $-mv$.
- This means that the *change* in momentum is $-2mv$, or just $2mv$

## Force exerted on the wall

- When it collides with the container, it exerts a [[force]] on it.
- We know that $F=\frac{\Delta\rho}t$.
- We know $\Delta\rho=2mv$
- Calculating time ($t$):
	- Let $l$ be the distance between the sides of the container.
	- The time taken to travel from one wall, to another, then back again, is:
		- $t=\frac{2l}v$ (as time = distance / speed)
- So $F=\frac{2mv}{\frac{2l}v}$
- Or, more simply, $F=\frac{mv^2}l$

## Pressure

- We can only find the [[pressure]] of a [[gas]] ([[gas pressure]]) for a 3-dimensional object (we'll do a cube).
- $P=\frac FA$
- $F=\frac{mv^2}l$
- $A=l\times l=l^2$
- So $P=\frac{\frac{mv^2}l}{l^2}$
- $P=\frac{mv^2}{l^3}$
- $P=\frac{mv^2}V$
	- $P$ is the [[pressure]] of the [[gas]].
	- $m$ is the [[mass]] of the [[gas]].
	- $v$ (**lowercase v**) is the [[velocity]] / [[speed]] of the [[gas]].
	- $V$ (**uppercase V**) is the [[volume]] of the **container**.

## Considering $N$ gas particles

- So far, we've found equations for a *single* particle.
- If we have $N$ particles, we multiply everything by $N$, for example:
	- $P\times V=N\times mv^2$

## Considering the range of speeds

- To find the average speed of gas particles, we find the [[root mean square average]], because gas particle speed follows a [[Maxell-Boltzmann distribution]].

## Equation

> $$
> pV=NmC_{\text{rms}}^2
> $$

## Calculating in 3D

- We use the [[pythagorean theorem]] in 3 dimensions.
- $C_{\text{rms}}^2=C_{\text{rms(x)}}^2+C_{\text{rms(y)}}^2+C_{\text{rms(z)}}^2$
- $C_{\text{rms(x)}}^2=C_{\text{rms(y)}}^2=C_{\text{rms(z)}}^2$
- $C_{\text{rms}}^2=3\times C_{\text{rms(x)}}^2$

> $$
> PV=\frac13NmC_{\text{rms}}^2
> $$

## Including temperature

- We know the equations:
	- $PV=\frac13NmC_{\text{rms}}^2$
	- $PV=nRT$
- So we can equate the [[equation]] for [[gas kinetic theory]] to the [[ideal gas equation]]:
	- $\frac13NmC_{\text{rms}}^2=nRT$

## Creating a nicer kinetic energy equation

- We can actually rearrange to find the [[kinetic energy]]:
	- $\frac12\times\frac13NmC_{\text{rms}}^2=\frac12nRT$ (multiply both sides by $\frac12$)
	- $\frac12NmC_{\text{rms}}^2=\frac32nRT$ (multiply both sides by $3$)
	- $\frac12mC_{\text{rms}}^2=\frac32\frac nNRT$ (divide both sides by $N$)
	- $E_k=\frac32\frac nNRT$
	- $E_k$ is the kinetic [[energy]] of a single gas particle.
- $\frac Nn=N_A$, so $\frac nN=\frac1{N_A}$
- $E_k=\frac32\frac1{N_A}RT$
- $E_k=\frac32\frac R{N_A}T$
- We give the constant $\frac R{N_A}$ ([[molar gas constant]] over [[avogadro constant]]) the letter $k$, the [[boltzmann constant]].

> $E_k=\frac32kT$  
> $\frac12mC_{\text{rms}}^2=\frac32kT$  
> $k=\frac R{N_A}$
