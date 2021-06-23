'use strict'

//task 1


let str = 'дом домик домой одомашненный';
let target = 'дом';
let counter = 0;
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  pos = foundPos + 1;
  counter++;
}
console.log(counter);


//task 2
function isPalindrome(str) {
    str = str.toLowerCase().trim().split(' ').join('');
    // console.log(str.toLowerCase().trim().split(' ').join(''));
    let strReverse = str.toLowerCase().trim().split(' ').join('').split('').reverse().join('');
    // console.log(strReverse);
    if (strReverse === str) {
      return 'yes';
    } else {
      return 'no';
    }
  }
console.log(isPalindrome('fafaf'));
console.log(isPalindrome('2 202 2'));
console.log(isPalindrome('а роза упала на лапу Азора'));
console.log(isPalindrome('А луна канула'));
console.log(isPalindrome('Аргентина манит негра'));