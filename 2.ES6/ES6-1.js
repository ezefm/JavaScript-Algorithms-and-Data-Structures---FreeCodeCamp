//FreeCodeCamp (1) - JavaScript Algorithms and Data Structures - ES6 

/*
Fix the code so that i declared in the if statement is a separate variable than 
i declared in the first line of the function. Be certain not to use the var 
keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and 
let keywords assign scope to the declared variable. When programming a 
function similar to the one used in this exercise, it is often better to 
use different variable names to avoid confusion.
*/

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

//FreeCodeCamp (2) - JavaScript Algorithms and Data Structures - ES6 

//An array is declared as const s = [5, 7, 2]. 
//Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7
  
}
editInPlace();

//FreeCodeCamp (3) - JavaScript Algorithms and Data Structures - ES6 

/*
In this challenge you are going to use Object.freeze to prevent mathematical 
constants from changing. You need to freeze the MATH_CONSTANTS object so 
that no one is able to alter the value of PI, add, or delete properties.
*/

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    // Only change code below this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

//FreeCodeCamp (4) - JavaScript Algorithms and Data Structures - ES6 

//Rewrite the function assigned to the variable magic which returns a new Date() 
//to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();

//FreeCodeCamp (5) - JavaScript Algorithms and Data Structures - ES6 

//Rewrite the myConcat function which appends contents of arr2 to arr1 
//so that the function uses arrow function syntax.

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));


//FreeCodeCamp (6) - JavaScript Algorithms and Data Structures - ES6

//Modify the function increment by adding default parameters so 
//that it will add 1 to number if value is not specified.