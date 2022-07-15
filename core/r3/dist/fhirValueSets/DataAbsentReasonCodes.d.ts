/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare const DataAbsentReasonCodes: {
    /**
     * asked: The source human does not know the value.
     */
    readonly Asked: "asked";
    /**
     * astext: The content of the data is represented in the resource narrative.
     */
    readonly AsText: "astext";
    /**
     * error: Some system or workflow process error means that the information is not available.
     */
    readonly Error: "error";
    /**
     * masked: The information is not available due to security, privacy or related reasons.
     */
    readonly Masked: "masked";
    /**
     * NaN: NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value.
     */
    readonly NotANumber: "NaN";
    /**
     * not-asked: The workflow didn't lead to this value being known.
     */
    readonly NotAsked: "not-asked";
    /**
     * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
     */
    readonly NotPerformed: "not-performed";
    /**
     * temp: There is reason to expect (from the workflow) that the value may become known.
     */
    readonly Temp: "temp";
    /**
     * unknown: The value is not known.
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