
# Flashcards
#### A Command Line Game For Reviewing Javascript Concepts

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Unit Testing](#testing)
* [Project Organization](#organization)
* [Author](#author)

## Introduction <a name ="introduction"></a>
Flashcards is a simple command line game that allows a user to answer and recieve feedabck for answers to multiple choice questions. This iteration of the game includes just one set of flashcards that review fundamental concepts in javascript. 

---
## Features <a name ="features"></a>
* [Basic Game Play](#play)
* [Reviewing Incorrect Answers](#review)


### Basic Game Play
#### <a name ="play"></a>

  Game play is run entirely from the command line. Upon [deployment](#deployment), an introductory message informs the user of the number of flashcards in the current deck, and the first card appears. Cards consist of a question about fundamental concepts in javascript and a set of multiple choice answers. Users navigate between answers using the up and down arrow keys and select an answer with the 'return' key. Once an answer is selected, feedback will appear, informing the user whether the answer was correct or incorrect. 
  
  If a user exhausts all cards in the deck without any incorrect answers, a message will display informing the user that the round is over and that the user has answered all questions correctly in a single try. If the user exhausts all cards in the deck, but has answered some of them incorrectly, then the user will enter into a review phase of game play, as described below.
  
<p align = "center">
<img src="https://media.giphy.com/media/33gtlU8cIsZ7S82Dgd/giphy.gif">
</p>

### Reviewing Incorrect Answers
#### <a name ="review"></a>

  When a user finishes the deck, but has not answered all questions correctly, a review round will begin, preceded by a message informing the user of their performance during the previous round (percentage of correct answers) and the number of incorrectly answered questions that they have left to review. This round will proceed in the same way as basic game play, except only questions previously answered incorrectly will appear. If a user still fails to get 100% in this review round, another review round will follow with only the cards that still have yet to be answered correctly. 


<p align = "center">
<img src="https://media.giphy.com/media/bV1DJJhhaHJR1MTS4t/giphy.gif">
</p>

---
## Technology <a name ="technologies"></a>
* JavaScript
* Mocha testing framework with Chai assertion library

## Deployment <a name ="deployment"></a>
* Clone the repository
* CD into directory
* Run `node index.html` from command line

## Unit Testing <a name ="testing"></a>
Game play is facilitated by five javascript classes, which can be found in the "src" folder of the repo: `Card` `Deck` `Turn` `Round` and `Game`. All classes have corresponding test files which can be found in the repo's "test" folder. To run the unit tests:
* Clone the repository
* CD into the directory
* Run `npm test` 
* Tests are organized in blocks by class

## Project Organization <a name ="organization"></a>
The tasks associated with each iteration of this project were broken down via a [Kan-Ban board in the "projects" section](https://github.com/kellydinneen/flashcards-starter/projects/1) of this repo.

## Author
 [***Kelly Dinneen***](https://github.com/kellydinneen)
