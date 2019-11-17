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

//function to check for card matching or not
function checkForMatch() {
  //if cardOne = to CardTwo then it's a match
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  };
};

//function to flip the cards
function flipCard() {
  let cardId = this.getAttribute('data-id');
  // console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);
  // console.log(cards[cardId].suit);
  // console.log(cards[cardId].cardImage);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

function createBoard() {
  let cardBoard = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardBoard.appendChild(cardElement);
  }
};

//function for button when onClick is triggered to refresh the page to play a new game
function refreshGame() {
  window.location.reload();
}

createBoard();
