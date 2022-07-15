// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinicalimpression-prognosis|3.0.2

/**
 * Example value set clinical impression prognosis
 */
export const ClinicalimpressionPrognosisCodes = {
  /**
   * Code: 170968001
   */
  PrognosisGood: "170968001",
  /**
   * Code: 170969009
   */
  PrognosisBad: "170969009",
  /**
   * Code: 170970005
   */
  PrognosisUncertain: "170970005",
  /**
   * Code: 60484009
   */
  ConditionalPrognosis: "60484009",
  /**
   * Code: 65872000
   */
  FairPrognosis: "65872000",
  /**
   * Code: 67334001
   */
  GuardedPrognosis: "67334001",
} as const;

/**
 * Example value set clinical impression prognosis
 */
export type ClinicalimpressionPrognosisCodeType = typeof ClinicalimpressionPrognosisCodes[keyof typeof ClinicalimpressionPrognosisCodes];
