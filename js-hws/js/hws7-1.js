'use strict'

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

console.log(typeof(goods))

//task 1

function priceFilter (obj, from, to){
    if (typeof(from) !== 'number' || typeof(to) !== 'number' || typeof(obj) !== 'object') return false;
    let newObj = {};
    for (let i in obj) {
        if (obj[i].price >= from && obj[i].price < to){
            newObj[i] = obj[i];
        }
    }
    return newObj;
}
console.log(priceFilter(goods, 1000, 3100));


//task2
function findGoodsByTitle(obj, title, countToCart) {
    if (typeof(title) !== 'string' || typeof(countToCart) !== 'number' || typeof(obj) !== 'object') return false;
    for (let good in obj){
        // if (obj[good].title === title && obj[good].count >= countToCart){
        //     obj[good].count = obj[good].count - countToCart;
        //     return true;
        // } else {
        //     return false;
        //         }
                if (obj[good].title === title){
                    if (obj[good].count >= countToCart) {
                        obj[good].count = obj[good].count - countToCart;
                        return true;
                    } else {
                        return false;
                        }     
                 }
    }             
}
console.log(findGoodsByTitle(goods, 'Барабаны', 2));
console.log(goods.drum);
console.log(findGoodsByTitle(goods, 'Арфа', 6));
console.log(goods.harp);

//task3

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function getAllBooksAuthor (arr, author){
    let result = [];
    for (let book of books){
        //if (book.author === author){
        if (book.author.localeCompare(author) === 0){
            result.push(book.title)
        }
    }
    return result;
}
console.log(getAllBooksAuthor(books, 'Пушкин'));
console.log(getAllBooksAuthor(books, 'Шишкин'));

//task4
books.sort((prev, next) => {
    if (prev.title < next.title) return -1;
    if (prev.title < next.title) return 1;
});
console.log(books);