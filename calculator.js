// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
    return number1 / number2;
}

// Function to handle the calculation
function handleCalculation(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
    }

    document.getElementById('calculation-result').textContent = result;
}

// Add event listeners to the buttons
document.getElementById('add').addEventListener('click', function() {
    handleCalculation('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    handleCalculation('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    handleCalculation('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    handleCalculation('divide');
});
