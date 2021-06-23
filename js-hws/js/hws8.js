'use strict'

//task2
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function generateTable(arr){
    let body = document.body;
    let table = document.createElement("table");
    let captionRow = document.createElement('tr');
    for (let propertyName in arr[0]){
        let captionCell = document.createElement('th');
        captionCell.innerText = propertyName.toUpperCase();
        captionRow.append(captionCell);
    }
    table.append(captionRow);

    for (let element of arr) {
        let row = table.insertRow();
        for (let propertyName in element){
            let cell = row.insertCell();
            cell.innerText = element[propertyName];
        }
    }
    return table;
    }
document.body.append(generateTable(articles), generateTable(goods));


//task3
let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField (n, data) {
    n = n >= 3 ? n : 3;
    let field = document.createElement('div');
    field.style.cssText = 
        'margin: 0 auto;' +
        'width: 40vw;' +
        'display: flex;' +
        'flex-wrap: wrap;';

    for (let i = 0; i < n * n; i++){
        let cell = document.createElement('div');
        cell.style.border = '1px solid black';
        cell.style.boxSizing = 'border-box';
        cell.style.width = cell.style.height = 40 / n + 'vw';
        field.append(cell);
    }
    addRandomData(field, data);
    return field;  
}
document.body.append(generateField(3, prises));

function addRandomData(field, dataObject){
    let attrValues = Object.keys(dataObject);
    for (let attrValue of attrValues) {
        let randomIndex = Math.floor(Math.random() * field.children.length);
        field.children[randomIndex].setAttribute('prise', attrValue);
    }
}