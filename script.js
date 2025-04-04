
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
            // if there is a message on the display, clear it
            if (display.innerHTML === "Division by 0 is undefined!") {
                display.innerHTML = ""; 
            }
            //add the value of the button to the display
            display.innerHTML += button.innerHTML;
        });
    });

    // when the clear button is clicked, clear the display and the variables
    clearButton.addEventListener("click", (event) => {
        display.innerHTML = "";
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
    });

    // when an operator button is clicked, get the first number and the operator
    operatorButtons.forEach((operatorButton) => {    
        operatorButton.addEventListener("click", (event) => {
            // we need the ammount of characters to cut from the display to get the second number later
            firstInputLength = display.innerHTML.length;
            firstNumber = Number((display.innerHTML).slice(0, -1));
            console.log(firstNumber);
            operator = operatorButton.innerHTML;            
    });
    });

    // when the equal button is clicked, get the second number and call the operate function
    equalButton.addEventListener("click", (event) => {
        secondNumber = Number(display.innerHTML.slice(firstInputLength + 1, -1));                  
            display.innerHTML = operate(firstNumber, operator, secondNumber, display);
    })
});



function operate (firstNumber, operator, secondNumber, display) {
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
        case '÷':
            if(secondNumber == 0){
                return "Division by 0 is undefined!";

            }
            else{
                return firstNumber / secondNumber;
            }
                
            break;
    }
}