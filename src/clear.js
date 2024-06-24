const clearBtn = document.querySelector('.clear');
const resultDisplay = document.getElementById('resultDisplay');
const subsidiaryDisplay = document.getElementById('subsidiaryDisplay');

clearBtn.addEventListener('click', () => {
    resultDisplay.textContent = '0';
    subsidiaryDisplay.textContent = '0';
});