$(document).ready(init);
// $(function init() {

var gameDeck = [];
var player1 = [];
var dealer = [];
var deckReady = shuffleDeck(gameDeck);
//object constructor function - make deck
function init() {
  //4 of each 9 types
  var numberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11","Jack","Queen","King"];
  //4 of each 1 suit
  var suitArray = ["heart", "spade", "club", "diamond"];
  // var deck = (suit.length * numberCard.length);
    for(var a = 0; a < suitArray.length; a++) {
      for (var b = 0; b < numberArray.length; b++) {
        gameDeck.push({ "number": numberArray[b], "suit": suitArray[a], "value": b});
        console.log("hey");
        console.log("hey");
      }
    }
  shuffleDeck(gameDeck);
  // dealCards();
  // $('#start').on('click', dealCards);
  // $('#hit').on('click', hitClicked);
  // $('#stand').on('click', standClicked);
  }

//shufflecards
function shuffleDeck(gameDeck) {
    console.log("hey");
  return _.shuffle(gameDeck);
  }

// function dealCards(e){
//   var $target = $(e.target);
//
// }
//
// function hitClicked(e) {
//
// }
//
// function standClicked(e) {
//
// }
