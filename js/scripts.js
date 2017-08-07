//3.7854L/1gal

var gallonToLiters = function (gallon) {
  return 3.7854 * gallon;
};

var gallon = parseInt(prompt("Enter gallon to convert to liter:"));
var result = gallonToLiters(gallon);
alert(result);

//Conver tablespoons to teaspoons 1 Tablespoon = 3 Teaspoons
var tablespoonToTeaspoon = function (Tablespoon) {
  return 3 * Tablespoon;
};
var Tablespoon = parseInt(prompt("Enter Tablespoon quantity"));
var result = tablespoonToTeaspoon(Tablespoon);
alert(result);

//convert
