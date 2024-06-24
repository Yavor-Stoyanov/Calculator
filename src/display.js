const resultDisplay = document.getElementById('resultDisplay');
const subsidiaryDisplay = document.getElementById('subsidiaryDisplay');

//let btnContext = 'numbers';

export function numbersHandler(e) {
    const button = e.target.textContent;
    if (!button.match(/[+\/*-\.]/) && resultDisplay.textContent == '0') {
        resultDisplay.textContent = resultDisplay.textContent.replace(/^0+/, '');
    }
    
    resultDisplay.textContent += button;
    resultDisplay.textContent = resultDisplay.textContent.replace(/(?<=[+\-\*\/])\./, '0.');
    resultDisplay.textContent = resultDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+/g, '0');
    resultDisplay.textContent = resultDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+(?=[1-9])/g, '');
    //btnContext = 'numbers';
}

export function operationsHandler(e) {
    // if (btnContext == 'operations') {
        
    // }
    subsidiaryDisplay.textContent = resultDisplay.textContent + e.currentTarget.textContent;
    resultDisplay.textContent = '0';
    //btnContext = 'operations';
}