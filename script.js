
document.addEventListener("DOMContentLoaded", (event) => {
    // select all the elemnts from the HTML and initialize the variables
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    const clearButton = document.getElementById("clear");
    const operatorButtons = document.querySelectorAll(".operator");
    const equalButton = document.getElementById("equalButton");
    let firstNumber = 0;
    let secondNumber = 0;
    let operator = "";
    // add event listeners to the buttons
    // when a button is clicked, add the value to the display
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            display.innerHTML += button.innerHTML;
        });
    });
    // when the clear button is clicked, clear the display
    clearButton.addEventListener("click", (event) => {
        display.innerHTML = "";
    });
    // when an operator button is clicked, get the first number and the operator
    operatorButtons.forEach((operatorButton) => {    
        operatorButton.addEventListener("click", (event) => {
            firstNumber = Number((display.innerHTML).slice(0, -1));
            operator = operatorButton.innerHTML;            
    });
    });
    // when the equal button is clicked, get the second number and call the operate function
    equalButton.addEventListener("click", (event) => {
        secondNumber = Number(display.innerHTML.slice(firstNumber.toString().length + 1, -1));                  
            display.innerHTML = operate(firstNumber, operator, secondNumber);
    })
});



function operate (firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case 'x':
            return firstNumber * secondNumber;
            break;
        case '%':
            return firstNumber / secondNumber;
            break;
    }
}