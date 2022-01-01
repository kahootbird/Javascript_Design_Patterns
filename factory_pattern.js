
// ES2015+ keywords/syntax used: class, constructor, const,
//               destructuring assignment syntax

// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
class Car {
    constructor({
        doors,
        state,
        color
    }) {
        // some defaults
        this.doors = doors || 4;
        this.state = state || 'brand new';
        this.color = color || 'silver';
    }
}
// A constructor for defining new trucks
class Truck {
    constructor({
        state,
        wheelSize,
        color
    }) {
        this.state = state || 'used';
        this.wheelSize = wheelSize || 'large';
        this.color = color || 'blue';
    }
}

// FactoryExample.js

// Define a vehicle factory
class VehicleFactory {
    // Define the prototypes and utilities for this factory

    // Our default vehicleClass is Car
    constructor() {
        this.vehicleClass = Car;
    }
    // Our Factory method for creating new Vehicle instances
    createVehicle(options) {
        switch (options.vehicleType) {
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
                //defaults to VehicleFactory.prototype.vehicleClass (Car)
        }

        return new this.vehicleClass(options);
    }
}

// Create an instance of our factory that makes cars
const carFactory = new VehicleFactory();
//Omit doors to demonstrate is will be defaulted to 4
const car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow'
});

console.log(car instanceof Car);
console.log(car);
//Result: true, Car { doors: 4, state: 'brand new', color: 'yellow' }
