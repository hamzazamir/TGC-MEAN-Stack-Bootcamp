//basic for loop
// let myList = ["Apple", "Microsoft", "Google", "Facebook", "Oracle"];

// for (let i = 0; i < myList.length; i++) {
//   console.log(myList[i]);
// }

//multiplesOfTwo for loop
// let multiplesOfTwo = [];

// for (let i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     multiplesOfTwo.push(i);
//   }
// }
// console.log(multiplesOfTwo);

//while loop
// let age = 15;

// while (age < 18) {
//   console.log("You are a child");
//   age++;
// }
// console.log("You are an adult");

//while loop card game
// let cards = ["diamonds", "clubs", "hearts", "spades"];
// let currentCard = "clubs";

// while (currentCard !== "spades") {
//   console.log(currentCard);
//   currentCard = cards[Math.floor(Math.random() * cards.length)];
// }
// console.log("You win!");

//Challenge 6
//mutual followers program
//Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
//In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
//Using a nested loop iterate over both arrays and console.log out the matching follower.

let bobsFollowers = ["Tom", "Jerry", "Jim", "Katy"];
let hannahsFollowers = ["Katy", "Mary", "Lisa", "Jim"];

for (let i = 0; i < bobsFollowers.length; i++) {
  let currentFollower = bobsFollowers[i];
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (currentFollower === hannahsFollowers[j]) {
      console.log(currentFollower);
    } else {
      console.log("No match");
    }
  }
}
