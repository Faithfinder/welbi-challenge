import { Ambulation, LevelOfCare } from "../generated/graphql.types";

export const AmbulationMap: AmbulationMapType = {
    [Ambulation.CANE]: {
      value: Ambulation.CANE,
      displayValue: "Cane",
    },
    [Ambulation.NOLIMITATIONS]: {
      value: Ambulation.NOLIMITATIONS,
      displayValue: "No limitations",
    },
    [Ambulation.WALKER]: {
      value: Ambulation.WALKER,
      displayValue: "Walker",
    },
    [Ambulation.WHEELCHAIR]: {
      value: Ambulation.WHEELCHAIR,
      displayValue: "Wheelchair",
    },
  };
  
  type AmbulationMapType = {
    [K in keyof typeof Ambulation]: Display<typeof Ambulation[K]>;
  };
  
  export const LevelOfCareMap: LevelOfCareMapType = {
    [LevelOfCare.ASSISTED]: {
      value: LevelOfCare.ASSISTED,
      displayValue: "Assisted",
    },
    [LevelOfCare.INDEPENDENT]: {
      value: LevelOfCare.INDEPENDENT,
      displayValue: "Independent",
    },
    [LevelOfCare.LONGTERM]: {
      value: LevelOfCare.LONGTERM,
      displayValue: "Longterm",
    },
    [LevelOfCare.MEMORY]: {
      value: LevelOfCare.MEMORY,
      displayValue: "Memory",
    },
  };
  
  type LevelOfCareMapType = {
    [K in keyof typeof LevelOfCare]: Display<typeof LevelOfCare[K]>;
  };
  
  interface Display<ValueType> {
    value: ValueType;
    displayValue: string;
  }
  