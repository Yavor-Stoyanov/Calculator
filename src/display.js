const resultDisplay = document.getElementById('display-result');
const inputOutputDisplay = document.getElementById('input-output');

let btnContext = 'numbers';

export function numbersHandler(e) {
    const button = e.target.textContent;
    if (!button.match(/[+\/*-\.]/) && inputOutputDisplay.textContent == '0') {
        inputOutputDisplay.textContent = inputOutputDisplay.textContent.replace(/^0+/, '');
    }
    
    inputOutputDisplay.textContent += button;
    inputOutputDisplay.textContent = inputOutputDisplay.textContent.replace(/(?<=[+\-\*\/])\./, '0.');
    inputOutputDisplay.textContent = inputOutputDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+/g, '0');
    inputOutputDisplay.textContent = inputOutputDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+(?=[1-9])/g, '');
    btnContext = 'numbers';
}

export function operationsHandler(e) {
    if (btnContext == 'operations') {
        
    }
    resultDisplay.textContent = inputOutputDisplay.textContent + e.currentTarget.textContent;
    inputOutputDisplay.textContent = '0';
    btnContext = 'operations';
}