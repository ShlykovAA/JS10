console.log("Hello!!!");

// Create class Vehicle
// Initialize class with properties power, gasTank and mass in tones Calculate max speed by formula 0.84 * power / mass
// Create method getMaxSpeed that returns maxSpeed
// Calculate gas usage per km by formula Math.round(maxSpeed / power * 100)
// Create method getGasUsage that returns gasUsage 
// Create method startEngine that sets property started to true Create method stopEngine that sets property started to false Create method drive. This method receives 2 arguments speed and distance in km
// You cannot drive if started is false
// You cannot set speed more then maxSpeed and less then 0
// Update gas property corresponding to gasUsage Formula to calculate gas level is distance * gasUsage / 100
// Create method addGas adds gas to car by arg
// Argument must be bigger then zero
// You cannot pour more gas then gasTank
// Create method printInfo that prints in console all available information

// Create class Car
// Car should inherit from Vehicle
// Initialize Car with additional properties type and maxPassengerCount
// Examples of type SEDAN, MINIVAN, SPORTS CAR...
// Update method printInfo that prints in console all available information

// Create class Bus
// Bus should inherit from Car Create method updatePassengers that receives argument passengers and updates passengerCount to that number
// passengerCount cannot be more then maxPassengerCount and less then 0
// Update method printInfo that prints in console all available information

class Vehicle {
    constructor(power, gasTank, mass){
        this.power = power;
        this.gasTank = gasTank;
        this.mass = mass;
        this.tankLevel = this.gasTank;
    }
    started = false;
    speed = 0;
    maxSpeed(){
        return 0.84 * this.power / this.mass;
    }
    gasUsage(){
        return Math.round(this.maxSpeed() / this.power * 100);
    }
    getMaxSpeed(){
        return this.maxSpeed();
    }
    getGasUsage(){
        return this.gasUsage();
    }
    startEngine(){
        this.started = true;
        return this;
    }
    stopEngine(){
        this.started = false;
        this.speed = 0;
        return this;
    }
    drive(speed, distance){
        if (this.started === true) {
            this.speed = speed;
            if (this.speed > this.maxSpeed()){
                this.speed = this.maxSpeed();
            } else if (this.speed < 0){
                this.speed = 0;
            }
            const gasLevel = distance * this.gasUsage() / 100;
            if (this.tankLevel - gasLevel < 0) {
                const notEnoughGas = gasLevel - this.tankLevel;
                this.tankLevel = 0;
                return `Not enough ${notEnoughGas} gasoline, please use the gas station (addGas method) on the way.`
            } else {
                this.tankLevel = this.tankLevel - gasLevel;
                return this;
            }
        } else {
            return "Engine not running";
        }
    }
    addGas(gas){
        if (gas > 0){
            this.tankLevel = this.tankLevel + gas;
            if (this.tankLevel > this.gasTank){
                this.tankLevel = this.gasTank;
                return this;
            }
            return this;
        } else {
            return `You can't add less than zero gas.`;
        }
    }
    printInfo(){
        return `Power and mass: ${this.power}/${this.mass} Gas: ${this.tankLevel}/${this.gasTank} Current/Max speed: ${this.speed}/${this.maxSpeed()}`
    }
}

class Car extends Vehicle {
    constructor(power, gasTank, mass, type, maxPassengerCount){
        super(power, gasTank, mass);
        this.type = type;
        this.maxPassengerCount = maxPassengerCount;
    }
    printInfo(){
        return `Type: ${this.type} Capacity: ${this.maxPassengerCount} Power and mass: ${this.power}/${this.mass} Gas: ${this.tankLevel}/${this.gasTank} Current/Max speed: ${this.speed}/${this.maxSpeed()}`;
    }
}

class Bus extends Car {
    passengerCount = 0;
    updatePassengers(passengers) {
        this.passengerCount = passengers;
        if(this.passengerCount < 0) {
            this.passengerCount = 0;
            return "Passengers cannot be less than zero";
        } else if (this.passengerCount > this.maxPassengerCount) {
            this.passengerCount = this.maxPassengerCount
            return `Maximum number of passengers is ${this.maxPassengerCount}`;
        }
        return this;
    }
    printInfo(){
        return `Type: ${this.type} | Passenger now/max: ${this.passengerCount}/${this.maxPassengerCount} | Power and mass: ${this.power}/${this.mass} | Gas: ${this.tankLevel}/${this.gasTank} | Current/Max speed: ${this.speed}/${this.maxSpeed()}`
    }
}

const man = new Bus(270, 60, 4, "Bus", 44);