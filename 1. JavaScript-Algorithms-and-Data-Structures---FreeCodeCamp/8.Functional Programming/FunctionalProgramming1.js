//FreeCodeCamp (1) - JavaScript Algorithms and Data Structures - Functional Programming

/*
The members of freeCodeCamp happen to love tea.

In the code editor, the prepareTea and getTea functions are already defined for you. 
Call the getTea function to get 40 cups of tea for the team, and store them in 
the tea4TeamFCC variable
*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

//FreeCodeCamp (2) - JavaScript Algorithms and Data Structures - Functional Programming

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//FreeCodeCamp (3) - JavaScript Algorithms and Data Structures - Functional Programming

const Window = function(tabs) {
  this.tabs = tabs; 
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); 
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index); 
  const tabsAfterIndex = this.tabs.slice(index + 1); 
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 

const finalTabs = socialWindow
  .tabOpen() 
  .join(videoWindow.tabClose(2)) 
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//FreeCodeCamp (4) - JavaScript Algorithms and Data Structures - Functional Programming

let fixedValue = 4;

function incrementer() {
  return fixedValue+1;
}

//FreeCodeCamp (5) - JavaScript Algorithms and Data Structures - Functional Programming