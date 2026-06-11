

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Question / Key Term | Answer / Definition |
| What is the equation of motion for a damped harmonic oscillator? | $m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + kx = 0$ |
| What is the natural frequency $ω_n$ of an undamped oscillator? | $ω_n = \sqrt{k/m}$ |
| What is the critical damping coefficient $c_c$? | $c_c = 2\sqrt{km} = 2m ω_n$ |
| What is the damping ratio $ζ$? | $ζ = c / c_c = c / (2√{km})$ |
| What is the general solution for an underdamped system ($ζ < 1$)? | $x(t) = e^{-ζ ω_n t} (A \cos(ω_d t) + B \sin(ω_d t))$ where $ω_d = ω_n √{1-ζ^2}$ |
| What is the damped natural frequency $ω_d$? | $ω_d = ω_n √{1-ζ^2}$ |
| What is the general solution for a critically damped system ($ζ = 1$)? | $x(t) = (A + Bt) e^{-ω_n t}$ |
| What is the general solution for an overdamped system ($ζ > 1$)? | $x(t) = A e^{s_1 t} + B e^{s_2 t}$ where $s_{1,2} = -ζ ω_n ± ω_n √{ζ^2 - 1}$ |
| Define logarithmic decrement $δ$ for underdamped vibration. | $δ = \ln(x_n / x_{n+1}) = \frac{2πζ}{√{1-ζ^2}}$ |
| How do you estimate damping ratio from successive amplitudes? | $ζ ≈ δ / (2π)$ for small $ζ$ |
| What is the equation of a forced damped harmonic oscillator? | $m \ddot{x} + c \dot{x} + kx = F_0 \cos(ωt)$ |
| What is the steady-state solution amplitude $X$ for forced vibration? | $X = \frac{F_0/k}{√{(1-r^2)^2 + (2ζr)^2}}$ where $r = ω/ω_n$ |
| What is the magnification factor $M$? | $M = X / (F_0/k) = 1 / √{(1-r^2)^2 + (2ζr)^2}$ |
| What is the phase angle $φ$ for forced vibration? | $φ = \tan^{-1} (2ζr / (1-r^2))$ |
| At what frequency $ω_r$ does resonance occur for damped forced vibration? | $ω_r = ω_n √{1-2ζ^2}$ (for $ζ < 1/√2$) |
| Define transmissibility $T$ in vibration isolation. | $T = \frac{F_{transmitted}}{F_0} = √{ \frac{1 + (2ζr)^2}{(1-r^2)^2 + (2ζr)^2}}$ |
| When is vibration isolation effective ($T < 1$)? | When $r > √2$ |
| What is the equation for a multi-DOF system in matrix form? | $[M]\{\ddot{x}\} + [C]\{\dot{x}\} + [K]\{x\} = \{F(t)\}$ |
| How do you find natural frequencies of an undamped multi-DOF system? | Solve $| [K] - ω^2 [M] | = 0$ |
| What is the modal matrix $[Φ]$? | A matrix whose columns are the normalized eigenvectors (mode shapes) of the system. |
| Describe the procedure of modal analysis for undamped systems. | 1. Solve eigenvalue problem for $ω_i^2$ and $φ_i$. 2. Transform to modal coordinates using $\{x\} = [Φ]\{q\}$. 3. Obtain decoupled equations $\ddot{q}_i + ω_i^2 q_i = P_i(t)$. |
| What is Rayleigh's quotient for estimating fundamental frequency? | $R(φ) = (φ^T K φ) / (φ^T M φ)$. It is stationary near an eigenvector, providing an upper bound for the fundamental frequency. |
| How do you derive the equation of motion using Lagrange's equation? | $\frac{d}{dt}(\frac{∂T}{∂\dot{q}_i}) - \frac{∂T}{∂q_i} + \frac{∂U}{∂q_i} = Q_i$ where $T$ is kinetic energy, $U$ is potential energy, $Q_i$ are generalized forces. |
| What is the kinetic energy expression $T$ for a vibrating system? | $T = \frac{1}{2} \sum_i m_i \dot{x}_i^2 = \frac{1}{2} \{\dot{x}\}^T [M] \{\dot{x}\}$ |
| What is the potential energy expression $U$ for a vibrating system? | $U = \frac{1}{2} \sum_i k_i x_i^2 = \frac{1}{2} \{x\}^T [K] \{x\}$ |
| How do you derive the equation of motion for a continuous beam? | $EI \frac{∂^4 w}{∂x^4} + ρA \frac{∂^2 w}{∂t^2} = 0$ (Euler-Bernoulli beam) |
| What is the frequency equation for a simply-supported Euler-Bernoulli beam? | $ω_n = (nπ)^2 √{EI/(ρA L^4)}$ for $n=1,2,3,...$ |
| What are the boundary conditions for a fixed-free (cantilever) beam? | At fixed end ($x=0$): $w=0$, $∂w/∂x=0$. At free end ($x=L$): $∂^2w/∂x^2=0$, $∂^3w/∂x^3=0$. |
| What is the Rayleigh-Ritz method for continuous systems? | Approximate $w(x,t) = \sum_{i=1}^n φ_i(x) q_i(t)$ using assumed functions $φ_i(x)$ satisfying boundary conditions, then apply Lagrange's equations to find approximate natural frequencies and modes. |
| What is the mass per unit length $μ$? | $μ = ρA$ |
| What is the wave equation for longitudinal vibration of a rod? | $E \frac{∂^2 u}{∂x^2} = ρ \frac{∂^2 u}{∂t^2}$ |
| What is the fundamental frequency of a fixed-free rod in longitudinal vibration? | $ω_1 = (π/(2L)) √{E/ρ}$ |
| What is Euler's formula for the critical buckling load $P_{cr}$? | $P_{cr} = π^2 EI / L_{eff}^2$ where $L_{eff}$ is effective length based on end conditions. |
| What is the effect of axial load $P$ on lateral natural frequency? | For a simply-supported beam, $ω_i^2 = ω_{i0}^2 (1 - P/P_{cr,i})$ where $ω_{i0}$ is frequency without axial load. |
| State the orthogonality condition for mode shapes. | $φ_i^T M φ_j = 0$ and $φ_i^T K φ_j = 0$ for $i ≠ j$. |
| How do you calculate the amplitude of forced response in a multi-DOF system using modal analysis? | Transform to modal coordinates to get $\ddot{q}_i + 2ζ_i ω_i \dot{q}_i + ω_i^2 q_i = f_i(t)$, solve for $q_i(t)$, then transform back $\{x\} = [Φ]\{q\}$. |
| What is the static deflection $X_s$? | $X_s = F_0 / k$ |

