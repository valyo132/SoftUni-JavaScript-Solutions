function employeesCreator(input){
    let employees = {};

    for (const line of input) {
        employees[line] = line.length;
    }

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

employeesCreator(
    [

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

]   
)