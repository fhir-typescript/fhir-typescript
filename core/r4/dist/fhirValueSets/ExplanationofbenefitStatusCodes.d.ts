/**
 * A code specifying the state of the resource instance.
 */
export declare const ExplanationofbenefitStatusCodes: {
    /**
     * active: The resource instance is currently in-force.
     */
    readonly Active: "active";
    /**
     * cancelled: The resource instance is withdrawn, rescinded or reversed.
     */
    readonly Cancelled: "cancelled";
    /**
     * draft: A new resource instance the contents of which is not complete.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: The resource instance was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
};
/**
 * A code specifying the state of the resource instance.
 */
export declare type ExplanationofbenefitStatusCodeType = typeof ExplanationofbenefitStatusCodes[keyof typeof ExplanationofbenefitStatusCodes];
//# sourceMappingURL=ExplanationofbenefitStatusCodes.d.ts.map