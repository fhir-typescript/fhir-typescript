// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscriber-relationship|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export type SubscriberRelationshipCodingType = {
  /**
   * child: The Beneficiary is a child of the Subscriber
   */
  Child: CodingArgs;
  /**
   * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
   */
  CommonLawSpouse: CodingArgs;
  /**
   * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
   */
  InjuredParty: CodingArgs;
  /**
   * other: The Beneficiary has some other relationship the Subscriber
   */
  Other: CodingArgs;
  /**
   * parent: The Beneficiary is a parent of the Subscriber
   */
  Parent: CodingArgs;
  /**
   * self: The Beneficiary is the Subscriber
   */
  Self: CodingArgs;
  /**
   * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
   */
  Spouse: CodingArgs;
}

/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export const SubscriberRelationshipCodings:SubscriberRelationshipCodingType = {
  /**
   * child: The Beneficiary is a child of the Subscriber
   */
  Child: {
    display: "Child",
    code: "child",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
  /**
   * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
   */
  CommonLawSpouse: {
    display: "Common Law Spouse",
    code: "common",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
  /**
   * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
   */
  InjuredParty: {
    display: "Injured Party",
    code: "injured",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
  /**
   * other: The Beneficiary has some other relationship the Subscriber
   */
  Other: {
    display: "Other",
    code: "other",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
  /**
   * parent: The Beneficiary is a parent of the Subscriber
   */
  Parent: {
    display: "Parent",
    code: "parent",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
  /**
   * self: The Beneficiary is the Subscriber
   */
  Self: {
    display: "Self",
    code: "self",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
  /**
   * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
   */
  Spouse: {
    display: "Spouse",
    code: "spouse",
    system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  },
} as const;
