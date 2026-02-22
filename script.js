// 1. Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// add method to Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};


// 2. SportsCar constructor function
function SportsCar(make, model, topSpeed) {

  // inherit properties from Car
  Car.call(this, make, model);

  this.topSpeed = topSpeed;
}


// inherit prototype from Car
SportsCar.prototype = Object.create(Car.prototype);


// fix constructor reference
SportsCar.prototype.constructor = SportsCar;


// add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};


// Test
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
