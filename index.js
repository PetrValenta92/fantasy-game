const hero = {
   elementId: 'hero',
   name: 'Wizard',
   avatar: 'images/wizard.png',
   health: 60,
   diceCount: 3
}

const monster = {
   elementId: 'monster',
   name: 'Ork',
   avatar: 'images/orc.png',
   health: 10,
   diceCount: 1
}

function Character(data) {
   Object.assign(this, data);
   this.getCharacterHtml = function() {
      const { elementId, name, avatar, health, diceCount } = this;
      const diceHtml = getDiceHtml(diceCount);
      document.getElementById(elementId).innerHTML = 
         `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
               ${diceHtml}
            </div>
         </div>`;
   }
}

function getDiceRollArray(diceCount) {

   return new Array(diceCount).fill(0).map(function() {
      return Math.floor(Math.random() * 6) + 1;
   });
}

function getDiceHtml(diceCount) {

   return getDiceRollArray(diceCount).map( function (num) {
      return `<div class="dice">${num}</div>`;   
   }).join('');
}

const wizard = new Character(hero);
const ork = new Character(monster);

wizard.getCharacterHtml();
ork.getCharacterHtml();




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