import { blurFocus } from "./util.js";
import Decimal from "../node_modules/decimal.js/decimal.mjs";

let digitOne;
let operator;
let digitTwo;

export const resultHandler = (data) => {
    if (subsidiaryDisplay.textContent.includes('=')) {
        const parts = [];
        parts[0] = resultDisplay.textContent;
        parts[1] = operator;
        parts[2] = digitTwo;
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

    parts.forEach((el, i) => {
        if (i == 0) {
            digitOne = new Decimal(el);
            return;
        }

        if (isNaN(el)) {
            operator = el;
        } else {
            digitTwo = new Decimal(el);

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
        }
    });

    return result;
};