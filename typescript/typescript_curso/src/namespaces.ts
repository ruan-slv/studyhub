namespace Vehicles {

    enum Colors {
        "Red", "Orange", "Black", "Blue"
    }

    abstract class Car {
        private _name: string;
        private _engine: Engines.Engine;
        private _color: string;

        constructor(name: string, engine: Engines.Engine, color: Colors) {
            this._name = name;
            this._engine = engine;
            this._color = Colors[color];
        }

        public get name(): string {
            return this._name;
        }

        public set name(value: string) {
            this._name = value;
        }

        public get engine(): Engines.Engine {
            return this._engine;
        }

        public set engine(engine: Engines.Engine) {
            this._engine = engine;
        }

        public get color(): string {
            return this._color;
        }

        public set color(color: string) {
            this._color = color;
        }

        public get isOn(): string {
            return (this._engine.turnOn ? "Yes" : "No");
        }

        public get myPower(): number {
            return this._engine.power;
        }
    }

    export class Motocycle {
        name?: string;

        constructor(name?: string) {
            this.name = name;
        }
    }

    export class SportCar extends Car {
      constructor(name: string, color: Colors) {
        //super(name, new Engines.Engine(1000, 6, new Engines.Charge(100), true), color);
        super(
          name,
          new Engines.Engine(1000, 6, undefined, true),
          color,
        );
      }
    }
}

namespace Engines {

    export class Charge {
        private powerUpgrade: number;

        constructor(powerUpgrade: number) {
            this.powerUpgrade = powerUpgrade;
            
        }

        get getPowerUpgrade(): number {
            return this.powerUpgrade;
        }
    }

    export class Engine {
        private _turnOn: boolean;
        private _v: number;
        private _power: number;

        constructor(power: number, v: number, charge?: Charge, turnOn?: boolean) {
            this._turnOn = turnOn ?? false;
            this._power = power + (charge? charge.getPowerUpgrade : 0);
            this._v = v;
        }

        public set turnOn(turnOn: boolean) {
            this._turnOn = turnOn;
        }

        public get turnOn(): boolean {
            return this._turnOn;
        }

        public get power(): number {
            return this._power;
        }

        public get v(): number {
            return this._v;
        }
    }
}

const car = new Vehicles.SportCar("Classic", 2);
const motocycle = new Vehicles.Motocycle("CG 125cc");

console.log(`Name..: ${car.name}`);
console.log(`Color.: ${car.color}`);
console.log(`Engine: ${car.engine.v}`);
console.log(`Power.: ${car.myPower}`);
console.log(`Is On.: ${car.isOn}`);