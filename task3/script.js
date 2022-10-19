const light1 = document.querySelector('#light1'); // указатель на 1ый фонарь
const light2 = document.querySelector('#light2'); // указатель на 2ой фонарь
const light3 = document.querySelector('#light3'); // указатель на 3ий фонарь
const trafficLight = document.querySelector('#trafficLight'); // указатель на весь светофор

function makeGreen() {
    light1.style.background = ('black');
    light2.style.background = ('black');
    light3.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    light1.style.background = ('black');
    light2.style.background = ('yellow');
    light3.style.background = ('black');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    light1.style.background = ('red');
    light2.style.background = ('black');
    light3.style.background = ('black');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}

trafficLight.addEventListener('click', makeGreen);