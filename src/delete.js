const displayElement = document.getElementById('input-output');

const delBtn = document.querySelector('.del');
delBtn.addEventListener('click', () => {
    let data = displayElement.textContent;
    data = data.slice(0, data.length - 1);
    data.length <= 0 ? displayElement.textContent = '0' : displayElement.textContent = data;
});