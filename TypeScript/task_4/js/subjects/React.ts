import { Subject } from './Subject';
import { Teacher } from './Teacher';

export namespace Subjects {
	
	export class React extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for React";
		}
		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
		}
	}
}