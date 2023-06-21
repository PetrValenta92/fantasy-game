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

function getHeroHtml() {
   let heroHtml = '';
   heroHtml = `
      <div class="character-card">
          <h4 class="name">Wizard</h4>
          <img class="avatar" src="images/wizard.png" />
          <p class="health">health: <b> 60 </b></p>
          <div class="dice-container"><div class="dice">6</div></div>
      </div>
   `
   return heroHtml;
}

function getMonsterHtml() {
   let monsterHtml = '';
   monsterHtml = `
      <div class="character-card">
          <h4 class="name">Orc</h4>
          <img class="avatar" src="images/orc.png" />
          <p class="health">health: <b> 10 </b></p>
          <div class="dice-container"><div class="dice">4</div></div>
      </div>
   `

   return monsterHtml;
}

function renderHero() {
   document.getElementById("hero").innerHTML = getHeroHtml();
}

function renderMonster() {
   document.getElementById("monster").innerHTML = getMonsterHtml();
}

renderHero();
renderMonster();