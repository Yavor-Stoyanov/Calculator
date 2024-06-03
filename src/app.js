import { resultHandler } from './result.js'

const displayElement = document.getElementById('input-output');

const numbersBtn = document.querySelectorAll('.numbers');
numbersBtn.forEach(btn => {
    btn.addEventListener('click', onClickHandler)
});

function onClickHandler(e) {
    displayElement.textContent = displayElement.textContent.replace(/^0+/, '');
    let number = e.target.textContent;
    displayElement.textContent += number;
}

const resultBtn = document.getElementsByClassName('equal')[0];
resultBtn.addEventListener('click', () => {
    const data = displayElement.textContent;
    resultBtn.addEventListener('click', resultHandler(data));
});