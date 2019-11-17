console.log("up and running!");

//create variables for each card, two are queens, two are kings
// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

//array to get rid of each individual variable of cards
let cards = ["queen", "queen", "king", "king"];
//empty array to hold cards in play
cardsInPlay = [];

//create var cardOne
//store first item in cards array in variable cardOne

let cardOne = cards[0];
cardsInPlay.push("cardOne");

let cardTwo = cards[2];
cardsInPlay.push("cardTwo");

//check equality between two cards in cardsInPlay array
if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
