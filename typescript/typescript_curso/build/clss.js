"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.Obj = exports.Person = void 0;
class Person {
    name;
    higth;
    constructor(name, higth) {
        this.name = name;
        this.higth = higth;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getHigth() {
        return this.higth;
    }
    set setHigth(higth) {
        this.higth = higth;
    }
}
exports.Person = Person;
class Obj {
    name;
    constructor(name) {
        this.name = name;
    }
}
exports.Obj = Obj;
const list = ["backup", "cooler", "HDD"];
exports.list = list;
//# sourceMappingURL=clss.js.map