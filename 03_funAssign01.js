
console.log("*Function Without any Arguments*");
function myName(){
    console.log("My Name is Akash");
}
myName();
function myAge() {
    console.log("My Age is 22");
}
myAge();
console.log("-----------------------------------------------");
console.log("*Function with Arguments*");
function personalDetails(firstName, lastName, collegeName){
    console.log("My Personal Details is");
    console.log("My Name is: ", firstName, lastName);
    console.log("College Name: ", collegeName);
}
personalDetails("Akash","Mukare","DY Patil");
console.log("-----------------------------------------------");

console.log("*Before and After swap*");
var a = "Virat";
var b = "Anushka";

var num1 = 1000;
var num2 = 2000;
function swapValuesDued(value1, value2) {
    console.log("Before Swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    console.log("After Swap:", value1, value2);
}
swapValuesDued(a, b);
swapValuesDued(num1, num2);
console.log("----------------------------------------------");

console.log("*Addition of three values*");
var num1 = 10.23;
var num2 = 600;
var num3 = 40;

var word1 = "Hello";
var word2 = " Good";
var word3 = " Morning"
function addThreeValues(value1, value2, value3) {
    result = num1+num2+num3;
    result = word1+word2+word3;
    console.log("Addition of three numbers:", result);
    console.log("Addition of three words:", result);
}
addThreeValues(num1, num2, num3);