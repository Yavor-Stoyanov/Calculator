export const isOperableKey = (e) => {
    const key = e.key;
    let 

    const numbers = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'
    ];

    const operations = [
        '+', '-', '*', '/', '=',
        '%', 'Backspace', 'Delete', 's', 'Enter'
    ];

    return numbers.includes(key);
};