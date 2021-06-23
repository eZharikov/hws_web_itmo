'use strict'

//task 1
function getCorrectStr(num){
    let val = num % 100;
    if (val > 10 && val < 20) return `${num} товаров`;
    val = num % 10;
    if (val == 1) return `${num} товар`;
    if (val > 1 && val < 5) return `${num} товара`;
    return `${num} товаров`;
}

let ex = getCorrectStr(1);
console.log(ex);
ex = getCorrectStr(12);
console.log(ex);
ex = getCorrectStr(97);
console.log(ex);
ex = getCorrectStr(4);
console.log(ex);
ex = getCorrectStr(31);
console.log(ex);

//task 2
function range(start, end, step){
    let arr = [];
    for (let i = start; i <= end; i += step){
        arr.push(i)
    }
    if ((arr[-1] - end) >= step) arr.push(end);
    return arr;
}
let result = range(1, 30, 2);
console.log(result);
result = range(3, 45, 3);
console.log(result);

//task 3
function checkSpam(text, ...swords){
    text = text.split(" ");
    let count = 0;
    for (let sword of swords) {
        for (let word of text ){
            if (word === sword) count++
        }
    }
    if (count === 0) return `Шкала спама в текст - 0. Спама нет. Спам слов - ${count}`;
    if (count < 3) return 'Шкала спама в текст - 1. Спама мало. Спам слов -' + " " + count;
    if (count < 10) return 'Шкала спама в текст - 2. есть немного спама. Спам слов -' + " " + count;
    if (count < 50) return 'Шкала спама в текст - 3. Значительное кол-во спам слов. Спам слов -' + " " + count;
    if (count < 100) return 'Шкала спама в текст - 4. Весь текст сплошной спам. Спам слов -' + " " + count;
}

let text = "Повторюсь — в отраженьях зеркал, Повторюсь — в эхе собственных мыслей. Повторюсь — в слове, что вслух сказал, И в стихах, став их сути частицей. Повторюсь — в очертании тени, Повторюсь — в деле опытом дней. Повторюсь — в непогоде весенней, Растворяясь, в слезинках дождей. Повторюсь — в детство сном возвратившись, Повторюсь — вспомнив кто я и где. Повторюсь — в жизнь опять возродившись, Не поддавшись, унынью в беде. Повторюсь — в своих детях их нравом, Тем, что сам, от... spam spam spam"

result = checkSpam(text, "spam", "Повторюсь");
console.log(result);
result = checkSpam(text, "123", "spam");
console.log(result);


//task 4
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
let numsArr10 = numsArr.map(elem => elem.map(num => num + 10));
console.log(numsArr10);
numsArr.forEach(elem => elem.forEach(num => num + 10));
console.log(numsArr);

let numsArrP = numsArr.map(elem => elem.filter(num=>num > 0));
console.log(numsArrP);