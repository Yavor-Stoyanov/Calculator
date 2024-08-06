export const isOperableKey = (e) => {
    const key = e.key;
    let keys;

    const numbers = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'
    ];

    const operations = [
        '+', '-', '*', '/',
        '%',
    ];

    if (numbers.includes(key)) {
        keys = 'numbers';
    } else if (operations.includes(key)) {
        keys = 'operations';
    }

    return keys;
};

export const blurFocus = (e) => setTimeout(() => e.target.blur(), 50);