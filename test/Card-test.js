const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should be able to store a different question', function() {
    const card = new Card(1, 'What is a dog?', ['reptile', 'bird', 'mammal'], 'mammal');
    expect(card.question).to.equal('What is a dog?');
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should be able to store a different list of possible answers', function() {
    const card = new Card(1, 'What is a dog?', ['reptile', 'bird', 'mammal'], 'mammal');
    expect(card.answers).to.deep.equal(['reptile', 'bird', 'mammal']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });

  it('should be able to store a different correct answer', function() {
    const card = new Card(1, 'What is a dog?', ['reptile', 'bird', 'mammal'], 'mammal');
    expect(card.correctAnswer).to.equal('mammal');
  });
});
