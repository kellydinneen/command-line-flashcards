const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {}

  printMessage(deck) {
    console.log(
      `Welcome to FlashCards!
      You are playing with ${deck.countCards()} cards.
      -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.startDeck();
    this.startRound(this.deck);
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound);
  }

  startDeck() {
    const reduceQuestionData = (cards, questionData) => {
      let card = new Card(
        questionData.id,
        questionData.question,
        questionData.answers,
        questionData.correctAnswer
      );
      cards.push(card);
      return cards;
    }
    this.deck = new Deck(prototypeQuestions.reduce(reduceQuestionData, []));
  }

  startRound(deck) {
    this.currentRound = new Round(deck);
  }
}


module.exports = Game;
