import * as result from './result.js';
import * as clear from './clear.js';
import * as del from './delete.js';

const displayElement = document.getElementById('input-output');

const numbersBtn = document.querySelectorAll('.numbers');
numbersBtn.forEach(btn => {
    btn.addEventListener('click', onClickHandler)
});

function onClickHandler(e) {
    const button = e.target.textContent;
    if (!button.match(/[+\/*-\.]/) && displayElement.textContent == '0') {
        displayElement.textContent = displayElement.textContent.replace(/^0+/, '');
    }

    displayElement.textContent += button;
    displayElement.textContent = displayElement.textContent.replace(/(?<=[+\-\*\/])\./, '0.');
    displayElement.textContent = displayElement.textContent.replaceAll(/(?<=[\+\/\*\-])0+/g, '0');
    displayElement.textContent = displayElement.textContent.replaceAll(/(?<=[\+\/\*\-])0+(?=[1-9])/g, '');
}

// think about negative calculations