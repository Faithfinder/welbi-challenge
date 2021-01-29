import React from "react";
import { useProgramsListQuery } from "../../generated/graphql.types";
import { ListView } from "../../shared/ListView";
import { ProgramCard } from "../ProgramCard/ProgramCard";

export const List: React.FC = () => {
  const { data, loading, error } = useProgramsListQuery();

  if (error) throw error;

  return (
    <ListView loading={loading}>
      {data?.programs?.map((program) => (
        <ProgramCard program={program} key={program.id} />
      ))}
    </ListView>
  );
};
