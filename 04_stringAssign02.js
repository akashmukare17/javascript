

function stringHandsOn() {
    console.log("1) Given String");
    var givenString = "     Hey you are doing good, keep it up       ";
    console.log("Given String: ",givenString);
    console.log("-----------------------------------------------------");

    console.log("2) Calculate length of string");
    var stringLength = givenString.length;
    console.log("Total number of char in given string:",stringLength);
    console.log("-----------------------------------------------------");

    console.log("3) Removing extra spaces from string");
    var trimString = givenString.trim();
    console.log("Length of string after removing extra spaces:",trimString.length);
    console.log("-----------------------------------------------------");

    console.log("4) Calculate removed extra spaces from string");
    var removedSpaces = (stringLength)-(trimString.length);
    console.log("Count of removed spaces from given string:", removedSpaces);
    console.log("-----------------------------------------------------");

    console.log("5) Fisrt and Last Char after trim");
    var firstChar = trimString.charAt(0);
    var lastChar = trimString.charAt(trimString.length-1);
    console.log("Frist and last char of string aftre removing extra spaces:", firstChar, lastChar);
    console.log("-----------------------------------------------------");
}
stringHandsOn();
