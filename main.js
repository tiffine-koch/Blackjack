$(document).ready(init);

var player = [];
var dealer = [];
var gameDeck = [];


function init() {
//object constructor function - make deck
  var numberArray = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10","Jack","Queen","King"];

  var suitArray = ["heart", "spade", "club", "diamond"];

    for(var a = 0; a < suitArray.length; a++) {
      for (var b = 0; b < numberArray.length; b++) {
        gameDeck.push({ "number": numberArray[b], "suit": suitArray[a], "value": b});

      }
    }
    $('#start').on('click', dealCards);
    $('#hit').on('click', hitClicked);
    console.log("cards loaded");
  }

    //shufflecards - not working - want to use lodash though
  // function shuffleDeck(gameDeck) {
  //     console.log("shuffle");
  //   return _.shuffle(gameDeck)
  //   }
  //
  // var deckReady = shuffleDeck(gameDeck);

function sendCard() {
  var $card = $('<img>').addClass("card");
}

function dealCards(e){
  $(e.target).off;

  var a = Math.floor(Math.random()*gameDeck.length);
  var pcards = gameDeck.splice(a, 2);
  for (var a = 0; a < pcards.length; a++) {
    player.push(pcards[a]);
  }

  var b = Math.floor(Math.random()*gameDeck.length);
  var dcards = gameDeck.splice(b, 2);
  for (var b = 0; b < dcards.length; b++) {
    dealer.push(dcards[b]);
  }
}

function hitClicked(e) {
// var $target = $(e.target);
var pcards = gameDeck.splice(a, 1);
for (var a = 0; a < pcards.length; a++) {
  player.push(pcards[a]);
  }
}

function standClicked(e) {
  $(e.target).off;
  if(playerStand = true) {
    if(dScore < 17) {
        dealerPlay();
    } checkForWinner();
}
//dealer rules
function dealerPlay() {
  if(dScore < 21) {
    if(dScore < 17) {
    var dcards = gameDeck.splice(b, 1);
    for (var b = 0; a < dcards.length; b++) {
      player.push(dcards[b]);
      }
    } else {
      checkForWinner();
    }
  }
}

function getpScore() {
  var pScore = 0;
  pScore = _.pluck(player, "value");

  pScore.forEach(function(){
    if (player[0] >= (9)) {
      pScore += 10;
    } else {
      pScore += player[0]+1;
    }
  })
}

function getdScore() {
  var dScore = 0;
  dScore = _.pluck(dealer, "value");

  dScore.forEach(function(){
    if (dealer[0] >= (9)) {
      dScore += 10;
    } else {
      dScore += dealer[0]+1;
    }
  })
}


// function getdScore() {
//   var dScore = _.pluck(player, "value");
//   return dScore;
// }

function checkForWinner() {
  if (pScore > 21) {
    alert("Player loses")
  }
  if (pScore == 21) {
    alert("Player wins")
  }
  if (pScore < 21) {
    if (pScore > dScore) {
      alert("Player wins")
      } else {
        alert("Player loses")
    }
  }
}
