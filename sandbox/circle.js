"use strict";

const PI = 3.14;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;

exports.sum = (a = 1, b = 2) => a + b;

exports.sayHi = function(greeting, ...persons) {
    console.log(`greeting: ${greeting}`);
    console.log(`persons: ${persons}`);
};
