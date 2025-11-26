---
title: Optimal mixed strategy
---

## Prerequisites to find the optimal mixed strategy

1. Check for and eliminate dominated strategies and remove them.
2. Check for a stable solution (if max row min = min column max).
3. If no stable solution, find the optimal mixed strategy:

## Finding the optimal mixed strategy

- Let player 1's option $A$ be played with probability $p$.
- This means player 1's option $B$ will be played with probability $1-p$
- Create an expression for each of player 2's options.
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

