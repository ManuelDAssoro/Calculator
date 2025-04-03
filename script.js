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