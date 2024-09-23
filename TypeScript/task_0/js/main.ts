// write an nteface names Student that accepts the following elemetns: 
// firstName: string
// lastName: String
// age: number
// location: string
// Create 2 student cariables called student1 and student2 store them in an array studentList
// using Vanilla javascript rdender a table and for each elements in the array, append a new row to the table
// Each row should should contain the fisrt name of the sudent and the location

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'bap',
	lastName: 'pouq',
	age: 34,
	location: 'bordeaux'
}

const student2: Student = {
	firstName: 'nico',
	lastName: 'fouq',
	age: 28,
	location: 'bordeaux'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);