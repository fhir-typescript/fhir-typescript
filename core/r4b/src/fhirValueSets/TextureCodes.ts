// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/texture-code|4.3.0

/**
 * TextureModifier: Codes for food consistency types or texture modifications to apply to foods. This value set is composed of SNOMED CT (US Extension and Core) Concepts from SCTID 229961002 Food consistency types (substance) hierarchy and is provided as a suggestive example.
 */
export const TextureCodes = {
  /**
   * Code: 228049004
   */
  ChoppedFood: "228049004",
  /**
   * Code: 228053002
   */
  CutUpFood: "228053002",
  /**
   * Code: 228055009
   */
  LiquidizedFood: "228055009",
  /**
   * Code: 228056005
   */
  LumpyFood: "228056005",
  /**
   * Code: 228057001
   */
  SemiSolidFood: "228057001",
  /**
   * Code: 228058006
   */
  SingleTextureFood: "228058006",
  /**
   * Code: 228059003
   */
  SoftFood: "228059003",
  /**
   * Code: 228060008
   */
  SolidFood: "228060008",
  /**
   * Code: 439091000124107
   */
  EasyToChewFood: "439091000124107",
  /**
   * Code: 441751000124100
   */
  MashedFood: "441751000124100",
  /**
   * Code: 441761000124103
   */
  MincedFood: "441761000124103",
  /**
   * Code: 441771000124105
   */
  MoistFood: "441771000124105",
  /**
   * Code: 441791000124106
   */
  StrainedFood: "441791000124106",
  /**
   * Code: 441881000124103
   */
  GroundFood: "441881000124103",
} as const;

/**
 * TextureModifier: Codes for food consistency types or texture modifications to apply to foods. This value set is composed of SNOMED CT (US Extension and Core) Concepts from SCTID 229961002 Food consistency types (substance) hierarchy and is provided as a suggestive example.
 */
export type TextureCodeType = typeof TextureCodes[keyof typeof TextureCodes];
