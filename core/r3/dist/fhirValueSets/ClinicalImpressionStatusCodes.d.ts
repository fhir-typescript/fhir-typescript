/**
 * The workflow state of a clinical impression.
 */
export declare const ClinicalImpressionStatusCodes: {
    /**
     * completed: The assessment is done and the results are final.
     */
    readonly Completed: "completed";
    /**
     * draft: The assessment is still on-going and results are not yet final.
     */
    readonly InProgress: "draft";
    /**
     * entered-in-error: This assessment was never actually done and the record is erroneous (e.g. Wrong patient).
     */
    readonly EnteredInError: "entered-in-error";
};
/**
 * The workflow state of a clinical impression.
 */
export declare type ClinicalImpressionStatusCodeType = typeof ClinicalImpressionStatusCodes[keyof typeof ClinicalImpressionStatusCodes];
//# sourceMappingURL=ClinicalImpressionStatusCodes.d.ts.map