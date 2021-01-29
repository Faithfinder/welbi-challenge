import { format } from "date-fns";

export const formatDateTime = (date: Date): string => {
  return format(date, "dd MMM yyyy hh:mm aaaa");
};

export const formatDate = (date: Date): string => {
  return format(date, "dd MMM yyyy");
};

export const formatTime = (date: Date): string => {
  return format(date, "hh:mm aaaa");
};
