// task_3/main.ts

/// <reference path="crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud.js';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
	age: 23
};

CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(newRowID);

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(125);