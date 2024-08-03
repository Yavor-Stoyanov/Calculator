import { blurFocus } from "./util.js";

let buttonContext;

export function numbersHandler(e) {
    let button;
    if (e instanceof PointerEvent) {
        button = e.target.textContent;
    } else if (e instanceof KeyboardEvent) {
        button = e.key;
    }

    if (!button.match(/\./) && resultDisplay.textContent == '0') {
        resultDisplay.textContent = resultDisplay.textContent.replace(/^0+/, '');
    }

    if (button == '.' && resultDisplay.textContent.includes('.')) {
        return;
    }

    if (buttonContext == 'operation') {
        resultDisplay.textContent = '';
    }

    resultDisplay.textContent += button;

    resultDisplay.textContent = resultDisplay.textContent.replace(/(?<=[+\-\*\/])\./, '0.');
    resultDisplay.textContent = resultDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+/g, '0');
    resultDisplay.textContent = resultDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+(?=[1-9])/g, '');
    buttonContext = 'number';

    blurFocus(e);
}

export function operationsHandler(e) {
    let sign;

    if (e instanceof PointerEvent) {
        sign = e.currentTarget.textContent;
    } else if (e instanceof KeyboardEvent) {
        sign = e.key;
    }

    subsidiaryDisplay.textContent = resultDisplay.textContent + sign;
    buttonContext = 'operation';

    blurFocus(e);
}