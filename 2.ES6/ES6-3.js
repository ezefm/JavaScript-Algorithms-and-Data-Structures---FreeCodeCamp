//FreeCodeCamp (21) - JavaScript Algorithms and Data Structures - ES6

import { uppercaseString, lowercaseString } from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//FreeCodeCamp (22) - JavaScript Algorithms and Data Structures - ES6

import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//FreeCodeCamp (23) - JavaScript Algorithms and Data Structures - ES6

export default function subtract(x, y) {
    return x - y;
  }

//FreeCodeCamp (24) - JavaScript Algorithms and Data Structures - ES6

import subtract from './math_functions.js';
// Only change code above this line

subtract(7,4);

//FreeCodeCamp (25) - JavaScript Algorithms and Data Structures - ES6

const makeServerRequest = new Promise( (resolve,reject) => {

} );

//FreeCodeCamp (26) - JavaScript Algorithms and Data Structures - ES6
const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer ;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});

//FreeCodeCamp (27) - JavaScript Algorithms and Data Structures - ES6

const makeServerRequest2 = new Promise((resolve, reject) => {

    let responseFromServer = true;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest2.then(result => {
    console.log(result)
  });

//FreeCodeCamp (28) - JavaScript Algorithms and Data Structures - ES6

const makeServerRequest4 = new Promise((resolve, reject) => {
    let responseFromServer = false;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});
  
makeServerRequest4.then(result => {
    console.log(result);
});
  
makeServerRequest4.catch(error => {
    console.log(error);
});

