//let i = 10;
//i += 2;
//console.log(i)

//string concatenation
//let name = "Hamza";
//let age = 24;
//let favrouriteDrink = "Water";
//console.log(`My name is ${name} and I am ${age} and my favrouite drink is ${favrouriteDrink}.`);

//activity 1
//Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.
//let firsrName = "Bob";
//let years = 30;
//let colour = "red";
// console.log(
//   `My name is ${firsrName} and I am ${years} years old and my favourite colour is ${colour}.`
// );

//stretch 1
// firsrName = "Bobby";
// years = 35;
// colour = "blue";
// console.log(
//   `My name is ${firsrName} and I am ${years} years old and my favourite colour is ${colour}.`
// );

//activity 2
//Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.
// let breakfast = "Eggs and Toast";
// let lunch = "Chicken and Rice";
// let dinner = "Fried Chicken";
// console.log(
//   `Today for breakfast I had ${breakfast} and for lunch I ate ${lunch} and for my dinner I had ${dinner}.`
// );

//stretch 2
// breakfast = "Oats and Fruit";
// lunch = "Chicken Sandwich";
// dinner = "BBQ";
// console.log(
//   `Tommorrow for breakfast I will have ${breakfast} and for lunch I will eat ${lunch} and for my dinner I will have ${dinner}.`
// );

//activity 3
//Create a program that calculates the number of days from today to your birth date.
// const birthDate = new Date("2024, 03, 23");
// const today = new Date();

// let timeToBirthday = birthDate.getTime() - today.getTime();
// let daysToBirthday = Math.floor(timeToBirthday / (1000 * 60 * 60 * 24));
// console.log(daysToBirthday);

//activity 4
//Create 9 variables: space1, space2… space9.
//Assign either the value ‘x’,’o’,’ ‘, to each of these  variables.
//Insert the variables into your board using the
//${varName} syntax and make it look like the displayed board.
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log("  |  |");
console.log(` ${space1}| ${space2}| ${space3}`);
console.log("  |  |");
console.log("_________");
console.log("  |  |");
console.log(` ${space4}| ${space5}|${space6}`);
console.log("  |  |");
console.log("_________");
console.log("  |  |");
console.log(` ${space7}| ${space8}|${space9}`);
console.log("  |  |");
