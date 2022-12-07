//FreeCodeCamp (1) - JavaScript Algorithms and Data Structures - Basic Data Structures

let yourArray = ["arr", 2, true, false, 3]; 

//FreeCodeCamp (2) - JavaScript Algorithms and Data Structures - Basic Data Structures

let myArray = ["a", "b", "c", "d"];
myArray[1] = "Devlights";
console.log(myArray);

//FreeCodeCamp (3) - JavaScript Algorithms and Data Structures - Basic Data Structures

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
} 
console.log(mixedNumbers(['IV', 5, 'six']));

//FreeCodeCamp (4) - JavaScript Algorithms and Data Structures - Basic Data Structures

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//FreeCodeCamp (5) - JavaScript Algorithms and Data Structures - Basic Data Structures

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 1);
arr.splice(2, 4);
console.log(arr);

//FreeCodeCamp (6) - JavaScript Algorithms and Data Structures - Basic Data Structures

function htmlColorNames(arr) {
  
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}
  
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//FreeCodeCamp (7) - JavaScript Algorithms and Data Structures - Basic Data Structures

function forecast(arr) {
    return arr.slice(2,4);
}
  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//FreeCodeCamp (8) - JavaScript Algorithms and Data Structures - Basic Data Structures

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);  
      num--;
    }
    return newArr;
  }
  
console.log(copyMachine([true, false, true], 2));

//FreeCodeCamp (9) - JavaScript Algorithms and Data Structures - Basic Data Structures

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']
    return sentence;
  }
  
  console.log(spreadOut());

//FreeCodeCamp (10) - JavaScript Algorithms and Data Structures - Basic Data Structures

function quickCheck(arr, elem) {
    let result = arr.indexOf(elem) === -1 ? false : true;
    return result;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));