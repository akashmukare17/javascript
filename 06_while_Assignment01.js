console.log(`*************************While Loop Assignment*************************`);
console.log(`-----------------------------------------------------------------------`);

//1. Print numbers from 5 to 15 by incrementing 1
let num1 = 5;
let storeNum = "";
while (num1 <= 15){
    storeNum = storeNum + num1 + " ";
    num1++;
}
console.log(`1. Numbers from 5-15: [ ${storeNum} ]`);
console.log(`-----------------------------------------------------------------------`);

//2. Print numbers from 50 to 40 by decrementing by 1
let num2 = 50;
let storeNum2 = "";
while (num2 >= 40) {
    storeNum2 = storeNum2 + num2 + " ";
    num2--;
}
console.log(`2. Numbers from 50 to 40: [ ${storeNum2} ]`);
console.log(`-----------------------------------------------------------------------`);

//3. First 15 odd num
let num3 = 1;
let oddNum = 1;
let storeNum3 = "";
while (num3 <= 15) {
    storeNum3 = storeNum3 + oddNum + " ";
    oddNum = oddNum + 2;
    num3++
}
console.log(`3. First 15 odd numbers: [ ${storeNum3} ]`);
console.log(`-----------------------------------------------------------------------`);

//4. First 10 even numbers
let num4 = 1;
let evenNum = 2;
let storeNum4 = "";
while (num4 <= 10) {
    storeNum4 = storeNum4 + evenNum + " ";
    evenNum = evenNum + 2;
    num4++;
}
console.log(`4. first 10 even numbers: [ ${storeNum4} ]`);
console.log(`-----------------------------------------------------------------------`);

//5. Table of 5
let num5 = 1;
let tableOf5 = 5;
let storeNum5 = "";
while (num5 <= 10) {
    storeNum5 = storeNum5 + tableOf5 + " ";
    tableOf5 = tableOf5 + 5;
    num5++
}
console.log(`5. Table of 5: [ ${storeNum5} ]`);
console.log(`-----------------------------------------------------------------------`);
//6.Table of 10
let num6 = 1;
let tableOf10 = 10;
let storeNum6 = "";
while (num6 <= 10) {
    storeNum6 = storeNum6 + tableOf10 + " ";
    tableOf10 = tableOf10 + 10;
    num6++
}
console.log(`6. Table of 10: [ ${storeNum6} ]`);
console.log(`-----------------------------------------------------------------------`);

//7. Table of 10 in reverse order
let num7 = 1;
let reversetable = 100;
let storeNum7 = "";
while (num7 <= 10) {
    storeNum7 = storeNum7 + reversetable + " ";
    reversetable = reversetable - 10;
    num7++;
}
console.log(`7. Reverse table of 10: [ ${storeNum7} ]`);
console.log(`-----------------------------------------------------------------------`);