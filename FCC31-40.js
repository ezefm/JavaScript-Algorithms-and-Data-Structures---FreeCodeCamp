//FreeCodeCamp (31) - JavaScript Algorithms and Data Structures
//Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
// Change code below this line
const someAdjective = "Funny";
let myStr = "Learning to code is ";
myStr += someAdjective;

//FreeCodeCamp (32) - JavaScript Algorithms and Data Structures
//Use the .length property to set lastNameLength to the number of characters in lastName.
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//FreeCodeCamp (33) - JavaScript Algorithms and Data Structures
//Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

// Setup
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName1[0]; // Change this line

//FreeCodeCamp (34) - JavaScript Algorithms and Data Structures
//Correct the assignment to myStr so it contains the string value of 
//Hello World using the approach shown in the example above.

// Setup
let myStr2 = "Jello World";

// Only change code below this line
myStr2 = "Hello World"; // Change this line
// Only change code above this line

//FreeCodeCamp (35) - JavaScript Algorithms and Data Structures
/*Let's try to set thirdLetterOfLastName to equal the 
third letter of the lastName variable using bracket notation.

Hint: Try looking at the example above if you get stuck.
*/

const lastName2 = "Lovelace";
const thirdLetterOfLastName = lastName2[2]; // Change this line

//FreeCodeCamp (36) - JavaScript Algorithms and Data Structures
//Use bracket notation to find the last character in the lastName variable.
//Hint: Try looking at the example above if you get stuck.
// Setup
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName3[lastName.length -1]; // Change this line

//FreeCodeCamp (37) - JavaScript Algorithms and Data Structures
/*
Use bracket notation to find the second-to-last character 
in the lastName string.
Hint: Try looking at the example above if you get stuck.
*/
// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName4[lastName4.length-2]; // Change this line


//FreeCodeCamp (38) - JavaScript Algorithms and Data Structures
/*
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. 
You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: 
myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all 
the words. The result should be a complete sentence.
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".!"; // Change this line
// Only change code above this line

//FreeCodeCamp (39) - JavaScript Algorithms and Data Structures
//Modify the new array myArray so that it contains both a string and a number (in that order)
// Only change code below this line
const myArray = ["Eze", 26];

//FreeCodeCamp (40) - JavaScript Algorithms and Data Structures
//Create a nested array called myArray.
// Only change code below this line
const myArray2 = [["Eze", 26], ["Fer", 26]];