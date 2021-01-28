import React, { useState } from "react";
import { useResidentsListQuery } from "../../generated/graphql.types";
import { ResidentCard } from "../ResidentCard/ResidentCard";

export const List: React.FC = () => {
  const { data, loading, error } = useResidentsListQuery();
  const [selectedResidentId, setSelectedResidentId] = useState<string | null>(
    null
  );

  if (loading) return <>Loading...</>;
  if (error) throw error;

  return (
    <>
      {data!.residents.map((resident) => (
        <ResidentCard
          resident={resident}
          key={resident.id}
          selected={resident.id === selectedResidentId}
          onClick={setSelectedResidentId}
        />
      ))}
    </>
  );
};
