
document.addEventListener("DOMContentLoaded", (event) => {
    // select all the elemnts from the HTML and initialize the variables
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    const numberButtons = document.querySelectorAll(".numberButton");
    const clearButton = document.getElementById("clear");
    const operatorButtons = document.querySelectorAll(".operator");
    const equalButton = document.getElementById("equalButton");
    let firstNumber = 0;
    let secondNumber = 0;
    let operator = "";

    // add event listeners to the buttons
    // when a button is clicked, add the value to the display
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener("click", (event) => {
            // if there is a message on the display, clear it
            if (display.innerHTML === "Division by 0 is undefined!" || display.innerHTML === "Error") {
                display.innerHTML = ""; 
            }
            //add the value of the button to the display
            display.innerHTML += numberButton.innerHTML;
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
            firstNumber = Number(display.innerHTML);
            console.log(firstNumber);
            operator = operatorButton.innerHTML;
            display.innerHTML += operator;
            console.log(operator);            
    });
    });

    // when the equal button is clicked, get the second number and call the operate function
    equalButton.addEventListener("click", (event) => {
        //define the second number as everything that comes after the operator
        const operatorIndex = display.innerHTML.indexOf(operator);
        let secondNumber = display.innerHTML.slice(operatorIndex + 1);
        //validate the second number to check for errors
        if (secondNumber.trim() === "" || isNaN(Number(secondNumber)) || isNaN(Number(firstNumber))) {
            display.innerHTML = "Error"; //
            console.log("Error: Invalid second number");
            return; 
        }
        secondNumber = Number(secondNumber);
        console.log(secondNumber);
        try {
            display.innerHTML = operate(firstNumber, operator, secondNumber);
        }
        catch(error){                       
            display.innerHTML = "Error";    
            console.log(error);
        }
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