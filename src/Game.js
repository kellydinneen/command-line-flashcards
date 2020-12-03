const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

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
    const deck = this.startDeck();
    const round = this.startRound(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  startDeck() {
    const newDeck = (deck, questionData) => {
    let card = new Card(questionData.id, questionData.question, questionData.answers, questionData.correctAnswer);
    deck.push(card);
    }
    return new Deck(prototypeQuestions.reduce(reduction, []));
  }

  startRound(deck) {
    return new Round(deck);
  }
};


module.exports = Game;
