delBtn.addEventListener('click', () => {
    let data = resultDisplay.textContent;
    data = data.slice(0, data.length - 1);
    data.length <= 0 ? resultDisplay.textContent = '0' : resultDisplay.textContent = data;
});