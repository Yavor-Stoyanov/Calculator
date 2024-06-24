const resultHandler = (data) => {
    const parts = data.split(/([+*\/-])/);
    parts.forEach((el, i) => { if (el == '') { parts.splice(i, 1) } });

    if (parts.length < 3) {
        resultDisplay.textContent = '0';
        return;
    }

    let digitOne;
    let operator;
    let result;

    parts.forEach((el, i) => {
        if (i == 0) {
            digitOne = +el;
            return;
        }

        if (isNaN(el)) {
            operator = el;
        } else {
            switch (operator) {
                case '+':
                    result = digitOne + +el;
                    break;
                case '-':
                    result = digitOne - +el;
                    break;
                case '*':
                    result = digitOne * +el;
                    break;
                case '/':
                    result = digitOne / +el;
                    break;
                default:
                    resultDisplay.textContent = 'Error';
                    break;
            }
            digitOne = result;
        }
    });

    subsidiaryDisplay.textContent += resultDisplay.textContent + '=';
    resultDisplay.textContent = result;
};

resultBtn.addEventListener('click', () => {
    const data = subsidiaryDisplay.textContent + resultDisplay.textContent;
    resultHandler(data);
});