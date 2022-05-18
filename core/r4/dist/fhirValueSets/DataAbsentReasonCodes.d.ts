/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare const DataAbsentReasonCodes: {
    /**
     * as-text: The content of the data is represented in the resource narrative.
     */
    readonly AsText: "as-text";
    /**
     * asked-declined: The source was asked but declined to answer.
     */
    readonly AskedButDeclined: "asked-declined";
    /**
     * asked-unknown: The source was asked but does not know the value.
     */
    readonly AskedButUnknown: "asked-unknown";
    /**
     * error: Some system or workflow process error means that the information is not available.
     */
    readonly Error: "error";
    /**
     * masked: The information is not available due to security, privacy or related reasons.
     */
    readonly Masked: "masked";
    /**
     * negative-infinity: The numeric value is excessively low and unrepresentable due to a floating point processing error.
     */
    readonly NegativeInfinityNINF: "negative-infinity";
    /**
     * not-a-number: The numeric value is undefined or unrepresentable due to a floating point processing error.
     */
    readonly NotANumberNaN: "not-a-number";
    /**
     * not-applicable: There is no proper value for this element (e.g. last menstrual period for a male).
     */
    readonly NotApplicable: "not-applicable";
    /**
     * not-asked: The workflow didn't lead to this value being known.
     */
    readonly NotAsked: "not-asked";
    /**
     * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
     */
    readonly NotPerformed: "not-performed";
    /**
     * not-permitted: The value is not permitted in this context (e.g. due to profiles, or the base data types).
     */
    readonly NotPermitted: "not-permitted";
    /**
     * positive-infinity: The numeric value is excessively high and unrepresentable due to a floating point processing error.
     */
    readonly PositiveInfinityPINF: "positive-infinity";
    /**
     * temp-unknown: There is reason to expect (from the workflow) that the value may become known.
     */
    readonly TemporarilyUnknown: "temp-unknown";
    /**
     * unknown: The value is expected to exist but is not known.
     */
    readonly Unknown: "unknown";
    /**
     * unsupported: The source system wasn't capable of supporting this element.
     */
    readonly Unsupported: "unsupported";
};
/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare type DataAbsentReasonCodeType = typeof DataAbsentReasonCodes[keyof typeof DataAbsentReasonCodes];
//# sourceMappingURL=DataAbsentReasonCodes.d.ts.map