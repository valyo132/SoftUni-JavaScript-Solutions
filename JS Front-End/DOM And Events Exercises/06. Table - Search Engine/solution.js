function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputValue = document.getElementById('searchField');
      const profiles = Array.from(document.querySelectorAll('tbody tr'));
      
      for (const tr of profiles) {
         tr.classList.remove('select');
         const profileValues = Array.from(tr.getElementsByTagName('td'));
         
         for (const td of profileValues) {
            if (td.textContent.toLowerCase().includes(inputValue.value.toLowerCase())){
               tr.className = 'select';
            }
         }
      }

      inputValue.value = '';
   }
}