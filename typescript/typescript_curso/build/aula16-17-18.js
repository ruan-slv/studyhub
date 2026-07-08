"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computer {
    name;
    ram;
    cpu;
    on;
    constructor(name, ram, cpu, on) {
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
        this.on = on ?? false;
    }
    info() {
        console.log('---------------- ');
        console.log(`Nome: ${this.name}`);
        console.log(`Ram.: ${this.ram}%`);
        console.log(`Cpu.: ${this.cpu}%`);
        console.log(`On..: ${this.on ? 'Yes' : 'No'}`);
        console.log('---------------- ');
    }
    turnOn() {
        this.on = true;
    }
    turnOf() {
        this.on = false;
    }
}
const computer = new Computer('Lenovo', 20, 10);
computer.turnOn();
computer.info();
//# sourceMappingURL=aula16-17-18.js.map