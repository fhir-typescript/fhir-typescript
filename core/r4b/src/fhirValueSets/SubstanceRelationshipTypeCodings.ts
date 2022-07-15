// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-relationship-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The relationship between two substance types.
 */
export type SubstanceRelationshipTypeCodingType = {
  /**
   * Code: ActiveMoiety
   */
  ActiveMoiety: CodingArgs;
  /**
   * Code: Impurity
   */
  ImpurityOf: CodingArgs;
  /**
   * Code: Polymorph
   */
  PolymorphOf: CodingArgs;
  /**
   * Code: Salt
   */
  SaltToParent: CodingArgs;
  /**
   * Code: StartingMaterial
   */
  StartingMaterialFor: CodingArgs;
}

/**
 * The relationship between two substance types.
 */
export const SubstanceRelationshipTypeCodings:SubstanceRelationshipTypeCodingType = {
  /**
   * Code: ActiveMoiety
   */
  ActiveMoiety: {
    display: "Active moiety",
    code: "ActiveMoiety",
    system: "http://hl7.org/fhir/substance-relationship-type",
  },
  /**
   * Code: Impurity
   */
  ImpurityOf: {
    display: "Impurity of",
    code: "Impurity",
    system: "http://hl7.org/fhir/substance-relationship-type",
  },
  /**
   * Code: Polymorph
   */
  PolymorphOf: {
    display: "Polymorph of",
    code: "Polymorph",
    system: "http://hl7.org/fhir/substance-relationship-type",
  },
  /**
   * Code: Salt
   */
  SaltToParent: {
    display: "Salt to parent",
    code: "Salt",
    system: "http://hl7.org/fhir/substance-relationship-type",
  },
  /**
   * Code: StartingMaterial
   */
  StartingMaterialFor: {
    display: "Starting material for",
    code: "StartingMaterial",
    system: "http://hl7.org/fhir/substance-relationship-type",
  },
} as const;
