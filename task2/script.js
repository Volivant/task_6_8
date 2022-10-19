document.querySelector('#consoleLog').addEventListener('click',() =>{
    alert('Метод для вывода сообщения в веб консоль');
    document.querySelector('#consoleLogText').textContent = 'Пример использования команды console.log';
})

document.querySelector('#alert').addEventListener('click',() =>{
    alert('Функция для вывода информационного окна с сообщением пользователю');
    document.querySelector('#alertText').textContent = 'Пример использования команды alert';
})

document.querySelector('#prompt').addEventListener('click',() =>{
    alert('Функция для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «Ок» и «Отмена».');
    document.querySelector('#promptText').textContent = 'Пример использования команды prompt';
})

