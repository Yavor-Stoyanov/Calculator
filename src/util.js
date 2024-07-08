export const isOperableKey = (e) => {
    const key = e.key;
    const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '+', '-', '*', '/', '=',
        '%', 'Backspace', 'Delete', '.', 's', 'Enter'
    ];

    return allowedKeys.includes(key);
};