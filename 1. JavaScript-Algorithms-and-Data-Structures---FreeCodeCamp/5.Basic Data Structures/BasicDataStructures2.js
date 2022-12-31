//FreeCodeCamp (11) - JavaScript Algorithms and Data Structures - Basic Data Structures
function filteredArray(arr, elem) {
    let newArr = [];
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(elem) === -1) newArr.push(arr[i]);
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//FreeCodeCamp (12) - JavaScript Algorithms and Data Structures - Basic Data Structures

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ["deep"]],
    [[["deeper"]],'mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7,[[["deepest"]]], '8.4876', 'arbitrary', 'depth']
];

//FreeCodeCamp (13) - JavaScript Algorithms and Data Structures - Basic Data Structures

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;

console.log(foods);

//FreeCodeCamp (14) - JavaScript Algorithms and Data Structures - Basic Data Structures
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);

//FreeCodeCamp (15) - JavaScript Algorithms and Data Structures - Basic Data Structures

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));

//FreeCodeCamp (16) - JavaScript Algorithms and Data Structures - Basic Data Structures

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

//FreeCodeCamp (17) - JavaScript Algorithms and Data Structures - Basic Data Structures

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return userObj.hasOwnProperty('Alan') && 
  userObj.hasOwnProperty('Jeff') &&
  userObj.hasOwnProperty('Sarah') &&
  userObj.hasOwnProperty('Ryan') 
}

console.log(isEveryoneHere(users));

//FreeCodeCamp (18) - JavaScript Algorithms and Data Structures - Basic Data Structures

const users2 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let number = 0;
  for(let user in usersObj){
    if(usersObj[user].online){
      number += 1;
    }
  }
  return number;
}

console.log(countOnline(users2));

//FreeCodeCamp (19) - JavaScript Algorithms and Data Structures - Basic Data Structures

let users3 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users3));

//FreeCodeCamp (20) - JavaScript Algorithms and Data Structures - Basic Data Structures

let user4 = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user4, 'Pete'));