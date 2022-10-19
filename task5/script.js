const inputField = document.querySelector('#inputField');
const duplicateField = document.querySelector('#duplicateField');
const buttonSend = document.querySelector('#buttonSend');

inputField.addEventListener('keyup',() => {
    duplicateField.textContent = inputField.value;
})

buttonSend.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
})