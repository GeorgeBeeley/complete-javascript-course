/*
Lecture 61
FUNCTION CONSTRUCTORS
*/

var john = {
  name: 'George',
  yearOfBirth: 1996,
  job: 'developer'
};

// conventions dictate constructors are defined using a leading capital letter
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
  }
}

// if the calculateAge function is not defined in the constructor, we can still give
// the instances access to methods by declaring them to the prototype like so...
Person.prototype.calculateAge = function () {
  console.log(2018 - this.yearOfBirth);
};

// atom has the shortcut available by typing 'proto'
ClassName.prototype.methodName = function () {

};

// the same can be done for properties, but is uncommon. You can see the uses though,
// if a constructor was only for members of the same family for example...
Person.prototype.lastName = 'Beeley';

// instanciating the Person constructor
// 1. 'new' ensures the 'this' variable is pointing at the new empty object that's
// created for john, not the global execution environment
// 2. once the empty object is created, it then calls the function ^^ in order to set
// and assign the new variables to the new object
var george = new Person('George', 1996, 'developer');
var charlie = new Person('Charlie', 1999, 'student');
var ruth = new Person('Ruth', 1994, 'designer');

george.calculateAge();
charlie.calculateAge();
ruth.calculateAge();
console.log(george.lastName);
console.log(charlie.lastName);
console.log(ruth.lastName);

var Tenant = function(firstName, lastName, yearOfBirth, contactNumber, roomNumber,
  rent, startDate, endDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.contactNumber = contactNumber;
  this.roomNumber = roomNumber;
  this.rent = rent;
  this.startDate = tenancyStartDate;
  this.endDate = endDate;
  this.monthlyRent = function() {
    console.log((this.rent * 52) / 12);
  }
}
