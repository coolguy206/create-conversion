// var sentence = prompt("Enter a sentence:");

// // function sentence(str) {
// //   return str.replace
// // }
//   var sentence.charAt(0).toUpperCase();
// alert(sentence);

var sentence = function (question) {
  var firstLetter = question.charAt(0).toUpperCase();
  var lastLetter = question.substr(question.length -1).toUpperCase();
  console.log(lastLetter);
    return firstLetter + lastLetter;
};

var question = prompt("Enter a sentence");
var result = sentence(question);
console.log(result);


// var gallonToLiters = function (gallon) {
//   return 3.7854 * gallon;
// };
//
// var gallon = parseInt(prompt("Enter gallon to convert to liter:"));
// var result = gallonToLiters(gallon);
// alert(result);
