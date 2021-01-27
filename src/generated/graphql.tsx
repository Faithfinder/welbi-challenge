import { gql } from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A data and time, represented in ISO-8601 string */
  DateTime: any;
};

export enum EnumStatus {
  Active = 'Active',
  Passive = 'Passive',
  Declined = 'Declined',
  Undefined = 'Undefined'
}

export enum LevelOfCare {
  Independent = 'INDEPENDENT',
  Assisted = 'ASSISTED',
  Memory = 'MEMORY',
  Longterm = 'LONGTERM'
}

export enum Ambulation {
  Nolimitations = 'NOLIMITATIONS',
  Cane = 'CANE',
  Walker = 'WALKER',
  Wheelchair = 'WHEELCHAIR'
}


export type Resident = {
  __typename?: 'Resident';
  id: Scalars['ID'];
  name: Scalars['String'];
  preferredName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  room: Scalars['String'];
  attendance: Array<Attendance>;
  birthDate: Scalars['DateTime'];
  moveInDate: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  levelOfCare?: Maybe<LevelOfCare>;
  ambulation?: Maybe<Ambulation>;
};

export type Program = {
  __typename?: 'Program';
  id: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  location: Scalars['String'];
  allDay: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  name: Scalars['String'];
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  dimension: Scalars['String'];
  facilitators: Array<Scalars['String']>;
  levelOfCare: Array<LevelOfCare>;
  hobbies: Array<Scalars['String']>;
  isRepeated?: Maybe<Scalars['Boolean']>;
  attendance: Array<Attendance>;
  recurrence?: Maybe<Recurrence>;
};

export type Recurrence = {
  __typename?: 'Recurrence';
  frequency?: Maybe<Scalars['String']>;
  dtstart?: Maybe<Scalars['DateTime']>;
  interval?: Maybe<Scalars['Int']>;
  weekstart?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  until?: Maybe<Scalars['DateTime']>;
  byMonth?: Maybe<Scalars['Int']>;
  byMonthday?: Maybe<Scalars['Int']>;
  byYearday?: Maybe<Scalars['Int']>;
  byWeekno?: Maybe<Scalars['Int']>;
  byWeekday?: Maybe<Scalars['Int']>;
  byDay?: Maybe<Scalars['Int']>;
  byHour?: Maybe<Scalars['Int']>;
  byMinute?: Maybe<Scalars['Int']>;
  bySecond?: Maybe<Scalars['Int']>;
  bySetPos?: Maybe<Scalars['String']>;
};

export type Attendance = {
  __typename?: 'Attendance';
  status?: Maybe<EnumStatus>;
  resident?: Maybe<Resident>;
  program?: Maybe<Program>;
  programId: Scalars['ID'];
  residentId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  programs: Array<Program>;
  residents: Array<Resident>;
};

export type ProgramInput = {
  parentId?: Maybe<Scalars['ID']>;
  location: Scalars['String'];
  allDay: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  name: Scalars['String'];
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  dimension: Scalars['String'];
  facilitators: Array<Scalars['String']>;
  levelOfCare: Array<LevelOfCare>;
  hobbies: Array<Scalars['String']>;
  isRepeated?: Maybe<Scalars['Boolean']>;
};

export type ResidentInput = {
  name: Scalars['String'];
  preferredName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  room: Scalars['String'];
  birthDate: Scalars['DateTime'];
  moveInDate: Scalars['DateTime'];
  levelOfCare?: Maybe<LevelOfCare>;
  ambulation?: Maybe<Ambulation>;
};

export type AttendanceInput = {
  status: EnumStatus;
  residentId: Scalars['ID'];
  programId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createResident: Resident;
  createProgram: Program;
  setAttendance: Attendance;
};


export type MutationCreateResidentArgs = {
  input: ResidentInput;
};


export type MutationCreateProgramArgs = {
  input: ProgramInput;
};


export type MutationSetAttendanceArgs = {
  input: AttendanceInput;
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
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