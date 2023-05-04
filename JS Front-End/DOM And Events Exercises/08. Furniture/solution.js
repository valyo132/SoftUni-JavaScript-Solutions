function solve() {
    const [generateButton, buyButton] = document.getElementsByTagName('button');
    const [input, output] = document.getElementsByTagName('textarea');
    const table = document.querySelector('table > tbody');

    generateButton.addEventListener('click', createFurniture);
    buyButton.addEventListener('click', purchase);

    function purchase(){
      const furnitureRow = Array.from(document.querySelectorAll('tbody tr input:checked'));
      let bouthItems = [];
      let totalPrice = 0;
      let decFactors = [];
      for (const row of furnitureRow) {
          const validItem = row.parentElement.parentElement;
          const itemName = validItem.querySelectorAll('td p')[0];
          bouthItems.push(itemName.textContent);
          const itemPrice = Number(validItem.querySelectorAll('td p')[1].textContent);
          totalPrice += itemPrice;
          const itemDecFactor = Number(validItem.querySelectorAll('td p')[2].textContent);
          decFactors.push(itemDecFactor);
      }

      output.value = `Bought furniture: ${bouthItems.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${findAverage(decFactors)}`;
    }

    function createFurniture(){
      let furnitureObject = JSON.parse(input.value);
      for (const {img, name, price, decFactor} of furnitureObject) {
        const newFurnitureElement = document.createElement('tr');

        const firstTd = document.createElement('td');
        const imageElement = document.createElement('img')
        imageElement.src = img;
        firstTd.appendChild(imageElement);

        const secondTd = document.createElement('td');
        const furnitureName = document.createElement('p');
        furnitureName.textContent = name;
        secondTd.appendChild(furnitureName);

        const thirdTd = document.createElement('td');
        const priceElement = document.createElement('p');
        priceElement.textContent = price;
        thirdTd.appendChild(priceElement);

        const fourthTd = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        fourthTd.appendChild(checkbox);
        
        const decFactorTd = document.createElement('td');
        const decFactorElement = document.createElement('p');
        decFactorElement.textContent = decFactor;
        decFactorTd.appendChild(decFactorElement);

        newFurnitureElement.appendChild(firstTd);
        newFurnitureElement.appendChild(secondTd);
        newFurnitureElement.appendChild(thirdTd);
        newFurnitureElement.appendChild(decFactorTd);
        newFurnitureElement.appendChild(fourthTd);
        table.appendChild(newFurnitureElement);
    }
  }

  function findAverage(input){
    let sum = input.reduce(((a, b) => a + b));
    let avg = sum / input.length;
    return avg;
  }
}