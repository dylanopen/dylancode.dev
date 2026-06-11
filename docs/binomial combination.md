# Binomial combination

To understand what a [[binomial]] [[combination]] is, let's do an example.

Suppose we are [[expanding brackets|expanding]] the [[expression]] $(a+b)^2$, into $a^2 + 2ab + b^2$.

THe *coefficient* of the $ab$ term is $2$. The reason for that is because, when
we multiply out all the brackets, there are *two times* where we multiply
$a$ and $b$ together:
- $a$ from the first bracket and $b$ from the second bracket
- $b$ from the first bracket and $a$ from the second bracket

That means that the *binomial combinations* for the $ab$ term are $2$.

We write that as $^2C_1$.

That's what $^nC_r$ means!

## On a calculator

There's a button on a calculator to calculate $^nC_r$. Often it's above the
divide button (press shift), but on some of the new 'upgraded™®' casio calculators
you have to:
- Press the `Catalog` button
- Scroll down and click `Probability`
- Scroll down to `Combination` **C** and click it
- Then put the $n$ value before it and the $r$ value after it, e.g. `6 C 3` to
  calculate $^6C_3$.

*Casio CW calculator rant over*.

## Finding the coefficient of a term

Let's say we want to find the [[coefficient]] of the $a^2b^3$ term of the expansion
of $(a+b)^5$. That would be $^5C_2$ because the $a^2b^3$ term is the term where
$a$ has [[power]] $2$.

## Terms with coefficients

If we want to find the coefficient of the $x^3$ term of the expansion of
$(2+3x)^5$:

- Find $^5C_3$:
  - $^5C_3=10$
- The extra coefficients are:
  - $(3x)^3 = 27x^3$
  - $2^2 = 4$
- The extra coefficients are $4 \times 27x^3 = 108x^3$
- If we times everything together, the coefficient of the $x^3$ term is
  $10 \times 108 = 1080$.

### Find the coefficient of the $x^4$ term of the expansion of $(1+2x)^6$.

- $^6C_4=15$
- The extra coefficients are:
  - $(2x)^4 = 16x^4$
  - $1^2 = 1$
- The extra coefficient is $1 \times 16x^4 = 16x^4$
- If we times everything together, the coefficient of the $x^4$ term is
  $15 \times 16 = 240$.
- Answer: $240$.

### Find the first 3 terms of the expansion of $(3+x)^5$.

- For the $x^0$ term:
  - $^5C_0=1$
  - The extra coefficients are:
    - $(3)^5 = 243$
    - $x^0 = 1$
  - The extra coefficient is $243 \times 1 = 243$
  - The coefficient of the $x^0$ term is $1 \times 243 = 243$.
- For the $x^1$ term:
  - $^5C_1=5$
  - The extra coefficients are:
    - $(3)^4 = 81$
    - $x^1 = x$
  - The extra coefficient is $81 \times x = 81x$
  - The coefficient of the $x^1$ term is $5 \times 81 = 405$.
- For the $x^2$ term:
  - $^5C_2=10$
  - The extra coefficients are:
    - $(3)^3 = 27$
    - $x^2 = x^2$
  - The extra coefficient is $27 \times x^2 = 27x^2$
  - The coefficient of the $x^2$ term is $10 \times 27 = 270$.
- Answer: $243 + 405x + 270x^2 + ...$.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What does $^{n}C_{r}$ represent in a binomial expansion? | The binomial combination for the term where one variable has power $r$ and the other has power $n-r$, for example in $(a+b)^n$, the coefficient of $a^r b^{n-r}$ is $^{n}C_{r}$. |
| How do you calculate $^{6}C_{3}$ on a 'upgraded' Casio CW calculator? | Press the Catalog button, scroll down and click Probability, scroll down to Combination C and click it, then put 6 before it and 3 after it, e.g. 6 C 3. |
| How do you find the coefficient of the $a^{2}b^{3}$ term in the expansion of $(a+b)^{5}$? | It is $^{5}C_{2}$ because the term has $a$ to the power of 2. |
| How do you find the coefficient of the $x^{3}$ term in the expansion of $(2+3x)^{5}$? | Compute $^{5}C_{3}=10$, multiply by the extra coefficients: $(3x)^{3}=27x^{3}$ and $2^{2}=4$, so $10\times4\times27=1080$. |
| Find the coefficient of the $x^{4}$ term in the expansion of $(1+2x)^{6}$. | $^{6}C_{4}=15$, extra coefficients: $(2x)^{4}=16x^{4}$ and $1^{2}=1$, so $15\times16=240$. |
| Find the first 3 terms of the expansion of $(3+x)^{5}$. | $x^{0}$ term: $^{5}C_{0}=1$, $3^{5}=243$, $x^{0}=1$, so $1\times243=243$; $x^{1}$ term: $^{5}C_{1}=5$, $3^{4}=81$, $x^{1}=x$, so $5\times81=405$; $x^{2}$ term: $^{5}C_{2}=10$, $3^{3}=27$, $x^{2}=x^{2}$, so $10\times27=270$; answer: $243 + 405x + 270x^{2} + ...$ |

