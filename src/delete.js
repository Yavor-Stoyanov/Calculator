import { blurFocus } from "./util.js";

export const delDigit = (e) => {
    let data = resultDisplay.textContent;
    data = data.slice(0, data.length - 1);
    data.length <= 0 ? resultDisplay.textContent = '0' : resultDisplay.textContent = data;

    if (subsidiaryDisplay.textContent.includes('=')) {
        subsidiaryDisplay.textContent = '0';
    }

    blurFocus(e);
};

delBtn.addEventListener('click', delDigit);