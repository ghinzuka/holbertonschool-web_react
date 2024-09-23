// task_3/main.ts
// Import everything from crud.js as CRUD
import * as CRUD from './crud.js';
const row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
const newRowID = CRUD.insertRow(row);
const updateRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
const updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(125);
