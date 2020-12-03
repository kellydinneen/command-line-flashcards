const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
  }
  endRound() {
    console.log(
      `**Round over!**
      You answered ${this.calculatePercentCorrect()}%
      of the questions correctly!`);
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(guess);
    }
    this.turns++;
    this.deck.cards.shift();
    return turn.giveFeedback();
  }
}

module.exports = Round;
