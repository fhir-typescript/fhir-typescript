import { CodingArgs } from '../fhir/Coding.js';
/**
 * Used to code the producer or rule for creating the display string.
 */
export declare type ContributorSummarySourceCodingType = {
    /**
     * article-copy: Data copied by human from article text.
     */
    CopiedFromArticle: CodingArgs;
    /**
     * citation-manager: Data copied by machine from citation manager data.
     */
    ReportedByCitationManager: CodingArgs;
    /**
     * custom: Custom format (may be described in text note).
     */
    CustomFormat: CodingArgs;
    /**
     * publisher-data: Data copied by machine from publisher data.
     */
    PublisherProvided: CodingArgs;
};
/**
 * Used to code the producer or rule for creating the display string.
 */
export declare const ContributorSummarySourceCodings: ContributorSummarySourceCodingType;
//# sourceMappingURL=ContributorSummarySourceCodings.d.ts.map