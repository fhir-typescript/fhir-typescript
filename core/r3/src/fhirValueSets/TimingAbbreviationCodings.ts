// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/timing-abbreviation|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Code for a known / defined timing pattern.
 */
export type TimingAbbreviationCodingType = {
  /**
   * AM: Every morning at institution specified times.
   */
  AM: CodingArgs;
  /**
   * BID: Two times a day at institution specified time
   */
  BID: CodingArgs;
  /**
   * PM: Every afternoon at institution specified times.
   */
  PM: CodingArgs;
  /**
   * Q4H: Every 4 hours at institution specified time
   */
  Q4H: CodingArgs;
  /**
   * Q6H: Every 6 hours at institution specified time
   */
  Q6H: CodingArgs;
  /**
   * QD: Every day at institution specified times.
   */
  QD: CodingArgs;
  /**
   * QID: Four times a day at institution specified time
   */
  QID: CodingArgs;
  /**
   * QOD: Every other day at institution specified times.
   */
  QOD: CodingArgs;
  /**
   * TID: Three times a day at institution specified time
   */
  TID: CodingArgs;
}

/**
 * Code for a known / defined timing pattern.
 */
export const TimingAbbreviationCodings:TimingAbbreviationCodingType = {
  /**
   * AM: Every morning at institution specified times.
   */
  AM: {
    display: "AM",
    code: "AM",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * BID: Two times a day at institution specified time
   */
  BID: {
    display: "BID",
    code: "BID",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * PM: Every afternoon at institution specified times.
   */
  PM: {
    display: "PM",
    code: "PM",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * Q4H: Every 4 hours at institution specified time
   */
  Q4H: {
    display: "Q4H",
    code: "Q4H",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * Q6H: Every 6 hours at institution specified time
   */
  Q6H: {
    display: "Q6H",
    code: "Q6H",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * QD: Every day at institution specified times.
   */
  QD: {
    display: "QD",
    code: "QD",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * QID: Four times a day at institution specified time
   */
  QID: {
    display: "QID",
    code: "QID",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * QOD: Every other day at institution specified times.
   */
  QOD: {
    display: "QOD",
    code: "QOD",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
  /**
   * TID: Three times a day at institution specified time
   */
  TID: {
    display: "TID",
    code: "TID",
    system: "http://hl7.org/fhir/v3/GTSAbbreviation",
  },
} as const;
