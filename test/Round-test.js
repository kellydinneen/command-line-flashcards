const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round Start', function() {

  const card1 = new Card(
    1,
    'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'],
    'object'
  );

  const card2 = new Card(
    4,
    "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    ["mutator method", "accessor method", "iteration method"],
    "accessor method"
  );

  const deck = new Deck([card1, card2]);

  const round = new Round(deck);

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should start with first card in deck as current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

});

describe('Round Dynamics', function() {

  const card1 = new Card(
    1,
    'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'],
    'object'
  );
  const card2 = new Card(
    4,
    "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    ["mutator method", "accessor method", "iteration method"],
    "accessor method"
  );
  const card3 = new Card(
    11,
    "Which iteration method returns a new array with all elements that match a given condition?",
    ["filter()", "find()", "map()"],
    "filter()"
  );

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  beforeEach(function() {
    round.deck.cards = [card1, card2, card3];
    round.turns = 0;
    round.incorrectGuesses = [];
    round.attemptCount = 1;
  });

  it('should update turn count when turn is taken', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn(`object`);
    expect(round.turns).to.equal(1);
    round.takeTurn('accessor method');
    expect(round.turns).to.equal(2);
  });

  it('should update current card after turn is taken', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn(`object`);
    expect(round.returnCurrentCard()).to.equal(card2);
    round.takeTurn('accessor method');
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should store questions answered incorrectly', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn(`function`);
    expect(round.incorrectGuesses).to.deep.equal([card1]);
    round.takeTurn('iteration method');
    expect(round.incorrectGuesses).to.deep.equal([card1, card2]);
  });

  it('should provide feedback', function() {
    let turnFeedback = round.takeTurn(`function`);
    expect(turnFeedback).to.equal('incorrect!');
    turnFeedback = round.takeTurn('accessor method');
    expect(turnFeedback).to.equal('correct!');
  });

  it('should calculate percentage correct guesses', function() {
    round.takeTurn(`object`);
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('iteration method');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should update deck to review incorrectly answered questions', function() {
    round.takeTurn(`object`);
    round.takeTurn('iteration method');
    expect(round.deck.cards).to.deep.equal([card3]);
    round.reviewIncorrectGuesses();
    expect(round.deck.cards).to.deep.equal([card2]);
  });

  it('should reset turns for review session', function() {
    round.takeTurn(`object`);
    round.takeTurn('iteration method');
    expect(round.turns).to.equal(2);
    round.reviewIncorrectGuesses();
    expect(round.turns).to.equal(0);
  });

  it('should reset incorrect answers for review session', function() {
    round.takeTurn(`object`);
    round.takeTurn('iteration method');
    expect(round.incorrectGuesses.length).to.equal(1);
    round.reviewIncorrectGuesses();
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should keep track of attempts at round', function() {
    expect(round.attemptCount).to.equal(1);
    round.reviewIncorrectGuesses();
    expect(round.attemptCount).to.equal(2);
  });
});
