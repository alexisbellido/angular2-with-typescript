webpackJsonp([0],{

/***/ 0:
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./main.ts */1);
	module.exports = __webpack_require__(/*! ../scss/main.scss */285);


/***/ },

/***/ 1:
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2);
	var core_1 = __webpack_require__(/*! @angular/core */ 8);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 281);
	if (false) {
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
	var math_1 = __webpack_require__(/*! ./math */ 282);
	console.log("sum is " + math_1.default(30, 4));
	var math_2 = __webpack_require__(/*! ./math */ 282);
	console.log("diff is " + math_2.diff(30, 4));
	var math_3 = __webpack_require__(/*! ./math */ 282);
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
	var person_1 = __webpack_require__(/*! ./person */ 283);
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
	var animal_1 = __webpack_require__(/*! ./animal */ 284);
	var a = new animal_1.Animal();
	var workers = [];
	workers[0] = p;
	workers[1] = e;
	console.log(workers);


/***/ },

/***/ 281:
/*!**************************!*\
  !*** ./app.component.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 8);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: '<h1>Angular 2 app starts here</h1>'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ },

/***/ 282:
/*!*****************!*\
  !*** ./math.js ***!
  \*****************/
/***/ function(module, exports) {

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

/***/ },

/***/ 283:
/*!*******************!*\
  !*** ./person.js ***!
  \*******************/
/***/ function(module, exports) {

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

/***/ },

/***/ 284:
/*!*******************!*\
  !*** ./animal.js ***!
  \*******************/
/***/ function(module, exports) {

	"use strict";
	var Animal = (function () {
	    function Animal() {
	    }
	    return Animal;
	}());
	exports.Animal = Animal;
	//# sourceMappingURL=animal.js.map

/***/ },

/***/ 285:
/*!*************************!*\
  !*** ../scss/main.scss ***!
  \*************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=main.bundle.js.map