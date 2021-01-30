import { LevelOfCare, ProgramInput } from "../../generated/graphql.types";

export class FormProgram implements ProgramInput {
  private constructor() {}
  static empty = () => new FormProgram();

  location: string = "";
  allDay: boolean = false;
  tags: string[] = [];
  name: string = "";
  start: Date = new Date();
  end: Date = new Date();
  dimension: string = "";
  facilitators: string[] = [];
  levelOfCare: LevelOfCare[] = [];
  hobbies: string[] = [];
  isRepeated: boolean = false;
}
