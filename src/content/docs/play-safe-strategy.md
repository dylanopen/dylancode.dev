---
title: Play safe strategy
---

> This page is about the play safe strategy in **zero sum games**.

In this strategy, the player(s) choose the option which minimises the possible
loss.

Take this [pay-off matrix](pay-off-matrices) for example:

|                      | Player 2 plays C | Player 2 plays D | Player 2 plays E | Row minima |
|----------------------|------------------|------------------|------------------|------------|
| **Player 1 plays A** | 2                | -1               | 1                | -1         |
| **Player 1 plays B** | 1                | -2 4             | -3               | -3         |
| **Column maxima**    | 2                | -1               | 1                |            |

> The numbers in the table represent the benefit to player 1 - play 2 *loses*
> that amount.

- The row minima is the **worst** that can happen for each of player 1's options.
- The play safe strategy for player 1 is to choose the option with the
  **highest** row minima - in this case, option A.
- The column maxima is the **best** that can happen for each of player 2's options.
- The play safe strategy for player 2 is to choose the option with the
  **lowest** column maxima - in this case, option D.

## Value of the game

The value of the game is the amount that player 1 can expect to win (or lose)
if both players play their play safe strategies.

