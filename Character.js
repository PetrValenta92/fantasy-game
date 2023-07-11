// Named import must have the same name and curly brackets!!!
import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js";

function Character(data) {
   // Take data from "data.js" and convert it to "this" constructor function
    Object.assign(this, data);

    // Take data from getDicePlaceholderHtml() and add it into the "this" BUT NOT into "data"
    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    // Take data from currentDiceScore array and add it into this.diceArray property
    // Return a this.DiceArray = string of each dice HTML elements
    this.getDiceHtml = function() {

      // Fill currentDiceScore array with random numbers from getDiceRollArray() (depending on diceCount)
       this.currentDiceScore = getDiceRollArray(this.diceCount);
       this.diceArray = this.currentDiceScore.map( num => 
         `<div class="dice">${num}</div>` ).join('');
    }

    // The value of this.maxHealth is set at the beginning and doesn't change
    this.maxHealth = this.health;

    this.takeDamage = function (attackScoreArray) {

      const totalAttackScore = attackScoreArray.reduce( (total, score) =>  total + score );
      
      this.health -= totalAttackScore;

      if (this.health <= 0) {
         this.health = 0;
         this.dead = true;
      } 
    }

    this.getHealthBarHtml = function() {
      const percent = getPercentage(this.health, this.maxHealth);
      
      return `
         <div class="health-bar-outer">
            <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" 
               style="width: ${percent}%;">
            </div>
         </div>
      `
    }
    
    this.getCharacterHtml = function() {
       const { name, avatar, health, diceCount, diceArray } = this;
       const healthBar = this.getHealthBarHtml();       
       
       return `
          <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <img class="avatar" src="${avatar}" />
             <div class="health">health: <b> ${health} </b></div>
             ${healthBar}
             <div class="dice-container">    
                ${diceArray}
             </div>
          </div>`;
    }
 }

 export default Character;