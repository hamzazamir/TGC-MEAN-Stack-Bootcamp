let num1 = 20;
let num2 = 30;
let num3 = 10;

if (num1 < num3 && num1 < num2) {
  console.log(`${num1} is the lowest number`);
} else if (num2 < num1 && num2 < num3) {
  console.log(`${num2} is the lowest number`);
} else if (num3 < num1 && num3 < num2) {
  console.log(`${num3} is the lowest number`);
} else console.log("Error!");
