/**
 * Codes providing the status/availability of a specimen.
 */
export declare const SpecimenStatusCodes: {
    /**
     * available: The physical specimen is present and in good condition.
     */
    readonly Available: "available";
    /**
     * entered-in-error: The specimen was entered in error and therefore nullified.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * unavailable: There is no physical specimen because it is either lost, destroyed or consumed.
     */
    readonly Unavailable: "unavailable";
    /**
     * unsatisfactory: The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
     */
    readonly Unsatisfactory: "unsatisfactory";
};
/**
 * Codes providing the status/availability of a specimen.
 */
export declare type SpecimenStatusCodeType = typeof SpecimenStatusCodes[keyof typeof SpecimenStatusCodes];
//# sourceMappingURL=SpecimenStatusCodes.d.ts.map