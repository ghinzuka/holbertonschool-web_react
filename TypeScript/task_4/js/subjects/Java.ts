import { Subject } from './Subject';
import { Teacher } from './Teacher';


export namespace Subjects {

	export class Java extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for java"
		}
		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingJava > 0? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
		}
	}
}

