let buttonContext;

export function numbersHandler(e) {
    const button = e.target.textContent;
    
    if (!button.match(/\./) && resultDisplay.textContent == '0') {
        resultDisplay.textContent = resultDisplay.textContent.replace(/^0+/, '');
    }

    if (buttonContext == 'operation') {
        resultDisplay.textContent = '';
    }
    
    resultDisplay.textContent += button;

    resultDisplay.textContent = resultDisplay.textContent.replace(/(?<=[+\-\*\/])\./, '0.');
    resultDisplay.textContent = resultDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+/g, '0');
    resultDisplay.textContent = resultDisplay.textContent.replaceAll(/(?<=[\+\/\*\-])0+(?=[1-9])/g, '');
    buttonContext = 'number';
}

export function operationsHandler(e) {
    let sign = e.currentTarget.textContent;
    let num = resultDisplay.textContent;
    subsidiaryDisplay.textContent = num + sign;
    buttonContext = 'operation';
}