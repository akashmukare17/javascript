



var arrayOfRollNumber = [67, 56, 78, 90, 60, 40];
console.log(`Type of array: ${typeof arrayOfRollNumber}`);

let lengthOfArray = arrayOfRollNumber.length;
console.log(`length of array: ${lengthOfArray}`);

//Accessing array element
const zeroIndexValue = arrayOfRollNumber[0];
//zeroIndexValue = 45; //can not change the const value
console.log(`Zero index value: ${zeroIndexValue}`);

//Accessing array element 90
const thirdIndexValue = arrayOfRollNumber[3];
console.log(`Third index value: ${thirdIndexValue}`);

//Accessing last element
let arrayLength = arrayOfRollNumber.length;
const lastElement = arrayOfRollNumber[arrayLength-1];
console.log(`Last element: ${lastElement}`);

//Adding element in the last position
arrayOfRollNumber.push(75);
arrayOfRollNumber.push(32);
arrayOfRollNumber.push(42, 64);
console.log(arrayOfRollNumber);

//Adding element in first position
arrayOfRollNumber.unshift(50);
console.log(arrayOfRollNumber);

//Removing last element
arrayOfRollNumber.pop();
console.log(arrayOfRollNumber);

//Removing first element
arrayOfRollNumber.shift();
console.log(arrayOfRollNumber);
console.log('');


var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];

//Update array element
console.log(`Updating the array value`);
arrayOfRollNumber[0] = 888;
console.log(arrayOfRollNumber);

//update the last element 40 with 77
arrayOfRollNumber[arrayOfRollNumber.length-1] = 77;
console.log(arrayOfRollNumber);
console.log('');

console.log('Slice');
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
const sliceOfArray = arrayOfRollNumber.slice(3);
console.log(sliceOfArray);

const sliceArr = arrayOfRollNumber.slice(2, 5);
console.log(sliceArr);
console.log('');

console.log(`"Splice"`);
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
const splicedArr = arrayOfRollNumber.splice(3);
console.log(splicedArr);

var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
const arrSpliced = arrayOfRollNumber.splice(2,5);
console.log(arrSpliced);
console.log(arrayOfRollNumber);

//Splice for insertion
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumber.splice(2, 0, 666, 444);
console.log(arrayOfRollNumber);

//Splice for insertion by replacing elements
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumber.splice(1, 1, 99, 88, 66, 77);
console.log(arrayOfRollNumber);

//Splice for insertion by replacing elements
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumber.splice(2, 2, 111, 22, 333);
console.log(arrayOfRollNumber );

