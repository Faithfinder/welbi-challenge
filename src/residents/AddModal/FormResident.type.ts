import {
  Ambulation,
  LevelOfCare,
  ResidentInput,
} from "../../generated/graphql.types";

export class FormResident implements ResidentInput {
  private constructor() {}

  static empty = () => new FormResident();

  name: string = "";
  firstName: string = "";
  lastName: string = "";
  preferredName: string = "";
  status: string = "";
  room: string = "";
  birthDate: Date = new Date();
  moveInDate: Date = new Date();
  levelOfCare: LevelOfCare = ("" as unknown) as LevelOfCare;
  ambulation: Ambulation = ("" as unknown) as Ambulation;
}
