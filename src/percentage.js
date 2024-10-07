import { blurFocus } from "./util.js";

export const percentageHandler = (e) => {
    if (subsidiaryDisplay.textContent == '0') {
        resultDisplay.textContent == '0';
    } else {
        resultDisplay.textContent = resultDisplay.textContent / 100;
    };

    blurFocus(e);
};