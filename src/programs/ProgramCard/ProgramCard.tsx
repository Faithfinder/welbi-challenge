import { ProgramFragment } from "../../generated/graphql.types";

interface Props {
  program: ProgramFragment;
}

export const ProgramCard: React.FC<Props> = ({ program }) => {
  return <div>{program.name}</div>;
};
