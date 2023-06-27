// Named import must have the same name and curly brackets!!!
import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

function Character(data) {
   // Take data from "data.js" and convert it to "this" constructor function
    Object.assign(this, data);

    // Add data from getDicePlaceholderHtml() and add it into the "this" BUT NOT into "data"
    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    this.currentDiceScore = new Array();

    this.getDiceHtml = function(diceCount) {
       return getDiceRollArray(diceCount).map( function (num) {
          return `<div class="dice">${num}</div>`;   
       }).join('');
    }
 
    this.getCharacterHtml = function() {
       const { name, avatar, health, diceCount, diceArray } = this;       
       
       return `
          <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <img class="avatar" src="${avatar}" />
             <div class="health">health: <b> ${health} </b></div>
             <div class="dice-container">    
                ${diceArray}
             </div>
          </div>`;
    }
 }

 export default Character;