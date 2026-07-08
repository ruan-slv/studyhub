"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computer {
    name = '';
    ram = 0;
    cpu = 0;
    on = true;
    constructor(name, ram, cpu, on) {
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
        this.on = on ?? false;
    }
}
const computer = new Computer('Lenovo', 20, 10);
console.log(computer);
//# sourceMappingURL=aula16-17.js.map