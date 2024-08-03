import { blurFocus } from "./util.js";

export const signChange = (e) => {
    if (resultDisplay.textContent.includes('-')) {
        resultDisplay.textContent = resultDisplay.textContent.slice(1);
    } else {
        resultDisplay.textContent = '-' + resultDisplay.textContent;
    }

    blurFocus(e);
};