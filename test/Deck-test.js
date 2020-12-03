const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have cards', function() {
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

    const deck = new Deck([card1, card2]);
    expect(deck.cards).to.deep.equal([card1, card2]);
  });

  it('should count cards', function() {
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
    expect(deck.countCards()).to.equal(2);
    deck = new Deck([card1]);
    expect(deck.countCards()).to.equal(1);
  });

});
