/**
 * The type of participation a provenance participant.
 */
export declare const ProvenanceAgentTypeCodes: {
    /**
     * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    readonly Assembler: "assembler";
    /**
     * attester: A verifier who attests to the accuracy of the resource
     */
    readonly Attester: "attester";
    /**
     * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    readonly Author: "author";
    /**
     * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    readonly Composer: "composer";
    /**
     * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    readonly Custodian: "custodian";
    /**
     * enterer: A person entering the data into the originating system
     */
    readonly Enterer: "enterer";
    /**
     * informant: A person who reported information that contributed to the resource
     */
    readonly Informant: "informant";
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content
     */
    readonly LegalAuthenticator: "legal";
    /**
     * performer: A person, animal, organization or device that who actually and principally carries out the activity
     */
    readonly Performer: "performer";
    /**
     * verifier: A person who verifies the correctness and appropriateness of activity
     */
    readonly Verifier: "verifier";
};
/**
 * The type of participation a provenance participant.
 */
export declare type ProvenanceAgentTypeCodeType = typeof ProvenanceAgentTypeCodes[keyof typeof ProvenanceAgentTypeCodes];
//# sourceMappingURL=ProvenanceAgentTypeCodes.d.ts.map