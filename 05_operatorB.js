console.log(`************Ternary Operator Assign1************`);
console.log(`------------------------------------------------`);
console.log(`1) Find the greatest number`);
console.log("");
greaterNumber = function (num1, num2) {
    var result = num1>=num2? `${num1}`:`${num2}`;
    console.log(`Greater number between (${num1},${num2}) is: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(`------------------------------------------------`);

console.log(`2) Check Even or Odd number`);
console.log("");
var isEvenOrOddNum = function (num){
   var result = num%2 ==0? `${num} is Even number`:`${num} is Odd number`;
   return result;
}
var result = isEvenOrOddNum (29);
console.log(result);
var result = isEvenOrOddNum (44);
console.log(result);
var result = isEvenOrOddNum (0);
console.log(result);
var result = isEvenOrOddNum (101);
console.log(result);
console.log(`------------------------------------------------`);

console.log(`3) Check word length is Even or Odd`);
console.log("");
var wordLength = function (word){
    var result = word.length%2 == 0? `"${word}" has even word length`: `"${word}" has odd word length`;
    return result;
}
var word1 = wordLength("JavaScript");
console.log(word1);
var word2 = wordLength("Developer");
console.log(word2);
var word3 = wordLength("Google");
console.log(word3);
console.log(`------------------------------------------------`);
