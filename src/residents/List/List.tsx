import React, { useState } from "react";
import { ListView } from "../../shared/ListView";
import { useResidentsListQuery } from "../../generated/graphql.types";
import { ResidentCard } from "../ResidentCard/ResidentCard";

export const List: React.FC = () => {
  const { data, loading, error } = useResidentsListQuery();
  const [selectedResidentId, setSelectedResidentId] = useState<string | null>(
    null
  );

  if (error) throw error;

  return (
    <ListView loading={loading}>
      {data?.residents?.map((resident) => (
        <ResidentCard
          resident={resident}
          key={resident.id}
          selected={resident.id === selectedResidentId}
          onClick={setSelectedResidentId}
        />
      ))}
    </ListView>
  );
};
