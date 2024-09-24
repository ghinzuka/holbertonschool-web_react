import { Subject } from './Subject';
import { Teacher } from './Teacher';

export namespace Subjects {

	export class Cpp extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Cpp";
		}
		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
		}
	}
}
