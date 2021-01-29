import React from "react";
import { useProgramsListQuery } from "../../generated/graphql.types";
import { ListView } from "../../shared/ListView";
import { ProgramCard } from "../ProgramCard/ProgramCard";

interface Props {
  selectedResidentId: string | null;
}

export const List: React.FC<Props> = ({ selectedResidentId }) => {
  const { data, loading, error } = useProgramsListQuery();

  if (error) throw error;

  return (
    <ListView loading={loading}>
      {data?.programs?.map((program) => (
        <ProgramCard
          program={program}
          key={program.id}
          selectedResidentId={selectedResidentId}
        />
      ))}
    </ListView>
  );
};
