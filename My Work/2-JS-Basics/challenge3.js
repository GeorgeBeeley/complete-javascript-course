function tipCalculator(price) {
  var sum, tip;
  if (price < 50) {
    tip = price * 0.20;
  } else if (50 <= price && price < 200) {
    tip = price * 0.15;
  } else {
    tip = price * 0.10;
  }
  tip = parseFloat(tip.toPrecision(3));
  sum = price + tip;
  return [tip, sum];
}

var mealPrices = [124, 48, 268];
var tipArray = [];
var sumArray = [];

for (var i = 0; i < mealPrices.length; i++) {
  tipArray.push(tipCalculator(mealPrices[i])[0]);
  sumArray.push(tipCalculator(mealPrices[i])[1]);
}

console.log("Tips:\t" + tipArray.map(a => ' ' + a + ' '));
console.log("Total:\t" + sumArray.map(a => ' ' + a + ' '));
