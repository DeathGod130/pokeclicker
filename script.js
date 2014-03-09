function Item(name, price) {
  this.name = name;
  this.price = price;
  this.count = 0;

  this.outerListElement = document.createElement('li');

  this.outerListElement.className = 'item';

  this.countElement = document.createElement('span');

  this.countElement.className = 'amount right';
  this.countElement.appendChild(document.createTextNode(this.count));

  this.nameElement = document.createElement('h1');

  this.nameElement.appendChild(document.createTextNode(this.name));

  this.priceElement = document.createElement('span');

  this.priceElement.className = 'price';
  this.priceElement.appendChild(document.createTextNode('$' + this.price));

  this.itemButtons = document.createElement('div');

  this.itemButtons.className = 'item-buttons';

  this.purchaseButton = document.createElement('button');
  this.sellButton = document.createElement('button');

  this.purchaseButton.appendChild(document.createTextNode('Purchase'));
  this.sellButton.appendChild(document.createTextNode('Sell'));

  this.outerListElement.appendChild(this.countElement);
  this.outerListElement.appendChild(this.nameElement);
  this.outerListElement.appendChild(this.priceElement);
  this.outerListElement.appendChild(this.itemButtons);
  this.itemButtons.appendChild(this.purchaseButton);
  this.itemButtons.appendChild(this.sellButton);

  var that = this;

  this.purchaseButton.addEventListener('click', function() {
    Item.prototype.buy(that);
  });
  this.sellButton.addEventListener('click', function() {
    Item.prototype.sell(that);
  });
}

Item.prototype.buy = function(item) {
  if(money - item.price >= 0) {
    item.count++;
    money -= item.price;

    item.countElement.innerHTML = item.count;
    moneyElement.innerHTML = money;
  }
}

Item.prototype.sell = function(item) {
  if(item.count > 0) {
    tem.count--;
    money += (item.price / 2);

    item.countElement.innerHTML = item.count;
    moneyElement.innerHTML = money;
  }
}

Item.prototype.getElement = function() {
  return this.outerListElement;
}

function CatchItem(name, price, catchInterval) {
  Item.call(this, name, price);

  this.catchInterval = catchInterval;

  var that = this;

  setInterval(function() {
    CatchItem.prototype.catch(that);
  }, this.catchInterval);
}

CatchItem.prototype = new Item();

CatchItem.prototype.constructor = CatchItem;

CatchItem.prototype.catch = function(item) {
  if(item.count > 0){
    pokemon += item.count;

    pokemonElement.innerHTML = pokemon;
  }
}

function SellItem(name, price, sellInterval) {
  Item.call(this, name, price);

  this.sellInterval = sellInterval;

  var that = this;

  setInterval(function() {
    SellItem.prototype.distribute(that);
  }, this.sellInterval);
}

SellItem.prototype = new Item();

SellItem.prototype.constructor = SellItem;

SellItem.prototype.distribute = function(item) {
  if(pokemon > 0){
    pokemon -= item.count;
    money += 5 * item.count;

    pokemonElement.innerHTML = pokemon;
    moneyElement.innerHTML = money;
  }
}

var pitchingMachine = new CatchItem('Pitching Machine', 100, 5000);
document.getElementById('catchItems').appendChild(pitchingMachine.getElement());

var professor = new SellItem('Shady Professor', 200, 7000);
document.getElementById('sellItems').appendChild(professor.getElement());

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
