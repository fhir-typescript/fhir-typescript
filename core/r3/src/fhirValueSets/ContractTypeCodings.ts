// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Contract Type codes.
 */
export type ContractTypeCodingType = {
  /**
   * consent: Consent Directive.
   */
  Consent: CodingArgs;
  /**
   * disclosure: Information disclosure policy.
   */
  Disclosure: CodingArgs;
  /**
   * healthinsurance: Health Insurance policy.
   */
  HealthInsurance: CodingArgs;
  /**
   * privacy: Privacy policy.
   */
  Privacy: CodingArgs;
  /**
   * supply: Contract to supply goods or services.
   */
  SupplyContract: CodingArgs;
}

/**
 * This value set includes sample Contract Type codes.
 */
export const ContractTypeCodings:ContractTypeCodingType = {
  /**
   * consent: Consent Directive.
   */
  Consent: {
    display: "Consent",
    code: "consent",
    system: "http://hl7.org/fhir/contracttypecodes",
  },
  /**
   * disclosure: Information disclosure policy.
   */
  Disclosure: {
    display: "Disclosure",
    code: "disclosure",
    system: "http://hl7.org/fhir/contracttypecodes",
  },
  /**
   * healthinsurance: Health Insurance policy.
   */
  HealthInsurance: {
    display: "Health Insurance",
    code: "healthinsurance",
    system: "http://hl7.org/fhir/contracttypecodes",
  },
  /**
   * privacy: Privacy policy.
   */
  Privacy: {
    display: "Privacy",
    code: "privacy",
    system: "http://hl7.org/fhir/contracttypecodes",
  },
  /**
   * supply: Contract to supply goods or services.
   */
  SupplyContract: {
    display: "Supply Contract",
    code: "supply",
    system: "http://hl7.org/fhir/contracttypecodes",
  },
} as const;
