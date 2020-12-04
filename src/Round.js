const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.attemptCount = 1;
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
  }
  reviewIncorrectGuesses() {
    console.log(`*********THAT's ALL THE QUESTIONS!********
    You answered ${this.calculatePercentCorrect()}% of them correctly. Now, let's review only those that you answered incorrectly. So in this round, you'll answer ${this.incorrectGuesses.length} questions.
    ---------------------------------------------------`)
    this.deck.cards = this.incorrectGuesses;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.attemptCount++;
  }
  endRound() {
    console.log(
      `*********YOU'RE DONE!*********
      It took you ${this.attemptCount} attempts
      to answer all of the questions correctly!`);
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard());
    }
    this.turns++;
    this.deck.cards.shift();
    return turn.giveFeedback();
  }
}

module.exports = Round;
