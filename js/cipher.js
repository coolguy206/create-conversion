// var sentence = prompt("Enter a sentence:");

// // function sentence(str) {
// //   return str.replace
// // }
//   var sentence.charAt(0).toUpperCase();
// alert(sentence);

var sentence = function (firstLetter)
{
    return firstLetter.charAt(-1).toUpperCase() + firstLetter.slice(0);
};

var firstLetter = prompt("Enter a sentence");
var result = sentence(firstLetter);
alert(result);


// var gallonToLiters = function (gallon) {
//   return 3.7854 * gallon;
// };
//
// var gallon = parseInt(prompt("Enter gallon to convert to liter:"));
// var result = gallonToLiters(gallon);
// alert(result);
