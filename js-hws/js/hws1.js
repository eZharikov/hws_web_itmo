'use strict'
// задание 1
let num = 56; 
let num1 = num / 10 | 0; 
console.log(num1); // для првоерки
let num2 = num % 10;
console.log(num2); // для првоерки
let sum = num1 + num2;
console.log(sum);

// задание 2
let a = 7; 
let b = 8;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);

//задание 3
let h = 10;
let w = 5;
let l = 7;
let s = 2 * (h*w + w*l + h*l);
console.log(s);

//задание 4
let long = 5;
let start = 1;
let end = 10;
let between = start < end ? end - start : -1;
console.log(between);