import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ResidentKeySpecifier = ('id' | 'name' | 'preferredName' | 'status' | 'firstName' | 'lastName' | 'room' | 'attendance' | 'birthDate' | 'moveInDate' | 'createdAt' | 'updatedAt' | 'levelOfCare' | 'ambulation' | ResidentKeySpecifier)[];
export type ResidentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredName?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	room?: FieldPolicy<any> | FieldReadFunction<any>,
	attendance?: FieldPolicy<any> | FieldReadFunction<any>,
	birthDate?: FieldPolicy<any> | FieldReadFunction<any>,
	moveInDate?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	levelOfCare?: FieldPolicy<any> | FieldReadFunction<any>,
	ambulation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramKeySpecifier = ('id' | 'parentId' | 'location' | 'allDay' | 'tags' | 'name' | 'start' | 'end' | 'dimension' | 'facilitators' | 'levelOfCare' | 'hobbies' | 'isRepeated' | 'attendance' | 'recurrence' | ProgramKeySpecifier)[];
export type ProgramFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	allDay?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	dimension?: FieldPolicy<any> | FieldReadFunction<any>,
	facilitators?: FieldPolicy<any> | FieldReadFunction<any>,
	levelOfCare?: FieldPolicy<any> | FieldReadFunction<any>,
	hobbies?: FieldPolicy<any> | FieldReadFunction<any>,
	isRepeated?: FieldPolicy<any> | FieldReadFunction<any>,
	attendance?: FieldPolicy<any> | FieldReadFunction<any>,
	recurrence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecurrenceKeySpecifier = ('frequency' | 'dtstart' | 'interval' | 'weekstart' | 'count' | 'until' | 'byMonth' | 'byMonthday' | 'byYearday' | 'byWeekno' | 'byWeekday' | 'byDay' | 'byHour' | 'byMinute' | 'bySecond' | 'bySetPos' | RecurrenceKeySpecifier)[];
export type RecurrenceFieldPolicy = {
	frequency?: FieldPolicy<any> | FieldReadFunction<any>,
	dtstart?: FieldPolicy<any> | FieldReadFunction<any>,
	interval?: FieldPolicy<any> | FieldReadFunction<any>,
	weekstart?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	until?: FieldPolicy<any> | FieldReadFunction<any>,
	byMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	byMonthday?: FieldPolicy<any> | FieldReadFunction<any>,
	byYearday?: FieldPolicy<any> | FieldReadFunction<any>,
	byWeekno?: FieldPolicy<any> | FieldReadFunction<any>,
	byWeekday?: FieldPolicy<any> | FieldReadFunction<any>,
	byDay?: FieldPolicy<any> | FieldReadFunction<any>,
	byHour?: FieldPolicy<any> | FieldReadFunction<any>,
	byMinute?: FieldPolicy<any> | FieldReadFunction<any>,
	bySecond?: FieldPolicy<any> | FieldReadFunction<any>,
	bySetPos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttendanceKeySpecifier = ('status' | 'resident' | 'program' | 'programId' | 'residentId' | AttendanceKeySpecifier)[];
export type AttendanceFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	resident?: FieldPolicy<any> | FieldReadFunction<any>,
	program?: FieldPolicy<any> | FieldReadFunction<any>,
	programId?: FieldPolicy<any> | FieldReadFunction<any>,
	residentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('programs' | 'residents' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	residents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createResident' | 'createProgram' | 'setAttendance' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createResident?: FieldPolicy<any> | FieldReadFunction<any>,
	createProgram?: FieldPolicy<any> | FieldReadFunction<any>,
	setAttendance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Resident?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResidentKeySpecifier | (() => undefined | ResidentKeySpecifier),
		fields?: ResidentFieldPolicy,
	},
	Program?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramKeySpecifier | (() => undefined | ProgramKeySpecifier),
		fields?: ProgramFieldPolicy,
	},
	Recurrence?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecurrenceKeySpecifier | (() => undefined | RecurrenceKeySpecifier),
		fields?: RecurrenceFieldPolicy,
	},
	Attendance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttendanceKeySpecifier | (() => undefined | AttendanceKeySpecifier),
		fields?: AttendanceFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	}
};