let currentInput = '';
let operator = '';
let firstOperand = null;
let waitingForSecondOperand = false;

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        currentInput = number;
        waitingForSecondOperand = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (!waitingForSecondOperand) {
        calculate();
    }

    operator = op;
    waitingForSecondOperand = true;
}

function calculate() {
    if (waitingForSecondOperand) {
        return;
    }

    const secondOperand = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = (firstOperand + secondOperand).toString();
            break;
        case '-':
            currentInput = (firstOperand - secondOperand).toString();
            break;
        case '*':
            currentInput = (firstOperand * secondOperand).toString();
            break;
        case '/':
            currentInput = (firstOperand / secondOperand).toString();
            break;
        default:
            return;
    }

    operator = '';
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}
