const BASE_URL = 'http://localhost:3030/jsonstore/collections/books';
const loadBooksBth = document.getElementById('loadBooks');
const submitBtn = document.querySelectorAll("button")[5];

loadBooksBth.addEventListener('click', loadBooks);
submitBtn.addEventListener('click', attachEvents)

async function attachEvents() {
  console.log('bad');
  const titleInput = document.getElementsByName('title')[0];
  const authorInput = document.getElementsByName('author')[0];
  let titleValue = titleInput.value;
  let authorValue = authorInput.value;

  let obj = {
    author: authorValue,
    title: titleValue
  };

  await fetch(BASE_URL, {method: 'post', body: JSON.stringify(obj)});
  await loadBooks();

  titleInput.value = '';
  authorInput.value = '';
}

async function loadBooks() {
  const tbody = document.querySelector('table > tbody');
  tbody.innerHTML = '';

  const loadBooksRes = await fetch(BASE_URL);
  const booksData = await loadBooksRes.json();
  for (const key in booksData) {
    let {author, title} = booksData[key];

    const tr = document.createElement('tr');
    const bookTd = document.createElement('td');
    bookTd.textContent = title;
    const authorTd = document.createElement('td');
    authorTd.textContent = author;
    const buttonsTd = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editBook(key));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteBook(key));
    buttonsTd.appendChild(editButton);
    buttonsTd.appendChild(deleteButton);

    tr.appendChild(bookTd);
    tr.appendChild(authorTd);
    tr.appendChild(buttonsTd);
    tbody.appendChild(tr);
  }
}

async function editBook(id){
  const titleInput = document.getElementsByName('title')[0];
  const authorInput = document.getElementsByName('author')[0];
  const buttons = document.querySelectorAll("button");
  const saveBtn = buttons[buttons.length - 1];
  const h3 = document.querySelector('h3');
  h3.textContent = 'Edit FORM';
  submitBtn.textContent = 'Save';
  
  const loadBooksRes = await fetch(BASE_URL);
  const booksData = await loadBooksRes.json();
  for (const key in booksData) {
    if (key === id) {
      let {author, title} = booksData[key];
      titleInput.value = title;
      authorInput.value = author;
    }
  }

  saveBtn.removeEventListener('click', attachEvents);
  saveBtn.addEventListener('click', () => saveNewBook(id));
}

async function saveNewBook(id){
  const titleInput = document.getElementsByName('title')[0];
  const authorInput = document.getElementsByName('author')[0];
  let objToEdit = {
    author: authorInput.value,
    title: titleInput.value
  };

  await fetch(`${BASE_URL}/${id}`, {method: 'put', body: JSON.stringify(objToEdit)});
  await loadBooks();
}

async function deleteBook(id){
    await fetch(`${BASE_URL}/${id}`, {method: 'delete'});
    await loadBooks();
}

{/* <tr>
        <td>Book 1</td>
       <td>Author 1
     <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
  </tr> */}

//attachEvents();