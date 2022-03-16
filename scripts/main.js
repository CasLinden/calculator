const add = function (num1, num2){
    return +num1 + +num2;
}

const subtract = function (num1, num2){
    return num1 - num2;
}

const multiply = function (num1, num2){
    return num1 * num2;
}

const divide = function (num1, num2){
    return num1 / num2;
}


const operate = function (num1, num2, operator){
    if(operator == '/') {
    if(num2 == 0){
      clear()
      alert("Uh oh, someone is trying to break the internet...")
      return
    }
    return divide(num1, num2);
    }
    if(operator == '*') {
    return multiply(num1, num2);
    }
    if(operator == '+') {
    return add(num1, num2);
    }
    if(operator == '-') {
    return subtract(num1, num2);
    }
}

let upperDisplayValue = "";
let displayValue = "";
let currentOperator = "";
let operand1

function updateDisplayValue(){
    let upperDisplay = document.querySelector('#display-upper')
    let display = document.querySelector('#display-lower')
    display.textContent = displayValue;
    upperDisplay.textContent = upperDisplayValue;
}

function enterOperand() {
    let operands = document.querySelectorAll('.operand');
    for(let i = 0; i < operands.length; i++){
        operands[i].addEventListener("click", e =>{
            displayValue += operands[i].textContent;
            updateDisplayValue()
        });
    }
}
enterOperand()

function storeDisplayValue(){
    if(displayValue != ""){
        operand1 = +displayValue;
    }
    displayValue = ""
}

function clickOperator(){
  
    const operators = document.querySelectorAll('.operator');
    for(let i = 0; i < operators.length; i++){
        operators[i].addEventListener("click", e =>{
            if(operand1 != null && displayValue != ""){
                result = operate(operand1, displayValue, currentOperator);
                displayValue = result;
            }
            currentOperator = operators[i].textContent;
            storeDisplayValue();
            upperDisplayValue = `${operand1}${currentOperator}`
            updateDisplayValue()
        });
    }
}
clickOperator()

function equals(){
    if(operand1 != null && displayValue != "" && currentOperator != ""){
        let result = operate(operand1, displayValue, currentOperator);
        displayValue = result;
        upperDisplayValue = "";
        updateDisplayValue();
        operand1 = result;
        displayValue = "";
    }
}

function equalsButton() {
    const equalsButton = document.querySelector('#btn18');
    equalsButton.addEventListener("click", e => {
        equals()
    });
}
equalsButton()

function addDeleteButton(){
    const deleteButton = document.querySelector('#btn2');
    deleteButton.addEventListener("click", e => {
        displayValue = displayValue.slice(0, -1);
        updateDisplayValue();
    });
}
addDeleteButton()

function clear(){
    displayValue = "";
    upperDisplayValue = "";
    updateDisplayValue();
    operand1 = null;
    currentOperator = "";
}

function addAcButton(){
    const acButton = document.querySelector('#btn1');
    acButton.addEventListener("click", e => {
        clear();
});
}
addAcButton()