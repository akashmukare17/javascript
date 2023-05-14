


var greet = "Good Morning mate, How are you";
var splitResult = greet.split(" ");
console.log("Spilt result:", splitResult);
console.log("After split words are:", splitResult,"total number of words:", splitResult.length);
console.log(`After split words are: ${splitResult} total number of words: ${splitResult.length}`);

console.log(`Given string is: ${greet}`);

var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(`Is ${myName} start with char E: ${result}`);

var result = myName.startsWith("Elon");
console.log(`Is ${myName} start with char "Elon": ${result}`);

var result = myName.startsWith("elon");
console.log(`Is ${myName} start with char "elon": ${result}`);

var result = myName.endsWith("k");
console.log(`Is ${myName} end with "k":  ${result}`);