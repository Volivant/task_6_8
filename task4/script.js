const link = document.querySelector('#link');

link.addEventListener('click',(event) =>{
    event.preventDefault();
    link.textContent = prompt('Ведите новый текст ссылки', 'Новый текст ссылки');
})