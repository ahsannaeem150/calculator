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

const digitButtonArray = [
    { name: 'zeroBtn', property: zeroBtn, number: '0' },
    { name: 'oneBtn', property: oneBtn, number: '1' },
    { name: 'twoBtn', property: twoBtn, number: '2' },
    { name: 'threeBtn', property: threeBtn, number: '3' },
    { name: 'fourBtn', property: fourBtn, number: '4' },
    { name: 'fiveBtn', property: fiveBtn, number: '5' },
    { name: 'sixBtn', property: sixBtn, number: '6' },
    { name: 'sevenBtn', property: sevenBtn, number: '7' },
    { name: 'eightBtn', property: eightBtn, number: '8' },
    { name: 'nineBtn', property: nineBtn, number: '9' },
];

digitButtonArray.forEach(digitButtonElement => {
    digitButtonElement.property.addEventListener('click', () => {
        inputText.textContent += digitButtonElement.number;
    })
})


//handles if point is pressed when text was empty
pointBtn.addEventListener('click', () => {
    if ((inputText.textContent == '') || (inputText.textContent[inputText.textContent.length - 1] == ' ')) {
        inputText.textContent += '0.';
    } else {
        inputText.textContent += '.';
    }
})

//converts the input and splits it into different variable of an array
const conversion = (string) => {
    if (!string.includes(operator)) {
        [numberOne, operator, numberTwo] = [string, ' + ', '0'];
    } else {
        [numberOne, numberTwo] = string.split(`${operator}`);
    }
}

//check if this is the first step in multiple calculation query [Multiple question query = '9 x 9 x 5' where first step is '9 x 9']
const checkIfFirstCalculation = () => {
    let checkIfFirst = inputText.textContent;
    let [numOne, numTwo] = checkIfFirst.split(`${operator}`);
    if (numTwo == undefined) {
        return true;
    } else {
        return false;
    }
}


const operatorButtonArray = [
    { name: 'divideBtn', property: divideBtn, operatorSign: ' ÷ ' },
    { name: 'multiplyBtn', property: multiplyBtn, operatorSign: ' x ' },
    { name: 'minusBtn', property: minusBtn, operatorSign: ' - ' },
    { name: 'plusBtn', property: plusBtn, operatorSign: ' + ' }
]
operatorButtonArray.forEach(buttonElement => {
    buttonElement.property.addEventListener('click', () => {
        if ((!checkIfFirstCalculation()) && (!(allOperators.some((element) => inputText.textContent[inputText.textContent.length - 2] == element)))) {      //check if not first calculation and textContent's second last value is not an operator
            equalBtn.click();
        }
        if (!(calculatedText.textContent == '' || calculatedText.textContent == 'Error!')) {  //convert calculated result into an input for next calculation
            inputText.textContent = calculatedText.textContent;
        }
        if (inputText.textContent[inputText.textContent.length - 1] == '.') {     //pressed when inputNumberOne was 0.  [converts 0. into 0.0]
            inputText.textContent += '0';
        }
        operator = buttonElement.operatorSign;    //  operator = ' x ';
        if (inputText.textContent == '') {    //treats 0 as numberOne if operator key is pressed directly
            inputText.textContent = `0${buttonElement.operatorSign}`;
        } //replaces operator with another operator rather than adding both in inputText string
        else if ((allOperators.some((element) => inputText.textContent[inputText.textContent.length - 2] == element)) && !(inputText.textContent[0] == '-')) {
            inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 3) + buttonElement.operatorSign;
        }
        else { //concat operatorSign in the text string
            inputText.textContent += buttonElement.operatorSign;
        }
    })
})

clearBtn.addEventListener('click', () => {
    inputText.textContent = '';
    calculatedText.textContent = '';
    signText.textContent = '';
    [numberOne, operator, numberTwo] = ['', '', ''];
});


deleteBtn.addEventListener('click', () => {
    if (inputText.textContent[inputText.textContent.length - 1] == ' ') { //to remove operatorSigns
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 2);
    } else { //to remove simpleNumbers
        inputText.textContent = inputText.textContent.slice(0, inputText.textContent.length - 1);
    }
});

equalBtn.addEventListener('click', () => {
    conversion(inputText.textContent);
    switch (operator) {
        case " + ": {
            calculatedText.textContent = parseFloat(numberOne) + parseFloat(numberTwo);
            signText.textContent = '=';
            break;
        }
        case " - ": {
            calculatedText.textContent = parseFloat(numberOne) - parseFloat(numberTwo);
            signText.textContent = '=';
            break;
        }
        case " x ": {
            calculatedText.textContent = parseFloat(numberOne) * parseFloat(numberTwo);
            signText.textContent = '=';
            break;
        }
        case " ÷ ": {
            calculatedText.textContent = parseFloat(numberOne) / parseFloat(numberTwo);
            signText.textContent = '=';
            break;
        }
        default: {
            calculatedText.textContent = '0';
            signText.textContent = '=';
            break;
        }
    }
});

