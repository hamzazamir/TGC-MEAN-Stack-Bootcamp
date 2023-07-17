//Tough challenge - Card dealer
//You are going to create a program that will deal two hands of cards and display them on the screen.
//This will be done in stages as follows:

//Stage 1 – Build the deck.
//Array 1 (you should name it something suitable) will hold the four suits.
//[“Hearts”, “Diamonds”, “Clubs”, “Spades”]
//Array2 will hold the card values.
//[“Ace”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “10”, “Jack”, “Queen”, “King”]

//Stage 2 – Build a card
//Create a variable that will hold one card.  Using the arrays, make this variable hold a card value.
//e.g. “Ace of Hearts”

//Stage 3 – stack the deck.
//Create a third array called deck.
//Build a complete deck of cards in this new array.
//You should fill this array using the contents of your suits and values arrays and the card variable you have created.
//Your finished deck should contain 52 cards in order and look something like:

function makeDeck() {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const deck = [];

  for (let suit = 0; suit < suits.length; suit++) {
    for (let value = 0; value < values.length; value++) {
      deck.push(values[value] + " of " + suits[suit]);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
  return deck;
}

let shuffledDeck = shuffleDeck(makeDeck());
console.log(shuffledDeck.splice(0, 5));
