import { TypedTypePolicies } from "../../generated/apolloHelpers";

export const typePolicies: TypedTypePolicies = {
  Attendance: {
    keyFields: ["programId", "residentId"],
  },
};
