# Play safe strategy

> This page is about the play safe strategy **in a [[zero sum game]]**.

In this strategy, the player(s) choose the option which **minimises** the possible loss.

Take this [[pay off matrix]] for example:

|                      | Player 2 plays C | Player 2 plays D | Player 2 plays E | Row minima |
|----------------------|------------------|------------------|------------------|------------|
| **Player 1 plays A** | 2                | -1               | 1                | -1         |
| **Player 1 plays B** | 1                | -2 4             | -3               | -3         |
| **Column maxima**    | 2                | -1               | 1                |            |

> The numbers in the table represent the benefit to player 1 - play 2 *loses* that amount.

- The row minima is the **worst** that can happen for each of player 1's options.
- The play safe strategy for player 1 is to choose the option with the **highest** row minima - in this case, option A.
- The column maxima is the **best** that can happen for each of player 2's options.
- The play safe strategy for player 2 is to choose the option with the **lowest** column maxima - in this case, option D.

## Value of the game

The [[game value|value of the game]] for player 1 is the amount that player 1 can expect to win (or lose) **if** both players play their play safe strategies.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the play safe strategy in a zero sum game? | A strategy where the player(s) choose the option which **minimises** the possible loss. |
| How do you determine the play safe strategy for player 1 from a pay off matrix? | Choose the option with the **highest** row minimum. |
| How do you determine the play safe strategy for player 2 from a pay off matrix? | Choose the option with the **lowest** column maximum. |
| In the given pay off matrix, what is the row minima for Player 1 playing A? | -1 |
| In the given pay off matrix, what is the row minima for Player 1 playing B? | -3 |
| In the given pay off matrix, what is the column maxima for Player 2 playing C? | 2 |
| In the given pay off matrix, what is the column maxima for Player 2 playing D? | -1 |
| In the given pay off matrix, what is the column maxima for Player 2 playing E? | 1 |
| Based on the pay off matrix, what is the play safe strategy for Player 1? | Option A. |
| Based on the pay off matrix, what is the play safe strategy for Player 2? | Option D. |
| What is the value of the game for player 1? | The amount that player 1 can expect to win (or lose) **if** both players play their play safe strategies. |
| What do the numbers in the pay off matrix represent regarding the players? | The numbers represent the benefit to player 1; player 2 *loses* that amount. |

