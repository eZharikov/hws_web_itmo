'use strict'

let form = document.forms.task_form;

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
function getDate(d){
    let enteredDate = new Date(d);
    return `${addZero(enteredDate.getDate())}.${addZero(enteredDate.getMonth()+1)}.${addZero(enteredDate.getFullYear())}`;
}
//проверки
let titleCheck = {
    elem: form.elements.title,
    minLen: 1,
    maxLen: 20,
    error: document.getElementById('error_title')
};

let dateCheck = {
    // elem: +new Date(form.elements.date.value),
    elem: '',
    date: +new Date(),
    error: document.getElementById('error_date')
};
form.elements.date.addEventListener("change", function() {
    dateCheck.elem = +new Date(this.value);
});

let validator = {
    checkMinLen (rule){
        if(rule.elem.value.length < rule.minLen || rule.elem.value.length > rule.maxLen){
            rule.error.innerText = `Значение должно быть в диапазоне от ${rule.minLen} до ${rule.maxLen} символов`;
            return false;
        }
        rule.error.innerText = '';
        return true;
    },

    checkDate (rule){
        if(rule.elem < rule.date){
            rule.error.innerText = 'Дата не может быть в прошлом';
            // console.log(rule.elem);
            // console.log(rule.date);
            return false;
        }
        rule.error.innerText = '';
        // console.log(rule.elem);
        // console.log(rule.date);
        return true;
    }
};

form.title.addEventListener('keyup', validator.checkMinLen.bind(null, titleCheck));
form.date.addEventListener('change', validator.checkDate.bind(null, dateCheck));

// form.elements.date.addEventListener("change", function() {
//     let input = this.value;
//     let dateEntered = +new Date(input);
//     let curDate = +new Date();
    // if(curDate > dateEntered){
    //     document.getElementById('error_date').innerText = 'Дата не может быть в прошлом';
    // }
    // console.log(input);
    // console.log(dateEntered);
    // console.log(curDate);

// });


//создание инпутов
document.getElementById('addperson').addEventListener('click', (event) => {
    event.preventDefault();
    let inputPerson = document.createElement('input');
    inputPerson.setAttribute('type', 'text');
    inputPerson.setAttribute('name', 'member');
    inputPerson.setAttribute('id', 'member');
    let buttonPerson = document.createElement('button');
    buttonPerson.setAttribute('id', 'btnmember');
    buttonPerson.innerText = 'x';
    buttonPerson.style.marginRight = '50px';
    document.querySelector('.addpersonbox').append(inputPerson, buttonPerson);

    buttonPerson.addEventListener('click', (event) => {
        event.preventDefault();
        buttonPerson.classList.add('unshown');
        inputPerson.classList.add('unshown');
    })
});

//отправка формы в локальное хранилище
let taskNew = {};
let arrTasks = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(!validator.checkMinLen(titleCheck) || !validator.checkDate(dateCheck)){
        document.getElementById('error').innerText = 'Данные введены некорректно';
    } else{
        document.getElementById('error').innerText = '';
        document.getElementById('done').innerText = 'Задача была успешно отправлена';
        taskNew.title = form.elements.title.value;
        taskNew.description = form.elements.desc.value;
        taskNew.date = getDate(form.elements.date.value);

        if(document.getElementById('member')){
            taskNew.member = [];
            let members = document.getElementsByName('member');

            for(let membertask of members){
                taskNew.member.push(membertask.value);
            }
        }

        let storage = localStorage;
        if(storage.getItem('task') === undefined){
            arrTasks.push(taskNew);
            storage.setItem('task', JSON.stringify(arrTasks));
        }
        else {
            let objFromStorage = JSON.parse(storage.getItem('task'));
            arrTasks = objFromStorage;
            arrTasks.push(taskNew);
            storage.setItem('task', JSON.stringify(arrTasks));
        }
    }

});