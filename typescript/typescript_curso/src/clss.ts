class Person {
    private name: string;
    private higth: number;

    constructor(name: string, higth: number) {
        this.name = name;
        this.higth = higth;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getHigth(): number {
        return this.higth;
    }

    set setHigth(higth: number) {
        this.higth = higth;
    }
}

class Obj {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const list: Array<string> = ["backup", "cooler", "HDD"];

export { Person, Obj, list };