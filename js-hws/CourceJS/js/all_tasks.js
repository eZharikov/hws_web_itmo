'use strict';

//ВВЫВОД ДАННЫХ В HTML

// console.log(localStorage);

if(localStorage.getItem('task') !== null){
    let allTasks = JSON.parse(localStorage.getItem('task'));
    let section = document.createElement('section');
    section.innerHTML =
        `<h1>Список задач</h1>`;
    section.style.textAlign = 'center';
    section.classList.add('tasks');
    document.body.append(section);

    // СОРТИРОВКА
    let allTasksSort = allTasks.sort(function (a,b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
    });
    // console.log(allTasksSort);
    localStorage.setItem('task', JSON.stringify(allTasksSort));

    // ВЫВОД В html (задачи есть)
    let index = 0;
    let div;
    for(let oneTask of allTasksSort){
        index += 1;
        div = document.createElement('div');
        div.classList.add('task');
        if(index%2 == 0){
            div.classList.add('background_next');
        }
        div.innerHTML =
            `<h2>${oneTask.title}</h2>
            <p>${oneTask.description}</p>
            <p>Выполнить в срок до: ${oneTask.date}</p>
            `;
        if (oneTask.member !== undefined){
            let memberName = document.createElement('span');
            memberName.innerText = `Дополнительные участники: `;
            div.append(memberName);
            for(let personName of oneTask.member){
                let name = document.createElement('span');
                name.innerText = ` ${personName} `;
                div.append(name);
            }

        }
        section.append(div);

        //ВЫБОР И УДАЛЕНИЕ ЗАДАЧИ
        div.addEventListener('click', function (event) {
            if(this.classList.contains('active')){
                this.classList.remove('active')
            } else {
                this.classList.add('active')
            }

            button.addEventListener('click', del.bind(this));
            function del(event){
                event.preventDefault();
                this.remove();

                allTasksSort.splice(oneTask,1);
                localStorage.setItem('task', JSON.stringify(allTasksSort));
                console.log(allTasksSort);
            }
        })
    }

    //ДОБАВЛЕНИЕ КНОПКИ
    let buttonBox = document.createElement('div');
    buttonBox.style.marginTop = '25px';
    let button = document.createElement('button');
    button.innerText = 'Удалить задачи';
    button.classList.add('button_del');
    buttonBox.append(button);
    section.append(buttonBox);

} else {
    // ВЫВОД В html (задач нет)
    let noTasks = document.createElement('p');
    noTasks.innerText = 'В LocalStorage нет информации о Задачах.';
    noTasks.style.cssText =
        `text-align: center;
    font-size: 2rem;
    color: darkred;
    margin-top: 25px`;
    document.body.append(noTasks);
}