var george = {
  fullname: 'George Beeley',
  mass: 70,
  height: 1.8,
  calcBMI: function() {
    this.bmi = Math.round(this.mass / this.height**2);
    return this.bmi;
  }
};

var john = {
  fullname: 'John Smith',
  mass: 71,
  height: 1.8,
  calcBMI: function() {
    this.bmi = Math.round(this.mass / this.height**2);
    return this.bmi;
  }
};

if (george.calcBMI() > john.calcBMI()) {
  console.log('George has the higher BMI of ' + george.bmi);
} else if (john.bmi > george.bmi) {
  console.log('John has the lower BMI of ' + john.bmi);
} else {
  console.log('George and Mark have the same BMI of ' + george.bmi)
}
