import { MenuItem, Select, SelectProps } from "@material-ui/core";
import React from "react";
import { EnumStatus } from "../../generated/graphql.types";

export const StatusSelect: React.FC<SelectProps> = (props) => {
  return (
    <Select {...props}>
      {Object.keys(EnumStatus).map((key) => {
        const status = EnumStatus[key as keyof typeof EnumStatus];
        return (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        );
      })}
    </Select>
  );
};
