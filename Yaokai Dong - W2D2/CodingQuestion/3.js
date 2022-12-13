/* 
Please implement the following classes in both pre-ES6 (prototypes) & ES6 (class) styles. 

- Create a Vehicle class that contains the properties engine and speed. 
- Add a method info(), which logs the engine & speed values.  
- Create a Car class that inherits from the Vehicle class.
- Add more properties wheels and brake
- Add a method honk(), which logs “Honk!”.
- Add a static method isTesla(car), which takes an argument car object and returns true if its
brake property is true, otherwise false.
Note: Static methods are invoked by calling it on the class itself, so Car.isTesla().
*/

// 1. ES5(prototypes)
const Vehicle = function(engine, speed) {
  this.engine = engine;
  this.speed = speed;
};

Vehicle.prototype.info = function() {
  console.log(`Engine: ${this.engine} | Speed: ${this.speed}`);
};

const Car = function(engine, speed, wheels, brake) {
  Vehicle.call(this, engine, speed);
  this.wheels = wheels;
  this.brake = brake;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// protoeype method
Car.prototype.honk = function() {
  console.log("Honk!");
};
Car.prototype.getCarFullInfo = function() {
  console.log(`Engine: ${this.engine} | Speed: ${this.speed} | Wheels: ${this.wheels} | Brake: ${this.brake}`);
};

// static method
Car.isTesla = function (carObj) {
  return carObj.brake;
};


// 2.ES6 (class)
class Vehicle {
  constructor(engine, speed) {
    this.engine = engine;
    this.speed = speed;
  }
  info () {
    console.log(`Engine: ${this.engine} | Speed: ${this.speed}`);
  }
};

class Car extends Vehicle {
  constructor(engine, speed, wheels, brake) {
    super(engine, speed);
    this.wheels = wheels;
    this.brake = brake;
  }
  honk () {
    console.log("Honk!");
  }
  getCarFullInfo () {
    console.log(`Engine: ${this.engine} | Speed: ${this.speed} | Wheels: ${this.wheels} | Brake: ${this.brake}`);
  }
  static isTesla(carObj) {
    return carObj.brake;
  }
}

// test cases:
const car1 = new Car("the engine", "the speed", "the wheels", true);

// console.log(Car.isTesla(car1)); // output: true
// console.log(car1 instanceof Car); // output: true
// console.log(car1 instanceof Vehicle); // output: true
// car1.honk(); // output: "Honk!"
// car1.info(); // Engine: the engine | Speed: the speed
// car1.getCarFullInfo(); // "Engine: the engine | Speed: the speed | Wheels: the wheels | Brake: true"

