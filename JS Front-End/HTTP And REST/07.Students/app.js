const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
loadStudents();

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', attachEvents);

function attachEvents() {
  let person = validateInput();
  if (person !== undefined) {
    fetch(BASE_URL, {method: 'post', body: JSON.stringify(person)});
    loadStudents();
  }
}

function loadStudents() {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      for (const key in data) {
        let { firstName, lastName, facultyNumber, grade, _id } = data[key];

        const tr = document.createElement('tr');
        
        const firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstName;
        const lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastName;
        const facultyNumberTd = document.createElement('td');
        facultyNumberTd.textContent = facultyNumber;
        const gradeTd = document.createElement('td');
        gradeTd.textContent = grade;
        
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(facultyNumberTd);
        tr.appendChild(gradeTd);
        tbody.appendChild(tr);
      }
    });
}

function validateInput() {
  const firstNameInput = document.getElementsByName('firstName')[0];
  const lastNameInput = document.getElementsByName('lastName')[0];
  const facultyNumberInput = document.getElementsByName('facultyNumber')[0];
  const gradeInput = document.getElementsByName('grade')[0];

  firstNameValue = firstNameInput.value;
  lastNameValue = lastNameInput.value;
  facultyNumberValue = facultyNumberInput.value;
  gradeValue = gradeInput.value;

  if (firstNameValue !== '' && lastNameValue !== '' && facultyNumberValue !== '' && gradeValue !== '') {
    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumberInput.value = '';
    gradeInput.value = '';
    
    return {
      firstName: firstNameValue,
      lastName: lastNameValue,
      facultyNumber: facultyNumberValue,
      grade: gradeValue
    };
  }
}

{/* <tr>
    <td>Ivan</td>
 </tr>
<tr>
   <td>Gosho</td>
</tr> */}

//attachEvents();