"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicles;
(function (Vehicles) {
    let Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Orange"] = 1] = "Orange";
        Colors[Colors["Black"] = 2] = "Black";
        Colors[Colors["Blue"] = 3] = "Blue";
    })(Colors || (Colors = {}));
    class Car {
        _name;
        _engine;
        _color;
        constructor(name, engine, color) {
            this._name = name;
            this._engine = engine;
            this._color = Colors[color];
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get engine() {
            return this._engine;
        }
        set engine(engine) {
            this._engine = engine;
        }
        get color() {
            return this._color;
        }
        set color(color) {
            this._color = color;
        }
        get isOn() {
            return (this._engine.turnOn ? "Yes" : "No");
        }
        get myPower() {
            return this._engine.power;
        }
    }
    class Motocycle {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    Vehicles.Motocycle = Motocycle;
    class SportCar extends Car {
        constructor(name, color) {
            //super(name, new Engines.Engine(1000, 6, new Engines.Charge(100), true), color);
            super(name, new Engines.Engine(1000, 6, undefined, true), color);
        }
    }
    Vehicles.SportCar = SportCar;
})(Vehicles || (Vehicles = {}));
var Engines;
(function (Engines) {
    class Charge {
        powerUpgrade;
        constructor(powerUpgrade) {
            this.powerUpgrade = powerUpgrade;
        }
        get getPowerUpgrade() {
            return this.powerUpgrade;
        }
    }
    Engines.Charge = Charge;
    class Engine {
        _turnOn;
        _v;
        _power;
        constructor(power, v, charge, turnOn) {
            this._turnOn = turnOn ?? false;
            this._power = power + (charge ? charge.getPowerUpgrade : 0);
            this._v = v;
        }
        set turnOn(turnOn) {
            this._turnOn = turnOn;
        }
        get turnOn() {
            return this._turnOn;
        }
        get power() {
            return this._power;
        }
        get v() {
            return this._v;
        }
    }
    Engines.Engine = Engine;
})(Engines || (Engines = {}));
const car = new Vehicles.SportCar("Classic", 2);
const motocycle = new Vehicles.Motocycle("CG 125cc");
console.log(`Name..: ${car.name}`);
console.log(`Color.: ${car.color}`);
console.log(`Engine: ${car.engine.v}`);
console.log(`Power.: ${car.myPower}`);
console.log(`Is On.: ${car.isOn}`);
//# sourceMappingURL=namespaces.js.map