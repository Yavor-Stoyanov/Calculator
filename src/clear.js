const clearBtn = document.querySelector('.clear');
const displayElement = document.getElementById('input-output');
clearBtn.addEventListener('click', () => { displayElement.textContent = '0' });