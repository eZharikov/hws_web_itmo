'use strict'
// задача 1
const answer = 610;
if (answer>=90 && answer<=100) {
    console.log('Отлично');
} else if (answer>=60 && answer<90) {
    console.log('Хорошо');
} else if (answer>=40 && answer<60) {
    console.log('удовлетворительно');
} else if (answer>=0 && answer<40) {
    console.log('попробуй потом');
} else {
    console.log('что-то не так с кол-вом ответов');
}

//задача 2
// let num1 = +prompt('Введите любое число 1');
// let num2 = +prompt('Введите любое число 2');
// let num3 = +prompt('Введите число из списка(3, 5, 7, 9);
let num1 = 10;
let num2 = 2;
let num3 = 5;
switch (num3) {
    case 3:
        console.log(num1 + num2);
        break;
    case 5:
        console.log(num1 - num2);
        break;
    case 7:
        console.log(num1 * num2);
        break;
    case 9:
        console.log(num1 / num2);
        break;

}



//задача 3
let random = Math.round((Math.random()*491)+10);
if (random < 25 || random > 200) {
    console.log(`Число ${random} не содержится в интервале (25;200)`)
} else {
    console.log(`Число ${random} содержится в интервале (25;200)`)
}



//задача 4
let n = 0;
for (let i = 1; i <= 100; i +=1) {
    if (i % 2 === 0) {
        console.log(i);
        n++;
    }
    if (n === 20) {  
        break;
    }
}

// задача 5
let a = 0, b = 1;
for (let i = 0; i <= 20; i++) {
    b = a + b;
    a = b - a;
    console.log(a);
}

// задача 6

for (let i = 1; i<=9;i++) {
    for (let j=1;j<=9;j++){
        console.log(`${j} * ${i} = ${j*i}`)
    }
}

// задача 7

// let min = 1, max = 100;
// let guess,gnum;
// // let userInput = +prompt('Введите число от 1 до 100 включительно')
// //     if (userInput > 100 || userInput < 1) {
// //         console.log('Неверное число');
// //     }
// while (true) {
//     gnum = (a+b) % 2;
//     guess = +prompt(`Ваше число ${gnum}?(1-да,0 - нет)`)
//     if (guess === 1) {
//         console.log('Угадал');
//         break;
//     } else if (guess === 0) {
//         min = gnum + 1;
//     } else {
//         max = gnum - 1;
//     }
// }