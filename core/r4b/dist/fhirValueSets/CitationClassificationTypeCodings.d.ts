import { CodingArgs } from '../fhir/Coding.js';
/**
 * Citation classification type
 */
export declare type CitationClassificationTypeCodingType = {
    /**
     * citation-source: Citation repository where this citation was created or copied from
     */
    CitationSource: CodingArgs;
    /**
     * fevir-platform-use: Used for Citation sharing on the Fast Evidence Interoperability Resources (FEvIR) Platform
     */
    FEvIRPlatformUse: CodingArgs;
    /**
     * medline-owner: The party responsible for creating and validating the MEDLINE citation
     */
    MEDLINECitationOwner: CodingArgs;
};
/**
 * Citation classification type
 */
export declare const CitationClassificationTypeCodings: CitationClassificationTypeCodingType;
//# sourceMappingURL=CitationClassificationTypeCodings.d.ts.map