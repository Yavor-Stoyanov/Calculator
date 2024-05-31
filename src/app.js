let displayElement = document.getElementById('input-output');

const numbersBtn = document.querySelectorAll('.numbers');
numbersBtn.forEach(btn => {
    btn.addEventListener('click', onClickHandler)
});

function onClickHandler(e) {
    displayElement.textContent = displayElement.textContent.replace(/^0+/, '');
    let number = e.target.textContent;
    displayElement.textContent += number;
}