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
