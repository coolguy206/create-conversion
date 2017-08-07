//Convert inch to cm 1 Inch = 2.54 Centimeters

var inchToCm = function(inch) {
  return 2.54 * inch;
  };

var inch = parseInt(prompt("Enter inches:"));
var results = inchToCm(inch);
alert(results + "cm");
