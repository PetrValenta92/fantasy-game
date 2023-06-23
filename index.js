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


function renderCharacter(character) {

   const {elementId, name, avatar, health, diceRoll, diceCount} = character;

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

renderCharacter(hero);
renderCharacter(monster);







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