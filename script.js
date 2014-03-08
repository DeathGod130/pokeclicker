var pokemonElement = document.getElementById("pokemon")
var pokemon = 0;
var pokeClicks = document.getElementById("pokeclicks")

pokeClicks.addEventListener("click", function() {
  catchPokemon(1);
}, false);

function catchPokemon(numbercaught) {
  pokemon += numbercaught;
  pokemonElement.innerHTML = pokemon;
}
