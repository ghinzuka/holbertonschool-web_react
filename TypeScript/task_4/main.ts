import { Cpp } from './js/subjects/Cpp';
import { React } from './js/subjects/React';
import { Java } from './js/subjects/Java';
import { Teacher } from './js/subjects/Teacher';

const cppTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

const reactTeacher: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  experienceTeachingReact: 5
};

const javaTeacher: Teacher = {
  firstName: 'Tom',
  lastName: 'Jones',
  experienceTeachingJava: 3
};

// Tester Cpp
const cppSubject = new Cpp();
cppSubject.setTeacher(cppTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

// Tester React
const reactSubject = new React();
reactSubject.setTeacher(reactTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());

// Tester Java
const javaSubject = new Java();
javaSubject.setTeacher(javaTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());
