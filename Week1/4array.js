//array and push
// let myList = ["Apple", "Microsoft", "Google", "Facebook"];

// myList.push("Oracle");

// console.log(myList);
// console.log(myList.length);
// console.log(myList[0]);

//shift, unshift, pop
// let myList = ["Apple", "Microsoft", "Google", "Facebook", "Oracle"];
// console.log(myList);
// console.log(myList.shift()); //shift removes the first element from the array
// console.log(myList);
// console.log(myList.pop()); //pop removes the last element from the array
// console.log(myList);
// myList.unshift("Samsung"); //unshift adds an element to the beginning of the array
// console.log(myList);

//splice and slice
let myList = ["Apple", "Microsoft", "Google", "Facebook", "Oracle"];
console.log(myList);
myList.splice(5, 0, "Samsung"); //splice adds an element to an array at the specified index
console.log(myList);
let bestTechCompany = myList.slice(0, 2); //slice returns a new array with the elements at the specified index
console.log(bestTechCompany);
