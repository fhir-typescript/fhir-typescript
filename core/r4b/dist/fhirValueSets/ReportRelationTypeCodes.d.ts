/**
 * The type of relationship between reports.
 */
export declare const ReportRelationTypeCodes: {
    /**
     * amendedWith: This document was.
     */
    readonly AmendedWith: "amendedWith";
    /**
     * amends: This document notes corrections or changes to replace or supersede parts of the target document.
     */
    readonly Amends: "amends";
    /**
     * appendedWith: This document was.
     */
    readonly AppendedWith: "appendedWith";
    /**
     * appends: This document adds additional information to the target document.
     */
    readonly Appends: "appends";
    /**
     * replacedWith: This document was.
     */
    readonly ReplacedWith: "replacedWith";
    /**
     * replaces: This document replaces or supersedes the target document.
     */
    readonly Replaces: "replaces";
    /**
     * transformedWith: This document was.
     */
    readonly TransformedWith: "transformedWith";
    /**
     * transforms: This document was generated by transforming the target document (eg format or language conversion).
     */
    readonly Transforms: "transforms";
};
/**
 * The type of relationship between reports.
 */
export declare type ReportRelationTypeCodeType = typeof ReportRelationTypeCodes[keyof typeof ReportRelationTypeCodes];
//# sourceMappingURL=ReportRelationTypeCodes.d.ts.map