const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

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
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.deck).to.equal(deck);
  });

  it.skip('should return current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip('should start with 0 turns', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it.skip('should start with no incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.equal([]);
  });

  it.skip('should update turn count', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    round.takeTurn(`object`);
    expect(round.turns).to.equal(1);
    round.takeTurn('accessor method');
    expect(round.turns).to.equal(2);
  });

  it.skip('should move on to next card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn(`object`);
    expect(round.returnCurrentCard()).to.equal(card2);
    round.takeTurn('accessor method');
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it.skip('should store incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);
    expect(round.incorrectGuesses).to.equal([]);
    round.takeTurn(`function`);
    expect(round.incorrectGuesses).to.equal([`function`]);
    round.takeTurn('iteration method');
    expect(round.incorrectGuesses).to.equal([`function`, 'iteration method']);
  });

  it.skip('should provide feedback', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);
    var turnOneFeedback = round.takeTurn(`function`);
    expect(turnOneFeedback).to.equal('incorrect!');
    var turnTwoFeedback = round.takeTurn('accessor method');
    expect(turnTwoFeedback).to.equal('correct!');
  });

  it.skip('should calculate percentage correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"], "accessor method"
    });
    const card3 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",["filter()", "find()", "map()"],"filter()");

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck);
    round.takeTurn(`object`);
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('iteration method');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

});
