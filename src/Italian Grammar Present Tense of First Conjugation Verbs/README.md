# Italian Grammar: Present Tense of First Conjugation Verbs

`Conditions` `Formatting` `Strings`

[View on Edabit](https://edabit.com/challenge/CZhyvQg3KDhcYRJD7)

In this challenge, you must build a function that inflects an infinitive regular Italian verb of the first conjugation form to the present tense, including the personal subjective pronoun.

All first conjugation Italian verbs share the same suffix: **ARE**. The first thing to do is separate the verb root from the suffix.

- Root of "programmare" (_to code_) = "programm".
- Root of "giocare" (_to play_) = "gioc".

For each subjective pronoun the root is combined with a new suffix: see table below (pronouns are numbered for coding ease, in real grammar they are grouped in singular and plural, both from first to third):

| #   | Pronoun     | Suffix |
| --- | ----------- | ------ |
| 1   | Io (I)      | o      |
| 2   | Tu (You)    | i      |
| 3   | Egli (He)   | a      |
| 4   | Noi (We)    | iamo   |
| 5   | Voi (You)   | ate    |
| 6   | Essi (They) | ano    |

- Present tense of verb "parlare" (_to speak_) for third pronoun:
  - Pronoun ("Egli") + Root ("parl") + Suffix ("a") = "Egli parla".
- Present tense of verb "lavorare" (_to work_) for fourth pronoun:
  - Pronoun ("Noi") + Root ("lavor") + Suffix ("iamo") = "Noi lavoriamo".

There are two exceptions for present tense inflection:

- If root ends with "**c**" or "**g**" the second and fourth pronoun suffixes add a "**h**" at the start:
  - "Attaccare" (_to attack_) = "Tu attacchi" (instead of _"Tu attacci"_)
  - "Legare" (_to tie_) = "Noi leghiamo" (instead of _"Noi legiamo"_)
- If root ends with "**i**" the second and fourth pronoun suffixes lose the starting "**i**" (so that second pronoun suffix disappears):
  - "Inviare" (_to send_) = "Noi inviamo" (instead of _"Noi inviiamo"_)
  - "Tagliare" (_to cut_) = "Tu tagli" (instead of _"Tu taglii"_)
  - "Mangiare" (_to eat_) = "Noi mangiamo" (instead of _"Noi mangiiamo"_)
  - "Cacciare" (_to hunt_) = "Tu cacci" (instead of _"Tu caccii"_)

Given a string `verb` being the infinitive form of the first conjugation Italian regular verb, and an integer `pronoun` being the subjective personal pronoun, implement a function that returns the inflected form as a string.

### Examples

```js
conjugate("programmare", 5) ➞ "Voi programmate"

conjugate("iniziare", 2) ➞ "Tu inizi"

conjugate("mancare", 4) ➞ "Noi manchiamo"
```

### Notes

- In the returned string, pronouns must be capitalized and verbs must be in lowercase, separated by a space between them.
- Curious fact: first conjugation (verbs ending in "are") is also called "the living conjugation", because every new verb that enters the Italian dictionary is assigned to this category as a new regular verb; it often happens for verbs "borrowed" from English and for informatical neologisms: _chattare_, _twittare_, _postare_, _spammare_... will _edabittare_ be the next?
