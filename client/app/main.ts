import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, []);

///////
class Tax {

    color: string;
    income: number;

    constructor(income) {
    	this.color = 'red';
	this.income = income;
    }

    sayColor() {
	console.log(`The color is ${this.color}`);
    }

    sayAnimal() {
	console.log(`Still don't know who the animal is`);
    }

}

class NJTax extends Tax {

    animal: string;

    constructor(income, animal) {
	super(income);
	this.animal = animal;
    }

    sayIncome() {
	console.log(`The income is ${this.income}`);
    }

    sayAnimal() {
	super.sayAnimal();
	console.log(`The animal is ${this.animal}`);
    }

}

let njTax = new NJTax(2000, 'bear');
njTax.sayColor();
njTax.sayIncome();
njTax.sayAnimal();

import sum from './math';
console.log(`sum is ${sum(30,4)}`);

import {diff} from './math';
console.log(`diff is ${diff(30,4)}`);

var age: number;
age = 24;
console.log(`Age is ${age}`);

function calcTax(income: number, dependents: number, state: string = 'NY'): number {
  console.log(`State: ${state}`);
  if (state == 'NY') {
    return income * 0.06 - dependents * 500;
  } else if (state == 'NJ') {
    return income * 0.05 - dependents * 500;
  }
}
console.log(`The tax is ${calcTax(1000, 2, 'NJ')}`);
