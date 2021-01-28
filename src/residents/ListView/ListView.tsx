import React from "react";
import { useResidentsListQuery } from "../../generated/graphql.types";

export const ListView: React.FC = () => {
  const { data, loading, error } = useResidentsListQuery();
  console.log(data);
  if (loading) return <>Loading...</>;
  if (error) throw error;

  return (
    <>
      {data!.residents.map((resident) => (
        <div key={resident.id}>{resident.name}</div>
      ))}
    </>
  );
};
