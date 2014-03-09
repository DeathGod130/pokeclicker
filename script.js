var pokemonElement = document.getElementById("pokemon")
var pokemon = 0;
var money = 0;
var sell = document.getElementById("sell")
var moneyElement = document.getElementById("money")
var pokeClicks = document.getElementById("pokeclicks")

pokeClicks.addEventListener("click", function() {
  catchPokemon(1);
}, false);

sell.addEventListener("click", function() {
  sellPokemon(5);
}, false);

function catchPokemon(numbercaught) {
  pokemon += numbercaught;
  pokemonElement.innerHTML = pokemon;
}

function sellPokemon(moolah) {
  if (pokemon > 0) {
  pokemon --;
  pokemonElement.innerHTML = pokemon;
  money += moolah;
  moneyElement.innerHTML = money;
  }
  else {
  }
}
