import {
  ProgramAttendanceFragment,
  ProgramAttendanceFragmentDoc,
  useEnrollMutation as useEnrollMutationBase,
} from "../../generated/graphql.types";

export const useEnrollMutation = (onCompleted?: () => void) =>
  useEnrollMutationBase({
    onCompleted,
    update: (cache, result) => {
      if (result.data) {
        const currentProgram = cache.readFragment<ProgramAttendanceFragment>({
          id: `Program:${result.data.setAttendance.programId}`,
          fragment: ProgramAttendanceFragmentDoc,
        });

        cache.writeFragment({
          id: `Program:${result.data.setAttendance.programId}`,
          fragment: ProgramAttendanceFragmentDoc,
          data: {
            attendance: [
              ...(currentProgram?.attendance ?? []),
              result.data.setAttendance,
            ],
          },
        });
      }
    },
  });
