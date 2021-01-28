import { Scalars } from "../generated/graphql.types";

export const formatDate = (date: Scalars["DateTime"]): string => {
  return Intl.DateTimeFormat().format(new Date(date));
};
