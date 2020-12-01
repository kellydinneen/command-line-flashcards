const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with players guess and the card in play', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('guess', card);
    expect(turn.guess).to.equal('guess');
    expect(turn.card).to.equal(card);
  });

  it('should return players guess', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('guess', card);
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should return card', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('guess', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate guess as true when correct', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('guess', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should evaluate guess as false when incorrect', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('ice cream', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should provide positive feedback when guess is correct', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('guess', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should provide negative feedback when guess is incorrect', function() {
    const card = new Card(1, 'What does this turn take as its first argument', ['guess', 'game', 'ice cream'], 'guess');
    const turn = new Turn('ice cream', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
