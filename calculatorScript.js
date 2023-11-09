const inputText = document.querySelector('.input-top');
const signText = document.querySelector('.signTxt');
const calculatedText = document.querySelector('.output-bottom');

const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const sevenBtn = document.querySelector('.sevenBtn');
const eightBtn = document.querySelector('.eightBtn');
const nineBtn = document.querySelector('.nineBtn');
const divideBtn = document.querySelector('.divideBtn');
const fourBtn = document.querySelector('.fourBtn');
const fiveBtn = document.querySelector('.fiveBtn');
const sixBtn = document.querySelector('.sixBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
const minusBtn = document.querySelector('.minusBtn');
const pointBtn = document.querySelector('.pointBtn');
const zeroBtn = document.querySelector('.zeroBtn');
const equalBtn = document.querySelector('.equalBtn');
const plusBtn = document.querySelector('.plusBtn');


inputText.textContent = '';
signText.textContent = '';
calculatedText.textContent = '';

let [numberOne, operator, numberTwo] = ['', '', ''];

let allOperators = ['+', '-', '÷', 'x'];

// const buttonArray = [
//     {name: 'divideBtn' , property: divideBtn , operatorSign: ' ' }
// ]

sevenBtn.addEventListener('click', () => {
    inputText.textContent += '7';
});
eightBtn.addEventListener('click', () => {
    inputText.textContent += '8';
});
nineBtn.addEventListener('click', () => {
    inputText.textContent += '9';
});
fourBtn.addEventListener('click', () => {
    inputText.textContent += '4';
});
fiveBtn.addEventListener('click', () => {
    inputText.textContent += '5';
});
sixBtn.addEventListener('click', () => {
    inputText.textContent += '6';
});
oneBtn.addEventListener('click', () => {
    inputText.textContent += '1';
});
twoBtn.addEventListener('click', () => {
    inputText.textContent += '2';
});
threeBtn.addEventListener('click', () => {
    inputText.textContent += '3';
});
pointBtn.addEventListener('click', () => {
    if (inputText.textContent == '') {
        inputText.textContent = '0.';
    } else {
        inputText.textContent += '.';
    }
})
zeroBtn.addEventListener('click', () => {
    inputText.textContent += '0';
});
const conversion = (string) => {
    if (!string.includes(operator)) {
        [numberOne, operator, numberTwo] = [string, ' + ', '0'];
    } else {
        [numberOne, numberTwo] = string.split(`${operator}`);
    }
}

const checkIfFirstCalculation = () => {
    let checkIfFirst = inputText.textContent;
    let [numOne, numTwo] = checkIfFirst.split(`${operator}`);
    if (numTwo == undefined) {
        return true;
    } else {
        return false;
    }
}

multiplyBtn.addEventListener('click', () => {
    if (!checkIfFirstCalculation()) {
        equalBtn.click();
    }
    if (!(calculatedText.textContent == '' || calculatedText.textContent == 'Error!')) {
        inputText.textContent = calculatedText.textContent;
    }
    if (inputText.textContent[inputText.textContent.length - 1] == '.') {
        inputText.textContent += '0';
    }
    operator = ' x ';
    if (inputText.textContent == '') {
        inputText.textContent = '0 x ';
    }
    else if (allOperators.some((element) => inputText.textContent[inputText.textContent.length - 2] == element)) {
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 3) + ' x ';
    }
    else {
        inputText.textContent += ' x ';
    }
});
divideBtn.addEventListener('click', () => {
    if (!checkIfFirstCalculation()) {
        equalBtn.click();
    }
    if (!(calculatedText.textContent == '' || calculatedText.textContent == 'Error!')) {
        inputText.textContent = calculatedText.textContent;
    }
    if (inputText.textContent[inputText.textContent.length - 1] == '.') {
        inputText.textContent += '0';
    }
    operator = ' ÷ ';
    if (inputText.textContent == '') {
        inputText.textContent = '0 ÷ ';
    }
    else if (allOperators.some((element) => inputText.textContent[inputText.textContent.length - 2] == element)) {
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 3) + ' ÷ ';
    }
    else {
        inputText.textContent += ' ÷ ';
    }
});

minusBtn.addEventListener('click', () => {
    if (!checkIfFirstCalculation()) {
        equalBtn.click();
    }
    if (!(calculatedText.textContent == '' || calculatedText.textContent == 'Error!')) {
        inputText.textContent = calculatedText.textContent;
    }
    if (inputText.textContent[inputText.textContent.length - 1] == '.') {
        inputText.textContent += '0';
    }
    operator = ' - ';
    if (inputText.textContent == '') {
        inputText.textContent = '0 - ';
    } else if (allOperators.some((element) => inputText.textContent[inputText.textContent.length - 2] == element)) {
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 3) + ' - ';
    } else {
        inputText.textContent += ' - ';
    }
});
plusBtn.addEventListener('click', () => {
    if (!checkIfFirstCalculation()) {
        equalBtn.click();
    }
    if (!(calculatedText.textContent == '' || calculatedText.textContent == 'Error!')) {
        inputText.textContent = calculatedText.textContent;
    }
    if (inputText.textContent[inputText.textContent.length - 1] == '.') {
        inputText.textContent += '0';
    }
    operator = ' + ';
    if (inputText.textContent == '') {
        inputText.textContent = '0 + ';
    } else if (allOperators.some((element) => inputText.textContent[inputText.textContent.length - 2] == element)) {
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 3) + ' + ';
    }
    else {
        inputText.textContent += ' + ';
    }
});

clearBtn.addEventListener('click', () => {
    inputText.textContent = '';
    calculatedText.textContent = '';
    signText.textContent = '';
    [numberOne, operator, numberTwo] = ['', '', ''];
});
deleteBtn.addEventListener('click', () => {
    if (inputText.textContent[inputText.textContent.length - 1] == ' ') {
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 2);
    } else {
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 1);
    }
});


equalBtn.addEventListener('click', () => {
    conversion(inputText.textContent);
    switch (operator) {
        case " + ": {
            calculatedText.textContent = numberOne * numberTwo;
            signText.textContent = '=';
            break;
        }
        case " - ": {
            calculatedText.textContent = numberOne - numberTwo;
            signText.textContent = '=';
            break;
        }
        case " x ": {
            calculatedText.textContent = numberOne * numberTwo;
            signText.textContent = '=';
            break;
        }
        case " ÷ ": {
            calculatedText.textContent = numberOne / numberTwo;
            signText.textContent = '=';
            break;
        }
        default: {
            calculatedText.textContent = '0';
            signText.textContent = '=';
            break;
        }
    }
}

)

