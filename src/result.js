import { blurFocus } from "./util.js";
import Decimal from "../node_modules/decimal.js/decimal.mjs";

let digitOne;
let operator;
let digitTwo;

let isSecondDigitNegative;
const regex = /[+\-*/]{2}/;

export const resultHandler = (data) => {
    isSecondDigitNegative = regex.test(data)

    if (subsidiaryDisplay.textContent.includes('=')) {
        const parts = [];
        parts[0] = resultDisplay.textContent;
        parts[1] = operator;
        parts[2] = digitTwo.toString();
        const currentExpressionNewResult = calculateHandler(parts);
        subsidiaryDisplay.textContent = resultDisplay.textContent + operator + digitTwo + '=';
        resultDisplay.textContent = currentExpressionNewResult;
    } else {
        const parts = data.split(/([\+\*/-])/);
        parts.forEach((el, i) => { if (el == '') { parts.splice(i, 1) } });

        if (parts.length < 3) {
            resultDisplay.textContent = '0';
            return;
        }

        const newExpressionResult = calculateHandler(parts);

        subsidiaryDisplay.textContent += resultDisplay.textContent + '=';
        resultDisplay.textContent = newExpressionResult;
    };
};

resultBtn.addEventListener('click', (e) => {
    const data = subsidiaryDisplay.textContent + resultDisplay.textContent;
    resultHandler(data);

    blurFocus(e);
});

const calculateHandler = (parts) => {
    let result;

    if (parts[0] == '-') {
        digitOne = new Decimal('-' + parts[1]);
        operator = parts[2];
    } else {
        digitOne = new Decimal(parts[0]);
        operator = parts[1];
    }

    if (isSecondDigitNegative) {
        digitTwo = new Decimal('-' + parts[parts.length - 1].replace('-', ''));
    } else {
        digitTwo = new Decimal(parts[parts.length - 1]);
    }

    switch (operator) {
        case '+':
            result = digitOne.plus(digitTwo);
            break;
        case '-':
            result = digitOne.minus(digitTwo);
            break;
        case '*':
            result = digitOne.times(digitTwo);
            break;
        case '/':
            result = digitOne.dividedBy(digitTwo);
            break;
        default:
            result = 'Error';
            break;
    }

    return result;
};