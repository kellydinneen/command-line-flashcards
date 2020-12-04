const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  const card1 = new Card(
    1,
    'Can this deck count its cards?',
    ['yes', 'no'],
    'yes'
  );
  const card2 = new Card(
    3,
    'What does a deck instantiation take as an argument',
    ['object', 'string', 'array'],
    'array'
  );

  let deck = new Deck([card1, card2]);

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2]);
  });

  it('should count cards', function() {
    expect(deck.countCards()).to.equal(2);
    deck = new Deck([card1]);
    expect(deck.countCards()).to.equal(1);
  });

  it('should be able to have different cards', function() {
    const card3 = new Card(
      15,
      'What creates a new execution context?',
      ['function invokation', 'variable declaration', 'neither'],
      'function invokation'
    );
    const card4 = new Card(
      8,
      'Which is a primitive data type',
      ['string', 'object', 'array'],
      'string'
    );

    deck = new Deck([card3, card4])
    expect(deck.cards).to.deep.equal([card3, card4]);
  });

});
