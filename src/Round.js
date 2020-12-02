class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }
  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100;
  }
  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
  takeTurn(guess) {
    this.turns++;
    const turn = new Turn(guess, this.returnCurrentCard());
    turn.giveFeedback();
    this.deck.shift();
    if(this.deck.length === 0) {
      this.endRound();
    }
  }
};

module.exports = Round;
