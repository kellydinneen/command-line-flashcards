const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start play with a new deck', function() {
    const game = new Game();
    game.startDeck();
    expect(game.deck).to.be.an.instanceof(Deck);
    expect(game.deck.cards[0].id).to.equal(1);
  });

  it('should start play with a new round', function() {
    const game = new Game();
    game.startDeck();
    game.startRound(game.deck);
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

});
