function create(words) {
   const divElement = document.getElementById('content');

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      divElement.appendChild(div);

      div.addEventListener('click', () => {
         p.style.display = 'inline';
      });
   }
}