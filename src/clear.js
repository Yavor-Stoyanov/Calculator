import { blurFocus } from "./util.js";

export const clearAll = (e) => {
    resultDisplay.textContent = '0';
    subsidiaryDisplay.textContent = '0';

    blurFocus(e);
};

clearBtn.addEventListener('click', clearAll);