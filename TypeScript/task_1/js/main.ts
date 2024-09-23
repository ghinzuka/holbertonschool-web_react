interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

const teacher1: Teacher = {
	firstName: 'bap',
	lastName: 'pouq',
	fullTimeEmployee: true,
	yearsOfExperience: 10,
	location: 'bordeaux',
	paid: true,
	handsome: true
}

console.log(teacher1);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'bap',
	lastName: 'pouq',
	fullTimeEmployee: true,
	yearsOfExperience: 10,
	location: 'bordeaux',
	paid: true,
	handsome: true,
	numberOfReports: 10
}

console.log(director1);

function printTeacher (firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}, ${lastName}`;
}
console.log(printTeacher('bap', 'pouq'));

// write in interface for the function named printTeacherFunction

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

interface StudentConstructor {
	new(firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentInterface{
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return 'Currently working'
	}
	displayName(): string {
		return this.firstName;
	}
}

const student: StudentInterface = new StudentClass('bap', 'pouq');
console.log(student.workOnHomework());
console.log(student.displayName());
