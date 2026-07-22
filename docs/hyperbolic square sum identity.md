---
title: Hyperbolic square sum identity
---

## $\cosh^2x + \sinh^2x = \cosh(2x)$

### Proof

- We know:
  - $\sinh x = \frac{e^x - e^{-x}}{2}$
  - $\cosh x = \frac{e^x + e^{-x}}{2}$
- Square both functions:
  - $\sinh^2 x = \left(\frac{e^x - e^{-x}}{2}\right)^2 = \frac{e^{2x} - 2 + e^{-2x}}{4}$
  - $\cosh^2 x = \left(\frac{e^x + e^{-x}}{2}\right)^2 = \frac{e^{2x} + 2 + e^{-2x}}{4}$
- $\cosh^2 x + \sinh^2 x$
  - $= \frac{e^{2x} + 2 + e^{-2x}}{4} + \frac{e^{2x} - 2 + e^{-2x}}{4}$
  - $= \frac{e^{2x}+2+e^{-2x}+e^{2x}-2+e^{-2x}}4$
  - $= \frac{2e^{2x}+2e^{-2x}}4$
  - $= \frac{e^{2x}+e^{-2x}}2$
  - $= \cosh(2x)$
- We've now shown thatt $\cosh^2x + \sinh^2x = \cosh(2x)$!

