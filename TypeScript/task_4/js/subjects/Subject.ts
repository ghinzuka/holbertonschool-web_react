import { Teacher } from './Teacher';

export namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}