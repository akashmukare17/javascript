function stringHandsOn() {
  var givenString = "    Hey you are doing good, keep it up   ";
  console.log("1) Given String");
  console.log(`Given String = ${givenString}`);

  console.log("-------------------------------------------------------------------");
  var lengthOfString = givenString.length;
  console.log("2) Lenth of string");
  console.log(`Length of  String is= ${lengthOfString}`);
  console.log("-------------------------------------------------------------------");

  var trimmedgivenString = givenString.trim();
  console.log("3) Removing extra spaces");
  console.log(`After Trim givenString is: ${trimmedgivenString}`);
  console.log(`Lenght Trim givenString is: ${trimmedgivenString.length}`);
  console.log("-------------------------------------------------------------------");

  console.log("4) Total number of extra spaces");
  console.log(`Total number extra spaces : ${givenString.length - trimmedgivenString.length}`);
  console.log("--------------------------------------------------------------------");

  console.log("5) After trim first and last char of givem string");
  trimmedgivenString.charAt(0);
  console.log(`first  character  : ${trimmedgivenString.charAt(0)}`);
  const last = trimmedgivenString.charAt(trimmedgivenString.length - 1);
  console.log(`Last  character  : ${last}`);
  console.log("--------------------------------------------------------------------");

  
  /////////////////////////////////////////////////////////////////////////////
  var trimmedgivenString = givenString.trim();
  var resultSplit = trimmedgivenString.split(" ");

  console.log("6) Total number of words in given string");
  console.log(`the count of total words available in the string :-${resultSplit.length}`);
  console.log("--------------------------------------------------------------------");

  var indexOfgood = trimmedgivenString.indexOf("good");
  console.log("7) Index of good");
  console.log(`The index of word "good" :-${indexOfgood}`);
  console.log("--------------------------------------------------------------------");
  
  var result = trimmedgivenString.endsWith("up");
  console.log("8) is string ends with up");
  console.log(`The istring ends with word “up” :-   ${result}`);
  console.log("--------------------------------------------------------------------");
  
  var result1 = trimmedgivenString.startsWith("Hey");
  console.log("9) is string start with Hey");
  console.log(`The istring Starts with word “Hey” :-   ${result1}`);
  console.log("--------------------------------------------------------------------");
 }
stringHandsOn();
