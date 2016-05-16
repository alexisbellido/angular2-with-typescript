function greeter(person) {
    return "Hello, " + person;
}

var user = "Paco Miau";

console.log(greeter(user));  

import { foo } from "./circle";
console.log('foo: ' + foo);

import { PI } from "./circle";

import { area } from "./circle";
console.log(`Area for circle of radius 5: ${area(5)}`);
