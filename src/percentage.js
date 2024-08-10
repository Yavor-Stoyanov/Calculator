import { resultHandler } from "./result.js";
import { blurFocus } from "./util.js";

export const percentageHandler = (e) => {
    if (subsidiaryDisplay.textContent == '0') {
        resultDisplay.textContent == '0';
    } else {
        const data = subsidiaryDisplay.textContent + resultDisplay.textContent;
        resultHandler(data);
        resultDisplay.textContent = resultDisplay.textContent * 100;
    };

    blurFocus(e);
};