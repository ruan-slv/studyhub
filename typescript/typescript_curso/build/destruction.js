"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    color1: "Green",
    color2: "Blue",
    color3: "Red"
};
let { color1, color2, color3 } = obj;
let [num1 = 0, num2 = 0, ...num3] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(color1);
console.log(color2);
console.log(color3);
console.log("\n");
console.log(num1);
console.log(num2);
console.log(num3);
const colors = () => {
    return [
        "Purple", "Blue", "Green", "Accent", "Brown"
    ];
};
let [c1, c2, c3, c4] = colors();
let text = "Typescript course";
let [...t] = text.split(" ");
let [p1, p2] = text.split(" ");
console.log(t);
console.log(p1);
console.log(p2);
//# sourceMappingURL=destruction.js.map