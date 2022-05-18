/**
 * The status of a resource narrative.
 */
export declare const NarrativeStatusCodes: {
    /**
     * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
     */
    readonly Additional: "additional";
    /**
     * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case".
     */
    readonly Empty: "empty";
    /**
     * extensions: The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
     */
    readonly Extensions: "extensions";
    /**
     * generated: The contents of the narrative are entirely generated from the core elements in the content.
     */
    readonly Generated: "generated";
};
/**
 * The status of a resource narrative.
 */
export declare type NarrativeStatusCodeType = typeof NarrativeStatusCodes[keyof typeof NarrativeStatusCodes];
//# sourceMappingURL=NarrativeStatusCodes.d.ts.map