---
title: Pay-off matrices
---

A pay-off matrix shows the possible outcomes for each combination of strategies
chosen by the players in a game.

Each cell represents the outcome *for Player 1*. In a zero-sum game, the outcome
for Player 2 is the negative of the outcome for Player 1.

## Example pay-off matrix

|                      | Player 2 plays C | Player 2 plays D | Player 2 plays E |
|----------------------|------------------|------------------|------------------|
| **Player 1 plays A** | 2                | -1               | 1                |
| **Player 1 plays B** | 1                | -2               | -3               |

## Row and column minima

We can add the row and column minima to the pay-off matrix to help us analyse
the game:

|                      | Player 2 plays C | Player 2 plays D | Player 2 plays E | Row minima |
|----------------------|------------------|------------------|------------------|------------|
| **Player 1 plays A** | 2                | -1               | 1                | -1         |
| **Player 1 plays B** | 1                | -2               | -3               | -3         |
| **Column maxima**    | 2                | -1               | 1                |            |

- The row minima are the worst outcomes for Player 1 for each of their strategies.
- The column maxima are the best outcomes for Player 1 for each of Player 2's
  strategies (so the worst outcomes for Player 2).

