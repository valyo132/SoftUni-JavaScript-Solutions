const PHONEBOOK_URL = 'http://localhost:3030/jsonstore/phonebook';
const loadBtn = document.getElementById('btnLoad');
const phonebookUl = document.getElementById('phonebook');
const createBtn = document.getElementById('btnCreate');

loadBtn.addEventListener('click', loadPhonebook);
createBtn.addEventListener('click', attachEvents);

async function attachEvents() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    let personValue = personInput.value;
    let phoneValue = phoneInput.value;
    let object = { person: personValue, phone: phoneValue };

    await fetch(PHONEBOOK_URL, {method: 'post', body: JSON.stringify(object)});
    loadPhonebook();

    personInput.value = '';
    phoneInput.value = '';
}

function loadPhonebook(){
    while (phonebookUl.firstChild) {    
        phonebookUl.removeChild(phonebookUl.firstChild);
      }

    fetch(PHONEBOOK_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                let {person, phone, _id} = data[key];

                const li = document.createElement('li');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete'
                deleteBtn.addEventListener('click', () => deletePhone(_id));

                li.textContent = `${person}: ${phone}`;
                li.appendChild(deleteBtn);
                phonebookUl.appendChild(li);
            };
        });
}

async function deletePhone(id){
    await fetch(`${PHONEBOOK_URL}/${id}`, { method: 'delete'})
    loadPhonebook();
}

//attachEvents();