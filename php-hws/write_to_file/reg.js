'use strict';
// аякс: отправка данных формы методом POST
const form = document.forms.reg;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const requestOptions = {
        method: 'POST',
        body: new FormData(form)
    };
    fetch('form-handler.php', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.message === 'error') {
                document.getElementById('reg-error')
                    .innerText = data.reason;
            } else if (data.message === 'success') {
                document.getElementById('reg-error')
                    .innerText = data.reason;
            }
        });
});


