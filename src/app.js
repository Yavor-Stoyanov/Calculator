import { resultHandler } from './result.js';
import * as clear from './clear.js';
import { delDigit } from './delete.js';
import { signChange } from './signChange.js';
import { numbersHandler, operationsHandler } from './display.js';
import { isOperableKey } from './util.js';

const numbersBtns = document.querySelectorAll('.numbers');
numbersBtns.forEach(btn => {
    btn.addEventListener('click', numbersHandler);
})

const operationsBtns = document.querySelectorAll('.operations');
operationsBtns.forEach(btn => {
    btn.addEventListener('click', operationsHandler);
});

document.body.addEventListener('keyup', (e) => {
    if (isOperableKey(e) == 'numbers') {
        numbersHandler(e);
    } else if (isOperableKey(e) == 'operations') {
        operationsHandler(e);
    } else if (e.key == 'Enter' || e.key == '=') {
        const data = subsidiaryDisplay.textContent + resultDisplay.textContent;
        resultHandler(data);
    } else if (e.key == 'Backspace') {
        delDigit(e);
    };
});
