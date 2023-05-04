function subtract() {
    const firstNumerInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    let firstNum = Number(firstNumerInput.value);
    let secondNum = Number(secondNumberInput.value);

    let result = firstNum - secondNum;
    resultElement.textContent = result;
}