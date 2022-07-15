/**
 * Citation classification type
 */
export declare const CitationClassificationTypeCodes: {
    /**
     * citation-source: Citation repository where this citation was created or copied from
     */
    readonly CitationSource: "citation-source";
    /**
     * fevir-platform-use: Used for Citation sharing on the Fast Evidence Interoperability Resources (FEvIR) Platform
     */
    readonly FEvIRPlatformUse: "fevir-platform-use";
    /**
     * medline-owner: The party responsible for creating and validating the MEDLINE citation
     */
    readonly MEDLINECitationOwner: "medline-owner";
};
/**
 * Citation classification type
 */
export declare type CitationClassificationTypeCodeType = typeof CitationClassificationTypeCodes[keyof typeof CitationClassificationTypeCodes];
//# sourceMappingURL=CitationClassificationTypeCodes.d.ts.map