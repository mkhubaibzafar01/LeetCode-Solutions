var decodeString = function(s) {
    const countStack = [];
    const stringStack = [];
    let currentString = '';
    let k = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            k = k * 10 + Number(char);
        } else if (char === '[') {
            countStack.push(k);
            stringStack.push(currentString);
            currentString = '';
            k = 0;
        } else if (char === ']') {
            let decodedString = stringStack.pop();
            let currentCount = countStack.pop();
            currentString = decodedString + currentString.repeat(currentCount);
        } else {
            currentString += char;
        }
    }

    return currentString;
};