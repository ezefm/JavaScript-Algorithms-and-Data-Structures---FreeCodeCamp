//FreeCodeCamp (11) - JavaScript Algorithms and Data Structures - ES6

/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables lowToday and highToday the values of today.
low and today.high from the LOCAL_FORECAST object.
*/
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  // Only change code above this line
const {today: {low:lowToday, high:highToday}} = LOCAL_FORECAST;

//FreeCodeCamp (12) - JavaScript Algorithms and Data Structures - ES6

//Use destructuring assignment to swap the values of a and b so that a 
//receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]

//FreeCodeCamp (13) - JavaScript Algorithms and Data Structures - ES6

/*
Use a destructuring assignment with the rest parameter to emulate the 
behavior of Array.prototype.slice(). removeFirstTwo() should return a 
sub-array of the original array list with the first two elements omitted.
*/
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//FreeCodeCamp (14) - JavaScript Algorithms and Data Structures - ES6

//Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => (max + min) / 2.0; 
  // Only change code above this line


//FreeCodeCamp (15) - JavaScript Algorithms and Data Structures - ES6
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
const failuresList = makeList(result.failure);


//FreeCodeCamp (16) - JavaScript Algorithms and Data Structures - ES6

//Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => ({name, age, gender});

//FreeCodeCamp (17) - JavaScript Algorithms and Data Structures - ES6
//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

//FreeCodeCamp (18) - JavaScript Algorithms and Data Structures - ES6
/*
Use the class keyword and write a constructor to create the Vegetable class.
The Vegetable class allows you to create a vegetable object with a property 
name that gets passed to the constructor.
*/
// Only change code below this line
class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
  // Only change code above this line
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

//FreeCodeCamp (19) - JavaScript Algorithms and Data Structures - ES6

// Only change code below this line
class Thermostat{
    constructor(fahrenheit){
      this.fahrenheit = fahrenheit
    }
    get temperature(){
      return (5/9) * (this.fahrenheit-32);
    }
    set temperature(celsius){
      this.fahrenheit = celsius * 9 / 5 + 32;
    }
  }
  // Only change code above this line
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

//FreeCodeCamp (19) - JavaScript Algorithms and Data Structures - ES6

//Add a script to the HTML document of type module and give it the source file of index.js
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>

//FreeCodeCamp (20) - JavaScript Algorithms and Data Structures - ES6

export { uppercaseString, lowercaseString }

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}