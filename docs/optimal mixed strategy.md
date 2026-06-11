# Optimal mixed strategy

## Prerequisites to find the optimal mixed strategy

1. Check for and eliminate dominated strategies and remove them.
2. Check for a stable solution (if max row min = min column max).
3. If no stable solution, find the optimal mixed strategy:

## Finding the optimal mixed strategy

- Let player 1's option $A$ be played with probability $p$.
- This means player 1's option $B$ will be played with probability $1-p$
- Create an [[expression]] for each of player 2's options.
- Find the point(s) where all the expressions are equal.
- Of these points, find the one where the *lowest* lines at that value of $P$
  are the highest they can be.
- Solve these two lines simultaneously to find $p$.

### Find the probabilities for a mixed strategy fro player 1, assuming player 2 plays randomly

|                            | Player 2 plays D | Player 2 plays E |
|----------------------------|------------------|------------------|
| **Player 1 plays A**       | 1                | 2                |
| **Player 1 plays C**       | 3                | -1               |

- player 2 plays randomly between D and E.
- Let player 1 play A with probability $p$.
- They therefore play C with probability $1-p$.
- If player 2 plays D, player 1 wins $1p+3(1-p)=3-2p$.
- If player 2 plays E, player 1 wins $2p+(-1)(1-p)=3p-1$.
- Solve simultaneously:
  - $3-2p=3p-1$
  - $5p=4$
  - $p=4/5$.
- **Answer**: player 1 should play A with probability $4/5$ and C with
probability $1/5$. $p=0.8$.

> Remember that player 1 must play these strategies as randomly as possible.
> That's because they don't want player 2 to be able to predict what they will
> do.

### Find the probabilities for a mixed strategy for player 1, assuming player 1 plays randomly (2xn)

|                           | Player 2 plays C | Player 2 plays D | Player 2 plays E |
|---------------------------|------------------|------------------|------------------|
| **Player 1 plays A**      | 0                | -1               | 2                |
| **Player 1 plays B**      | 2                | 3                | -2               |

Add the row minima and column maxima:

|                           | Player 2 plays C | Player 2 plays D | Player 2 plays E | Row minima |
|---------------------------|------------------|------------------|------------------|------------|
| **Player 1 plays A**      | 0                | -1               | 2                | -1         |
| **Player 1 plays B**      | 2                | 3                | -2               | -2         |
| **Column maxima**         | 2                | 3                | 2                |            |

- Let player 1 play A with probability $p$.
- They therefore play B with probability $1-p$.
- If player 2 plays C, player 1 wins $0p+2(1-p)=2-2p$.
- If player 2 plays D, player 1 wins $-1p+3(1-p)=3-4p$.
- If player 2 plays E, player 1 wins $2p+(-2)(1-p)=4p-2$.
- Drawing the graph, the point where all the lines are the highest is at the
intersection of $2-2p$ and $4p-2$.
- Solve simultaneously:
  - $2-2p=4p-2$
  - $4=6p$
  - $p=2/3$.
- **Answer**: they should play A with probability $2/3$ and B with probability
$1/3$. $p=0.6667$.

## [[flashcards]]

| Question                                                                                                                                | Answer                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Player 1 plays A with probability $p$                                                                                                   | Player 1 therefore plays B (or C) with probability $1-p$                                                                                                                                       |
| What is the first step before finding an optimal mixed strategy?                                                                        | Check for and eliminate dominated strategies, then check for a stable solution (max row min = min column max).                                                                                 |
| When should you find the optimal mixed strategy?                                                                                        | When there is no stable solution (max row min ≠ min column max).                                                                                                                               |
| How do you create expressions for each of player 2's options?                                                                           | For each of player 2's options, multiply the payoff when player 1 plays A by $p$ plus the payoff when player 1 plays B (or C) by $1-p$, then simplify.                                         |
| How do you find the value of $p$ for player 1's mixed strategy?                                                                         | Set the expressions for player 2's options equal to each other at the point where the lowest lines at that $p$ are the highest possible, then solve the two selected equations simultaneously. |
| In a $2 \times 2$ game with payoffs: (A,D)=1, (A,E)=2, (C,D)=3, (C,E)=-1, how do you find player 1's optimal $p$?                       | Set $1p+3(1-p) = 2p+(-1)(1-p)$ → $3-2p=3p-1$ → $5p=4$ → $p=4/5$ (play A with 0.8, C with 0.2).                                                                                                 |
| Why must player 1 play their mixed strategy as randomly as possible?                                                                    | So player 2 cannot predict what they will do.                                                                                                                                                  |
| In a $2 \times 3$ game with payoffs: (A,C)=0, (A,D)=-1, (A,E)=2, (B,C)=2, (B,D)=3, (B,E)=-2, what are the row minima and column maxima? | Row minima: -1 (row A), -2 (row B). Column maxima: 2 (col C), 3 (col D), 2 (col E). No stable solution because max row min (-1) ≠ min column max (2).                                          |
| For the $2 \times 3$ game above, write the expressions for player 2's options in terms of $p$ (player 1 plays A with $p$).              | Player 2 plays C: $2-2p$. D: $3-4p$. E: $4p-2$.                                                                                                                                                |
| For the $2 \times 3$ game above, which two lines intersect at the optimal $p$?                                                          | $2-2p$ and $4p-2$ (the point where the lowest lines are the highest).                                                                                                                          |
| Solve $2-2p=4p-2$ to find $p$ for the $2 \times 3$ game.                                                                                | $2-2p=4p-2$ → $4=6p$ → $p=2/3$ (play A with 2/3, B with 1/3).                                                                                                                                  |

