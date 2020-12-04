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
    console.log(`**That's all the questions!**
    You answered ${this.calculatePercentCorrect()}% correctly. This time, let's review only the questions you answered incorrectly. So you have ${this.incorrectGuesses.length} questions to go.`)
    this.deck.cards = this.incorrectGuesses;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.attemptCount++;
  }
  endRound() {
    console.log(
      `**You're done!**
      It took you ${this.attemptCount} attempts
      to answer ${this.calculatePercentCorrect()}%
      of the questions correctly!`);
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
