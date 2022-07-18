// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export type DataAbsentReasonCodingType = {
  /**
   * as-text: The content of the data is represented in the resource narrative.
   */
  AsText: CodingArgs;
  /**
   * asked-declined: The source was asked but declined to answer.
   */
  AskedButDeclined: CodingArgs;
  /**
   * asked-unknown: The source was asked but does not know the value.
   */
  AskedButUnknown: CodingArgs;
  /**
   * error: Some system or workflow process error means that the information is not available.
   */
  Error: CodingArgs;
  /**
   * masked: The information is not available due to security, privacy or related reasons.
   */
  Masked: CodingArgs;
  /**
   * negative-infinity: The numeric value is excessively low and unrepresentable due to a floating point processing error.
   */
  NegativeInfinityNINF: CodingArgs;
  /**
   * not-a-number: The numeric value is undefined or unrepresentable due to a floating point processing error.
   */
  NotANumberNaN: CodingArgs;
  /**
   * not-applicable: There is no proper value for this element (e.g. last menstrual period for a male).
   */
  NotApplicable: CodingArgs;
  /**
   * not-asked: The workflow didn't lead to this value being known.
   */
  NotAsked: CodingArgs;
  /**
   * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
   */
  NotPerformed: CodingArgs;
  /**
   * not-permitted: The value is not permitted in this context (e.g. due to profiles, or the base data types).
   */
  NotPermitted: CodingArgs;
  /**
   * positive-infinity: The numeric value is excessively high and unrepresentable due to a floating point processing error.
   */
  PositiveInfinityPINF: CodingArgs;
  /**
   * temp-unknown: There is reason to expect (from the workflow) that the value may become known.
   */
  TemporarilyUnknown: CodingArgs;
  /**
   * unknown: The value is expected to exist but is not known.
   */
  Unknown: CodingArgs;
  /**
   * unsupported: The source system wasn't capable of supporting this element.
   */
  Unsupported: CodingArgs;
}

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export const DataAbsentReasonCodings:DataAbsentReasonCodingType = {
  /**
   * as-text: The content of the data is represented in the resource narrative.
   */
  AsText: {
    display: "As Text",
    code: "as-text",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * asked-declined: The source was asked but declined to answer.
   */
  AskedButDeclined: {
    display: "Asked But Declined",
    code: "asked-declined",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * asked-unknown: The source was asked but does not know the value.
   */
  AskedButUnknown: {
    display: "Asked But Unknown",
    code: "asked-unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * error: Some system or workflow process error means that the information is not available.
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * masked: The information is not available due to security, privacy or related reasons.
   */
  Masked: {
    display: "Masked",
    code: "masked",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * negative-infinity: The numeric value is excessively low and unrepresentable due to a floating point processing error.
   */
  NegativeInfinityNINF: {
    display: "Negative Infinity (NINF)",
    code: "negative-infinity",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * not-a-number: The numeric value is undefined or unrepresentable due to a floating point processing error.
   */
  NotANumberNaN: {
    display: "Not a Number (NaN)",
    code: "not-a-number",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * not-applicable: There is no proper value for this element (e.g. last menstrual period for a male).
   */
  NotApplicable: {
    display: "Not Applicable",
    code: "not-applicable",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * not-asked: The workflow didn't lead to this value being known.
   */
  NotAsked: {
    display: "Not Asked",
    code: "not-asked",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
   */
  NotPerformed: {
    display: "Not Performed",
    code: "not-performed",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * not-permitted: The value is not permitted in this context (e.g. due to profiles, or the base data types).
   */
  NotPermitted: {
    display: "Not Permitted",
    code: "not-permitted",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * positive-infinity: The numeric value is excessively high and unrepresentable due to a floating point processing error.
   */
  PositiveInfinityPINF: {
    display: "Positive Infinity (PINF)",
    code: "positive-infinity",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * temp-unknown: There is reason to expect (from the workflow) that the value may become known.
   */
  TemporarilyUnknown: {
    display: "Temporarily Unknown",
    code: "temp-unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * unknown: The value is expected to exist but is not known.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
  /**
   * unsupported: The source system wasn't capable of supporting this element.
   */
  Unsupported: {
    display: "Unsupported",
    code: "unsupported",
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  },
} as const;