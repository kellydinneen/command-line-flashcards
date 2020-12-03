const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const makeDeck = (deck, questionData) => {
      let card = new Card(questionData.id, questionData.question, questionData.answers, questionData.correctAnswer);
      deck.push(card);
    }
    const deck = new Deck(prototypeQuestions.reduce(reduction, []);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
