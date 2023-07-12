import charData from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
   const nextMonsterData = charData[monstersArray.shift()];
   return nextMonsterData ? new Character(nextMonsterData) : {};
} 

function attack() {
   wizard.setDiceHtml();
   monster.setDiceHtml();

   wizard.takeDamage(monster.currentDiceScore);
   monster.takeDamage(wizard.currentDiceScore);

   render();

   if (wizard.dead) {
      endGame();
   } else if (monster.dead) {
      
      if (monstersArray.length > 0) {
         document.getElementById('attack-button').disabled = true;
         setTimeout(() => {
            monster = getNewMonster();
            render();
         }, 1250);
      } else {
         endGame();
      }
   }
}

function endGame() {
   document.getElementById('attack-button').disabled = true;

   const endMessage = wizard.health === 0 && monster.health === 0 
      ? 'No victors - all creatures are dead'
      : wizard.health > 0 ? 'The Wizard Wins' 
      : `The ${monster.name} is Victorious` ;

   const endEmoji = endMessage === 'The Wizard Wins' ? '🔮' : '☠️';

   setTimeout(() => {
      document.body.innerHTML = `
         <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
         </div>` 
   }, 1500);
   
}

function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
   document.getElementById('monster').innerHTML = monster.getCharacterHtml();

   document.getElementById('attack-button').disabled = false;
};

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(charData.hero);
let monster = getNewMonster();

render();



// --------------------------------- OBJECT DESTRUCTURING --------------------------------------------

// ------------ Object -----------------
// const favouriteFilm = {
//    title: "Top Gun",
//    year: "1986",
//    genre: "action",
//    star: "Tom Cruise",
//    director: "Tony Scott"
// } 

// ----------- Possible but not DRY method -----------
// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre 
// const star = favouriteFilm.star
// const director = favouriteFilm.director

// ------------- Destructured object --------------
// const {title, year, genre, star, director} = favouriteFilm


// ------------- Code ------------------
// console.log(`My favourite film is ${title} 
// starring ${star}. It's an ${genre} film that 
// was directed by ${director} and released in ${year}`)

// -------------- Output -------------------
//My favourite film is Top Gun starring Tom Cruise. It's an action film that was directed by Tony Scott and released in 1986

// ------------------------------ THE .map() METHOD ----------------------------------------------

// For loops are repetetive, clunky and messy
// There's a modern and more easier way to do this
// let diceHtml = '';
// for (let i = 0; i < diceCount; i++) {
//    diceHtml += `<div class="dice">${diceRoll[i]}</div>`
// }

// JavaScript mothod for iterating over arrays 
// .map() method always returns an array

// ------------- Example -------------------------------
// const energyCostEuros = [140, 153, 164, 153, 128, 146]
// const exchangeRate = 1.13

// const energyCostDollars = energyCostEuros.map(function(euroCost){
//    return euroCost * exchangeRate
// })

// ----------------------------------- THE .join() METHOD --------------------------------------------
// JavaScript mothod for creating strings from arrays 
// Concatenates the elements of the array into a string
// Let you choose how the elements are separated
// Always returns a string

// ------------------ Example -------------------
// const cssClassesArray = ['btn', 'btn-primary', 'btn-active', 'btn-sidebar']

// const cssClassesString = cssClassesArray.join(' .')

// -----------------------------------
// Functions returning a function
// Array constructor
// --------------------------------

// ----------------------------------- THE .fill() METHOD --------------------------------------------
// It converts the elements in an array to a provided static value

// -------------------------------- Example --------------------------------
// const goldCoins = new Array(1000).fill('🌕');

// ----------------------------------- CHAINING .fill() AND .map() -----------------------------------
// const poisonMushrooms = new Array(10).fill('🍄').map(function(mushroom){
//    return `<div class="box">${mushroom}</div>`;
// }).join('');

// ------------------------------------- CONSTRUCTOR FUNCTIONS -------------------------------------  
// Always write CF with first capital letter!
// In JS functions are objects
// "this" key word refers to the new object which is created

// ------------------------------------- Example --------------------------------
// ---------- Data -----------
// const animalForRelease1 = {
//    name: 'Tilly',
//    species: 'tiger',
//    weightKg: 56,
//    age: 2,
//    dateOfRelease: '03-02-2022'
// }
// const animalForRelease2 = {
//    name: 'Nelly',
//    species: 'elephant',
//    weightKg: 320,
//    age: 16,
//    dateOfRelease: '03-02-2022'
// }

// ------ Constructor function ----
// function Animal(data){
//    this.name = data.name
//    this.species = data.species
//    this.weightKg = data.weightKg
//    this.age = data.age
//    this.dateOfRelease = data.dateOfRelease
// -------- Method --------------
//   this.summariseAnimal = function(){
//      console.log(`${this.name} is a ${this.age} year old 
//      ${this.species} which weighs ${this.weightKg}kg and was 
//      released into the wild on ${this.dateOfRelease}`)
//   }
// }

// const tillyTheTiger = new Animal(animalForRelease1)
// const nellyTheElephant = new Animal(animalForRelease2)

// tillyTheTiger.summariseAnimal()
// nellyTheElephant.summariseAnimal()

// ----------------------------------------- METHODS -----------------------------------------------
// Properties on objects that contain functions
// If you can write a function, you can write a method

// ----------------------------------------- Object.assign() ----------------------------------------
// Copies properties from a source object into a target object
// Returns a new version of the target object

// Object.assign(target, source)
 
// ------------------------------------- THE .reduce() METHOD ----------------------------------------
// Returns just a one "thing" from the array

// ----------------------------- Example --------------------------
// const rainJanuaryByWeek = [ 10, 20, 0, 122 ]
// const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement){
//     return total + currentElement
// })
// console.log(totalRainfallJanuary) // 152

// -------------------------------------- THE TERNARY OPERATOR ----------------------------------------------------
// Alternative for if/else statement
// Replacement for if/else? NO!
// property = condition ? expression
//    : condition ? expression 
//    : expression

// ---------------------------- Example ----------------------------
// const exerciseTimeMins = 40
// ------------- if/else ------------
// let message = ''

// if (exerciseTimeMins < 30) {
//     message = 'You need to try harder!'
// }
// else if(exerciseTimeMins < 60) {
//     message = 'Doing good!'
// }
// else {
//     message = 'Excellent!'
// }
// ------- Ternary Operator --------
// const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
//     : exerciseTimeMins < 60 ? 'Doing good!' 
//     : 'Excellent!'

// ---------------------------------------- ARROW FUNCTIONS -------------------------------------------
// If you have one parameter, you don't have to use brackets
// If you have zero or multiple parameters, you have to use brackets
// You can return one line of code without curly braces or the return keyword
// More complex logic requires the curly braces and the return keyword

// ---------------------------- Example --------------------------------
// function speedWarning(speed){
//    return `You are going at ${speed} mph!`
// }
// ----------- Arrow function -------------------
// const speedWarning = speed => `You are going at ${speed} mph!`;

// const speedWarning = (speedLimit, currentSpeed) => {
//    if (speedLimit < currentSpeed) {
//       return `You are going at ${currentSpeed} mph!`;
//    }
// };