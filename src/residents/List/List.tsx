import { ListView } from "../../shared/ListView";
import { useResidentsListQuery } from "../../generated/graphql.types";
import { ResidentCard } from "../ResidentCard/ResidentCard";

interface Props {
  selectedResidentId: string | null;
  setSelectedResidentId: React.Dispatch<string | null>;
}

export const List: React.FC<Props> = ({
  selectedResidentId,
  setSelectedResidentId,
}) => {
  const { data, loading, error } = useResidentsListQuery();

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
