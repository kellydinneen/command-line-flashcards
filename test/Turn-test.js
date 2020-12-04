const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  const card = new Card(
    1,
    'What does this turn take as its first argument',
    ['guess', 'game', 'ice cream'],
    'guess'
  );
  let turn = new Turn('guess', card);

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return guess', function() {
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should return card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate guess as true when correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should provide positive feedback when guess is correct', function() {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should evaluate guess as false when incorrect', function() {
    turn = new Turn('ice cream', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should provide negative feedback when guess is incorrect', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
