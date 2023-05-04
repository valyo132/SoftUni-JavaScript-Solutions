function solve() {
  const textInput = document.getElementById('input');
  const output = document.getElementById('output');

  let allSentences = textInput.value
    .split('.')  
    .filter(s => s.length > 1);

  let index = 0;
  let newSentence = '';

  while(allSentences.length > 0){

    if(allSentences.length <= 3 && newSentence === ''){
      newSentence = allSentences.join('. ') + '.';
      const p = document.createElement('p');
      p.textContent = newSentence;
      output.appendChild(p);
      return;
    }

    currentSertence = allSentences.shift();
    index++;
    newSentence += currentSertence + '. ';

    if (index === 3){
      const p = document.createElement('p');
      p.textContent = newSentence;
      output.appendChild(p);
      index = 0;
      newSentence = '';
    }
  }
}