import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  INDEPENDENT = 'INDEPENDENT',
  ASSISTED = 'ASSISTED',
  MEMORY = 'MEMORY',
  LONGTERM = 'LONGTERM'
}

export enum Ambulation {
  NOLIMITATIONS = 'NOLIMITATIONS',
  CANE = 'CANE',
  WALKER = 'WALKER',
  WHEELCHAIR = 'WHEELCHAIR'
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


export type MutationcreateResidentArgs = {
  input: ResidentInput;
};


export type MutationcreateProgramArgs = {
  input: ProgramInput;
};


export type MutationsetAttendanceArgs = {
  input: AttendanceInput;
};

export type AddProgramMutationVariables = Exact<{
  input: ProgramInput;
}>;


export type AddProgramMutation = (
  { __typename?: 'Mutation' }
  & { createProgram: (
    { __typename?: 'Program' }
    & ProgramFragment
  ) }
);

export type ProgramsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProgramsListQuery = (
  { __typename?: 'Query' }
  & { programs: Array<(
    { __typename?: 'Program' }
    & ProgramFragment
  )> }
);

export type ProgramFragment = (
  { __typename?: 'Program' }
  & Pick<Program, 'id' | 'name' | 'location' | 'allDay' | 'start' | 'end' | 'tags' | 'dimension' | 'facilitators' | 'levelOfCare' | 'hobbies'>
  & { attendance: Array<(
    { __typename?: 'Attendance' }
    & AttendanceFragment
  )> }
);

export type AttendanceFragment = (
  { __typename?: 'Attendance' }
  & Pick<Attendance, 'residentId' | 'programId' | 'status'>
);

export type EnrollMutationVariables = Exact<{
  input: AttendanceInput;
}>;


export type EnrollMutation = (
  { __typename?: 'Mutation' }
  & { setAttendance: (
    { __typename?: 'Attendance' }
    & AttendanceFragment
  ) }
);

export type ProgramAttendanceFragment = (
  { __typename?: 'Program' }
  & Pick<Program, 'id'>
  & { attendance: Array<(
    { __typename?: 'Attendance' }
    & Pick<Attendance, 'programId' | 'residentId' | 'status'>
  )> }
);

export type AddResidentMutationVariables = Exact<{
  input: ResidentInput;
}>;


export type AddResidentMutation = (
  { __typename?: 'Mutation' }
  & { createResident: (
    { __typename?: 'Resident' }
    & ResidentFragment
  ) }
);

export type ResidentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ResidentsListQuery = (
  { __typename?: 'Query' }
  & { residents: Array<(
    { __typename?: 'Resident' }
    & ResidentFragment
  )> }
);

export type ResidentFragment = (
  { __typename?: 'Resident' }
  & Pick<Resident, 'id' | 'name' | 'preferredName' | 'status' | 'room' | 'levelOfCare' | 'ambulation' | 'birthDate' | 'moveInDate'>
);

export const AttendanceFragmentDoc = gql`
    fragment Attendance on Attendance {
  residentId
  programId
  status
}
    `;
export const ProgramFragmentDoc = gql`
    fragment Program on Program {
  id
  name
  location
  allDay
  start
  end
  tags
  attendance {
    ...Attendance
  }
  dimension
  facilitators
  levelOfCare
  hobbies
}
    ${AttendanceFragmentDoc}`;
export const ProgramAttendanceFragmentDoc = gql`
    fragment ProgramAttendance on Program {
  id
  attendance {
    programId
    residentId
    status
  }
}
    `;
export const ResidentFragmentDoc = gql`
    fragment Resident on Resident {
  id
  name
  preferredName
  status
  room
  levelOfCare
  ambulation
  birthDate
  moveInDate
}
    `;
export const AddProgramDocument = gql`
    mutation AddProgram($input: ProgramInput!) {
  createProgram(input: $input) {
    ...Program
  }
}
    ${ProgramFragmentDoc}`;
export type AddProgramMutationFn = Apollo.MutationFunction<AddProgramMutation, AddProgramMutationVariables>;

/**
 * __useAddProgramMutation__
 *
 * To run a mutation, you first call `useAddProgramMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProgramMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProgramMutation, { data, loading, error }] = useAddProgramMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProgramMutation(baseOptions?: Apollo.MutationHookOptions<AddProgramMutation, AddProgramMutationVariables>) {
        return Apollo.useMutation<AddProgramMutation, AddProgramMutationVariables>(AddProgramDocument, baseOptions);
      }
export type AddProgramMutationHookResult = ReturnType<typeof useAddProgramMutation>;
export type AddProgramMutationResult = Apollo.MutationResult<AddProgramMutation>;
export type AddProgramMutationOptions = Apollo.BaseMutationOptions<AddProgramMutation, AddProgramMutationVariables>;
export const ProgramsListDocument = gql`
    query ProgramsList {
  programs {
    ...Program
  }
}
    ${ProgramFragmentDoc}`;

/**
 * __useProgramsListQuery__
 *
 * To run a query within a React component, call `useProgramsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProgramsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProgramsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProgramsListQuery(baseOptions?: Apollo.QueryHookOptions<ProgramsListQuery, ProgramsListQueryVariables>) {
        return Apollo.useQuery<ProgramsListQuery, ProgramsListQueryVariables>(ProgramsListDocument, baseOptions);
      }
export function useProgramsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProgramsListQuery, ProgramsListQueryVariables>) {
          return Apollo.useLazyQuery<ProgramsListQuery, ProgramsListQueryVariables>(ProgramsListDocument, baseOptions);
        }
export type ProgramsListQueryHookResult = ReturnType<typeof useProgramsListQuery>;
export type ProgramsListLazyQueryHookResult = ReturnType<typeof useProgramsListLazyQuery>;
export type ProgramsListQueryResult = Apollo.QueryResult<ProgramsListQuery, ProgramsListQueryVariables>;
export const EnrollDocument = gql`
    mutation Enroll($input: AttendanceInput!) {
  setAttendance(input: $input) {
    ...Attendance
  }
}
    ${AttendanceFragmentDoc}`;
export type EnrollMutationFn = Apollo.MutationFunction<EnrollMutation, EnrollMutationVariables>;

/**
 * __useEnrollMutation__
 *
 * To run a mutation, you first call `useEnrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enrollMutation, { data, loading, error }] = useEnrollMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEnrollMutation(baseOptions?: Apollo.MutationHookOptions<EnrollMutation, EnrollMutationVariables>) {
        return Apollo.useMutation<EnrollMutation, EnrollMutationVariables>(EnrollDocument, baseOptions);
      }
export type EnrollMutationHookResult = ReturnType<typeof useEnrollMutation>;
export type EnrollMutationResult = Apollo.MutationResult<EnrollMutation>;
export type EnrollMutationOptions = Apollo.BaseMutationOptions<EnrollMutation, EnrollMutationVariables>;
export const AddResidentDocument = gql`
    mutation AddResident($input: ResidentInput!) {
  createResident(input: $input) {
    ...Resident
  }
}
    ${ResidentFragmentDoc}`;
export type AddResidentMutationFn = Apollo.MutationFunction<AddResidentMutation, AddResidentMutationVariables>;

/**
 * __useAddResidentMutation__
 *
 * To run a mutation, you first call `useAddResidentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResidentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResidentMutation, { data, loading, error }] = useAddResidentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddResidentMutation(baseOptions?: Apollo.MutationHookOptions<AddResidentMutation, AddResidentMutationVariables>) {
        return Apollo.useMutation<AddResidentMutation, AddResidentMutationVariables>(AddResidentDocument, baseOptions);
      }
export type AddResidentMutationHookResult = ReturnType<typeof useAddResidentMutation>;
export type AddResidentMutationResult = Apollo.MutationResult<AddResidentMutation>;
export type AddResidentMutationOptions = Apollo.BaseMutationOptions<AddResidentMutation, AddResidentMutationVariables>;
export const ResidentsListDocument = gql`
    query ResidentsList {
  residents {
    ...Resident
  }
}
    ${ResidentFragmentDoc}`;

/**
 * __useResidentsListQuery__
 *
 * To run a query within a React component, call `useResidentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useResidentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResidentsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useResidentsListQuery(baseOptions?: Apollo.QueryHookOptions<ResidentsListQuery, ResidentsListQueryVariables>) {
        return Apollo.useQuery<ResidentsListQuery, ResidentsListQueryVariables>(ResidentsListDocument, baseOptions);
      }
export function useResidentsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResidentsListQuery, ResidentsListQueryVariables>) {
          return Apollo.useLazyQuery<ResidentsListQuery, ResidentsListQueryVariables>(ResidentsListDocument, baseOptions);
        }
export type ResidentsListQueryHookResult = ReturnType<typeof useResidentsListQuery>;
export type ResidentsListLazyQueryHookResult = ReturnType<typeof useResidentsListLazyQuery>;
export type ResidentsListQueryResult = Apollo.QueryResult<ResidentsListQuery, ResidentsListQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export const namedOperations = {
  Query: {
    ProgramsList: 'ProgramsList',
    ResidentsList: 'ResidentsList'
  },
  Mutation: {
    AddProgram: 'AddProgram',
    Enroll: 'Enroll',
    AddResident: 'AddResident'
  },
  Fragment: {
    Program: 'Program',
    Attendance: 'Attendance',
    ProgramAttendance: 'ProgramAttendance',
    Resident: 'Resident'
  }
}