/**
 * The type of contributor
 */
export declare const ContributorTypeCodes: {
    /**
     * author: An author of the content of the module
     */
    readonly Author: "author";
    /**
     * editor: An editor of the content of the module
     */
    readonly Editor: "editor";
    /**
     * endorser: An endorser of the content of the module
     */
    readonly Endorser: "endorser";
    /**
     * reviewer: A reviewer of the content of the module
     */
    readonly Reviewer: "reviewer";
};
/**
 * The type of contributor
 */
export declare type ContributorTypeCodeType = typeof ContributorTypeCodes[keyof typeof ContributorTypeCodes];
//# sourceMappingURL=ContributorTypeCodes.d.ts.map