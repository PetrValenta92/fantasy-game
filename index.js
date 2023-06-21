const hero = {
   elementId: 'hero',
   name: 'Wizard',
   avatar: 'images/wizard.png',
   health: 60,
   diceRoll: 6
}

const monster = {
   elementId: 'monster',
   name: 'Ork',
   avatar: 'images/orc.png',
   health: 10,
   diceRoll: 4
}

function renderCharacter(character) {

   const {elementId, name, avatar, health, diceRoll} = character;

   document.getElementById(elementId).innerHTML = `
      <div class="character-card">
         <h4 class="name">${name}</h4>
         <img class="avatar" src=${avatar} />
         <p class="health">health: <b>${health}</b></p>
         <div class="dice-container"><div class="dice">${diceRoll}</div></div>
      </div>
   `
}

renderCharacter(hero);
renderCharacter(monster);

// ----------------- OBJECT DESTRUCTURING ------------------------------

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