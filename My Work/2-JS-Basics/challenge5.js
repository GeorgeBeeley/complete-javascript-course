function tipCalculator(person, price) {
  var sum, tip;
  switch (person) {
    case 'John' :
      if (price < 50) {
        tip = price * 0.20;
      } else if (50 <= price && price < 200) {
        tip = price * 0.15;
      } else {
        tip = price * 0.1;
      }
      break;
    case 'Mark' :
      if (price < 100) {
        tip = price * 0.20;
      } else if (100 <= price && price < 300) {
        tip = price * 0.1;
      } else {
        tip = price * 0.25;
      }
      break;
    default:
      break;
  }
  tip = parseFloat(tip.toFixed(2));
  sum = price + tip;
  return [tip, sum];
}

var johnMealPrices = {
  name: 'John',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.totals = [];
    var totalTips = 0;
    for (var i = 0; i < this.bills.length; i++) {
      var a = tipCalculator(this.name, this.bills[i]);
      this.tips.push(a[0]);
      this.totals.push(a[1]);
      totalTips += a[0];
    }
    this.tipAverage = parseFloat((totalTips / this.bills.length).toFixed(2));
    console.log(this.tipAverage);
    return [this.tips, this.totals];
  }
};

var markMealPrices = {
  name: 'Mark',
  bills: [77, 375, 110, 45]
};

// now using method borrowing!! (section 3, lecture 42: the 'this' context object)
markMealPrices.calcTips = johnMealPrices.calcTips;

console.log(johnMealPrices.calcTips());
console.log(markMealPrices.calcTips());

function compareTippers() {
  console.log("John Tips:\t" + johnMealPrices.tips.map(a => ' ' + a));
  console.log("John Totals:\t" + johnMealPrices.totals.map(a => ' ' + a));
  console.log("John Avg Tip:\t " + johnMealPrices.tipAverage);
  console.log("Mark Tips:\t" + markMealPrices.tips.map(a => ' ' + a));
  console.log("Mark Totals:\t" + markMealPrices.totals.map(a => ' ' + a));
  console.log("Mark Avg Tip:\t " + markMealPrices.tipAverage);

  if (johnMealPrices.tipAverage < markMealPrices.tipAverage) {
    console.log('Mark tips more on average than John.');
  } else if (markMealPrices.tipAverage < johnMealPrices.tipAverage) {
    console.log('John tips more on average than John.');
  } else {
    console.log('John and Mark tip the same on average.');
  }
}
