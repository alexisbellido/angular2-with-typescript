"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (a, b) { return a + b; };
exports.diff = function (a, b) { return a - b; };
function sayBye(name) {
    if (name) {
        console.log("Bye " + name);
    }
    else {
        console.log('Bye Anonymous');
    }
}
exports.sayBye = sayBye;
//# sourceMappingURL=math.js.map