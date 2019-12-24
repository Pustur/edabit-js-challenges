# Poker Hand Ranking

`Conditions` `Data Structures` `Games`

[View on Edabit](https://edabit.com/challenge/AtCTnf62Xa3hWaFtJ)

In this challenge, you have to establish whick kind of Poker combination is present in a deck of five cards. Every card is a string containing the card value (with the upper-case initial for face-cards) and the lower-case initial for suits, as in the examples below:

```
"Ah" ➞ Ace of hearts
"Ks" ➞ King of spades
"3d" ➞ Three of diamonds
"Qc" ➞ Queen of clubs
```

There are 10 different combinations. Here it is the list, in order of importance:

| Name                | Description                                         |
| ------------------- | --------------------------------------------------- |
| **Royal Flush**     | A, K, Q, J, 10, all with the same suit.             |
| **Straight Flush**  | Five cards in sequence, all with the same suit.     |
| **Four of a Kind**  | Four cards of the same rank.                        |
| **Full House**      | Three of a Kind with a Pair.                        |
| **Flush**           | Any five cards of the same suit, not in sequence.   |
| **Straight**        | Five cards in a sequence, but not of the same suit. |
| **Three of a Kind** | Three cards of the same rank.                       |
| **Two Pair**        | Two different Pair.                                 |
| **Pair**            | Two cards of the same rank.                         |
| **High Card**       | No other valid combination.                         |

Given an array `deck` containing five strings being the cards, implement a function that returns a string with the name of the highest combination obtained, accordingly to the table above.

### Examples

```js
pokerHandRanking(["10h", "Jh", "Qh", "Ah", "Kh"]) ➞ "Royal Flush"

pokerHandRanking(["3h", "5h", "Qs", "9h", "Ad"]) ➞ "High Card"

pokerHandRanking(["10s", "10c", "8d", "10d", "10h"]) ➞ "Four of a Kind"
```

### Notes

In this challenge, you can consider the Ace as a **high card** only, so that it will be treat as the final element of a Straight (in a normal Straight or in a Royal Flush).
