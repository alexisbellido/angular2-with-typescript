"use strict";

const circle = require('./circle.js');

const radius = 5.25;

console.log( `The area of a circle of radius ${radius} is ${circle.area(radius)}`);

let greeting = 'Hello';
circle.sayHi(greeting, 'miguel', 'pedro');

console.log('default sum: ' + circle.sum());
console.log(`some sum ${circle.sum(3, 7)}`);

let duplicate = num => num * 2;
console.log('duplicate of 4: ' + duplicate(4));
