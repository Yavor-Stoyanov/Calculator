import * as result from './result.js';
import * as clear from './clear.js';
import * as del from './delete.js';

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