// Place where to store functions that are used multiple times = utility functions


function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
       return Math.floor(Math.random() * 6) + 1;
    });
 }

 function getDicePlaceholderHtml(diceCount) {
   return new Array(diceCount).fill(0).map(function() {
      return `<div class="placeholder-dice"></div>`;
   }).join('');
 }

 const getPercentage = (remainingHealt, maximumHealt) => 
   (100 * remainingHealt) / maximumHealt;

 // Named export - only one at the time; must be in curly brackets!!!
 export {getDiceRollArray, getDicePlaceholderHtml, getPercentage} 