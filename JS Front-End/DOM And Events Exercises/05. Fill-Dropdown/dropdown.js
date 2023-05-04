function addItem() {
    const inputValues = Array.from(document.querySelectorAll('input[type="text"]'));
    const menu = document.getElementById('menu');
    const optionElement = document.createElement('option');
    
    let textInput = inputValues[0].value;
    let valueInput = inputValues[1].value;
    optionElement.textContent = `${textInput} - ${valueInput}`;
    menu.appendChild(optionElement);
    inputValues.forEach(box => box.value = '');
}