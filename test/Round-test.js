const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should have a deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.deck).to.equal(deck);
  });

  it.skip('should return current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip('should start with 0 turns', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it.skip('should start with 0 incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.equal(0);
  });

  it.skip('should update turn count', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    round.takeTurn(`object`);
    expect(round.turns).to.equal(1);
    round.takeTurn('blue');
    expect(round.turns).to.equal(2);
  });


});
