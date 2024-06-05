const displayElement = document.getElementById('input-output');
const resultBtn = document.querySelector('.equal');

const resultHandler = (data) => {
    const parts = data.split(/([+*\/-])/);
    if (parts.length < 3 || parts[2] == '') {
        displayElement.textContent = '0';
        return;
    }

    const leftNumber = +parts[0];
    const operator = parts[1];
    const rightNumber = +parts[2];

    let result;

    switch (operator) {
        case '+':
            result = leftNumber + rightNumber;
            break;
        case '-':
            result = leftNumber - rightNumber;
            break;
        case '*':
            result = leftNumber * rightNumber;
            break;
        case '/':
            result = leftNumber / rightNumber;
            break;
    }

    displayElement.textContent = result;
};

resultBtn.addEventListener('click', () => {
    const data = displayElement.textContent;
    resultHandler(data);
});