// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-validation-process|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The primary process by which the target is validated
 */
export const VerificationresultValidationProcessCodings = {
  /**
   * Code: edit-check
   */
  EditCheck: new Coding({
    display: "edit check",
    code: "edit-check",
    system: "http://terminology.hl7.org/CodeSystem/validation-process",
  }),
  /**
   * Code: in-context
   */
  InContext: new Coding({
    display: "in context",
    code: "in-context",
    system: "http://terminology.hl7.org/CodeSystem/validation-process",
  }),
  /**
   * Code: multi
   */
  MultipleSources: new Coding({
    display: "multiple sources",
    code: "multi",
    system: "http://terminology.hl7.org/CodeSystem/validation-process",
  }),
  /**
   * Code: primary
   */
  PrimarySource: new Coding({
    display: "primary source",
    code: "primary",
    system: "http://terminology.hl7.org/CodeSystem/validation-process",
  }),
  /**
   * Code: standalone
   */
  Standalone: new Coding({
    display: "standalone",
    code: "standalone",
    system: "http://terminology.hl7.org/CodeSystem/validation-process",
  }),
  /**
   * Code: valueset
   */
  ValueSet: new Coding({
    display: "value set",
    code: "valueset",
    system: "http://terminology.hl7.org/CodeSystem/validation-process",
  }),
} as const;

/**
 * The primary process by which the target is validated
 */
export type VerificationresultValidationProcessCodingType = typeof VerificationresultValidationProcessCodings;
