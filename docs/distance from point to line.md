# Distance from point to line

For a line $l_1$ and point $A$:
- $l_1:r=\begin{pmatrix}1\\1\\-3\end{pmatrix}+\lambda\begin{pmatrix}2\\-2\\-1\end{pmatrix}$
- $A=(1,2,-1)$
- $l_1$ has direction vector $\begin{pmatrix}2\\-2\\-1\end{pmatrix}$
- Let $B$ be the point where $AB$ makes a right angle to $l_1$
- We need to find $B$ so that $\vec{AB}\cdot d=0$
- $\vec{OB}=\begin{pmatrix}1+2\lambda\\1-2\lambda\\-3-\lambda\end{pmatrix}$
- $\vec{AB}=\vec{OB}-\vec{OA}$
  - $=\begin{pmatrix}1+2\lambda\\1-2\lambda\\-3-\lambda\end{pmatrix}-\begin{pmatrix}1,2,-1\end{pmatrix}$
  - $=\begin{pmatrix}1+2\lambda-1\\1-\lambda-2\\-3-\lambda--1\end{pmatrix}$
  - $=\begin{pmatrix}2\lambda\\-1-2\lambda\\-2-\lambda\end{pmatrix}$
- For $l_1$ and $\vec{AB}$ to be perpendicular:
  - $\begin{pmatrix}2\lambda\\-1-2\lambda\\-2-\lambda\end{pmatrix}\cdot\begin{pmatrix}2\\-2\\-1\end{pmatrix}=0$
  - $4\lambda-2(-1-2\lambda)-1(-2-\lambda)$
  - $(4\lambda+4\lambda+\lambda)+2+2=0
  - $9\lambda+4=0$
  - $9\lambda=-4$
  - $\lambda=-\frac49$
- We've found $\lambda=-\frac49$!
- $\vec{AB}=\begin{pmatrix}2\lambda\\-1-2\lambda\\-2-\lambda\end{pmatrix}$
  - $\vec{AB}=\begin{pmatrix}2(-\frac49)\\-1-2(-\frac49)\\-2-(\frac49)\end{pmatrix}$
  - $\begin{pmatrix}-\frac89\\-\frac19\\-\frac{14}9\end{pmatrix}$
- The perpendicular distance is of length $\vec{AB}$:
  - $\sqrt{(-\frac89)^2+(-\frac19)^2\\+(-\frac{14}9)^2}$
  - $=\frac{\sqrt{261}}9$
  - $=\frac{\sqrt{29}}3$

## Find the distance between the point $(2,3,4)$ and the line $l:r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\-1\\4\end{pmatrix}$

- The line $l$ has direction vector $\begin{pmatrix}3\\-1\\4\end{pmatrix}$
- Let $B$ be the point where $AB$ makes a right angle to $l$
- We need to find $B$ so that $\vec{AB}\cdot d=0$
- $\vec{OB}=\begin{pmatrix}1+3\lambda\\0-\lambda\\2+4\lambda\end{pmatrix}$
- $\vec{AB}=\vec{OB}-\vec{OA}$
  - $=\begin{pmatrix}1+3\lambda\\0-\lambda\\2+4\lambda\end{pmatrix}-\begin{pmatrix}2,3,4\end{pmatrix}$
  - $=\begin{pmatrix}1+3\lambda-2\\0-\lambda-3\\2+4\lambda-4\end{pmatrix}$
  - $=\begin{pmatrix}3\lambda-1\\-3-\lambda\\4\lambda-2\end{pmatrix}$
- For $l$ and $\vec{AB}$ to be perpendicular:
  - $\begin{pmatrix}3\lambda-1\\-3-\lambda\\4\lambda-2\end{pmatrix}\cdot\begin{pmatrix}3\\-1\\4\end{pmatrix}=0$
  - $3(3\lambda-1)-1(-3-\lambda)+4(4\lambda-2)=0$
  - $(9\lambda+\lambda+16\lambda)+(-3+3-8)=0$
  - $26\lambda-8=0$
  - $26\lambda=8$
  - $\lambda=\frac{4}{13}$
- We've found $\lambda=\frac{4}{13}$!
- $\vec{AB}=\begin{pmatrix}3\lambda-1\\-3-\lambda\\4\lambda-2\end{pmatrix}$
  - $\vec{AB}=\begin{pmatrix}3(\frac{4}{13})-1\\-3-(\frac{4}{13})\\4(\frac{4}{13})-2\end{pmatrix}$
  - $=\begin{pmatrix}\frac{12}{13}-\frac{13}{13}\\-\frac{39}{13}-\frac{4}{13}\\\frac{16}{13}-\frac{26}{13}\end{pmatrix}$
  - $=\begin{pmatrix}-\frac{1}{13}\\-\frac{43}{13}\\-\frac{10}{13}\end{pmatrix}$
- The perpendicular distance is of length $\vec{AB}$:
  - $\sqrt{(-\frac{1}{13})^2+(-\frac{43}{13})^2+(-\frac{10}{13})^2}$
  - $=\frac{\sqrt{1+1849+100}}{13}$
  - $=\frac{\sqrt{1950}}{13}$
  - $=\frac{5\sqrt{78}}{13}$
- So the distance from the point $(2,3,4)$ to the line $l$ is $\frac{5\sqrt{78}}{13}$.

