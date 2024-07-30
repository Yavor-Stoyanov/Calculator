clearBtn.addEventListener('click', (e) => {
    resultDisplay.textContent = '0';
    subsidiaryDisplay.textContent = '0';

    setTimeout(() => {
        e.target.blur();
    }, 50)
});