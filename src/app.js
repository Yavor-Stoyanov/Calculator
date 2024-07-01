import * as result from './result.js';
import * as clear from './clear.js';
import * as del from './delete.js';
import { signChange } from './signChange.js';
import { numbersHandler, operationsHandler } from './display.js';

const numbersBtns = document.querySelectorAll('.numbers');
numbersBtns.forEach(btn => {
    btn.addEventListener('click', numbersHandler)
})

const operationsBtns = document.querySelectorAll('.operations');
operationsBtns.forEach(btn => {
    btn.addEventListener('click', operationsHandler);
});