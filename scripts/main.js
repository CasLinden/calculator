const add = function (num1, num2){
    return num1 + num2;
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
    if(operator == "divide" || operator == '/') {
    return divide(num1, num2);
    }
    if(operator == "multiply" || operator == '*') {
    return multiply(num1, num2);
    }
    if(operator == "add" || operator == '+') {
    return add(num1, num2);
    }
    if(operator == "subtract" || operator == '-') {
    return subtract(num1, num2);
    }
}

