let digitOne;
let operator;
let digitTwo;
let result;
let resultBtnCounter;

const resultHandler = (data) => {
    
    if (resultBtnCounter > 0) {
        parts[0] = result;
        parts[1] = operator;
        parts[2] = digitTwo;
    }
    const parts = data.split(/([\+\*/-])/);
    parts.forEach((el, i) => { if (el == '') { parts.splice(i, 1) } });

    if (parts.length < 3) {
        resultDisplay.textContent = '0';
        return;
    }

    parts.forEach((el, i) => {
        if (i == 0) {
            digitOne = +el;
            return;
        }

        if (isNaN(el)) {
            operator = el;
        } else {
            digitTwo = +el;

            switch (operator) {
                case '+':
                    result = digitOne + digitTwo;
                    break;
                case '-':
                    result = digitOne - digitTwo;
                    break;
                case '*':
                    result = digitOne * digitTwo;
                    break;
                case '/':
                    result = digitOne / digitTwo;
                    break;
                default:
                    resultDisplay.textContent = 'Error';
                    break;
            }
        }
    });

    subsidiaryDisplay.textContent += resultDisplay.textContent + '=';
    resultDisplay.textContent = result;

    resultBtnCounter++;
};

resultBtn.addEventListener('click', () => {
    const data = subsidiaryDisplay.textContent + resultDisplay.textContent;
    resultHandler(data);
});