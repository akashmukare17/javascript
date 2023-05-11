
console.log('*Before Swap');
var sweety = 'Sweety';
var cutie = 'Cutie';
console.log("First Variable-->", sweety);
console.log("Second Variable-->", cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;
console.log('');
console.log('*After Swap');
console.log("First Variable-->", sweety);
console.log("Second Variable-->", cutie);

console.log("-------------------------------");

console.log("*Before Swap");
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("First Variable-->",num1);
console.log("Second Variable-->",num2);
console.log("Third Variable-->",num3);

var temp1 = num1;
num1 = num2;
num2 = num3;
num3 = temp1;
console.log("");
console.log("*After Swap");
console.log("First Variable-->",num1);
console.log("Second Variable-->",num2);
console.log("Third Variable-->",num3);