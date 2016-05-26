"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(firstName, lastName, age, _ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._ssn = _ssn;
        this.setupStuff();
    }
    Object.defineProperty(Person.prototype, "ssn", {
        get: function () {
            return this._ssn;
        },
        set: function (value) {
            this._ssn = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.setupStuff = function () {
        console.log('We are setting up stuff');
    };
    Person.prototype.doSomething = function (howManyTimes) {
        if (howManyTimes === void 0) { howManyTimes = 1; }
        for (var i = 1; i < howManyTimes; i++) {
            console.log(i + " -- Doing something");
        }
    };
    return Person;
}());
exports.Person = Person;
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, _ssn, department) {
        _super.call(this, firstName, lastName, age, _ssn);
        this.department = department;
    }
    Employee.prototype.doSomething = function (howManyTimes) {
        if (howManyTimes === void 0) { howManyTimes = 1; }
        _super.prototype.doSomething.call(this, howManyTimes);
        console.log('Calling from child doSomething');
    };
    return Employee;
}(Person));
exports.Employee = Employee;
//# sourceMappingURL=person.js.map