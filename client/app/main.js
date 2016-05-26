"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, []);
///////
var Tax = (function () {
    function Tax(income) {
        this.color = 'red';
        this.income = income;
    }
    Tax.prototype.sayColor = function () {
        console.log("The color is " + this.color);
    };
    Tax.prototype.sayAnimal = function () {
        console.log("Still don't know who the animal is");
    };
    return Tax;
}());
var NJTax = (function (_super) {
    __extends(NJTax, _super);
    function NJTax(income, animal) {
        _super.call(this, income);
        this.animal = animal;
    }
    NJTax.prototype.sayIncome = function () {
        console.log("The income is " + this.income);
    };
    NJTax.prototype.sayAnimal = function () {
        _super.prototype.sayAnimal.call(this);
        console.log("The animal is " + this.animal);
    };
    return NJTax;
}(Tax));
var njTax = new NJTax(2000, 'bear');
njTax.sayColor();
njTax.sayIncome();
njTax.sayAnimal();
var math_1 = require('./math');
console.log("sum is " + math_1.default(30, 4));
var math_2 = require('./math');
console.log("diff is " + math_2.diff(30, 4));
var math_3 = require('./math');
math_3.sayBye('Miguelito');
math_3.sayBye();
var age;
age = 24;
console.log("Age is " + age);
function calcTax(income, dependents, state) {
    if (state === void 0) { state = 'NY'; }
    console.log("State: " + state);
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 500;
    }
}
console.log("The tax is " + calcTax(150000, 2, 'NJ'));
console.log("The tax for NY is " + calcTax(175000, 3));
var person_1 = require('./person');
var p = new person_1.Person('Juan', 'Perez', 53, '353-321');
console.log(p);
console.log("ssn is private");
p.doSomething(4);
p.ssn = '33211-222';
console.log(p);
var e = new person_1.Employee('Luis', 'Suarez', 28, '9991', 'Accounting');
console.log("Employee is");
console.log(e);
e.doSomething(2);
var e2 = new person_1.Employee('Mike', 'Tutu', 32, '11122', 'IT');
var animal_1 = require('./animal');
var a = new animal_1.Animal();
var workers = [];
workers[0] = p;
workers[1] = e;
console.log(workers);
//# sourceMappingURL=main.js.map