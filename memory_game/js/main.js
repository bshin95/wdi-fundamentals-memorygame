console.log("up and running!");

//create variables for each card, two are queens, two are kings
// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

//array to get rid of each individual variable of cards
let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
//empty array to hold cards in play
cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  checkForMatch();
}

flipCard(0);
flipCard(2);
