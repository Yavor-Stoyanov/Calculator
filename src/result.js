const displayElement = document.getElementById('input-output');

const resultBtn = document.getElementsByClassName('equal')[0];
resultBtn.addEventListener('click', () => {
    const data = displayElement.textContent;
    resultBtn.addEventListener('click', resultHandler(data));
});

const resultHandler = (data) => {
    const leftNumber = +data.split(/[+*\/-]/)[0];
    const rightNumber = +data.split(/[+*\/-]/)[1];
    const operator = data.match(/[+*\/-]/)[0];
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