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