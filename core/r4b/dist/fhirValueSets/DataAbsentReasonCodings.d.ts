import { CodingArgs } from '../fhir/Coding.js';
/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare type DataAbsentReasonCodingType = {
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
};
/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare const DataAbsentReasonCodings: DataAbsentReasonCodingType;
//# sourceMappingURL=DataAbsentReasonCodings.d.ts.map