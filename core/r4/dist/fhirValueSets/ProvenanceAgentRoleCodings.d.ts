import { CodingArgs } from '../fhir/Coding.js';
/**
 * The role that a provenance participant played
 */
export declare type ProvenanceAgentRoleCodingType = {
    /**
     * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    Assembler: CodingArgs;
    /**
     * attester: A verifier who attests to the accuracy of the resource
     */
    Attester: CodingArgs;
    /**
     * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    Author: CodingArgs;
    /**
     * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    Composer: CodingArgs;
    /**
     * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    Custodian: CodingArgs;
    /**
     * enterer: A person entering the data into the originating system
     */
    Enterer: CodingArgs;
    /**
     * informant: A person who reported information that contributed to the resource
     */
    Informant: CodingArgs;
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content
     */
    LegalAuthenticator: CodingArgs;
    /**
     * performer: A person, animal, organization or device that who actually and principally carries out the activity
     */
    Performer: CodingArgs;
    /**
     * verifier: A person who verifies the correctness and appropriateness of activity
     */
    Verifier: CodingArgs;
};
/**
 * The role that a provenance participant played
 */
export declare const ProvenanceAgentRoleCodings: ProvenanceAgentRoleCodingType;
//# sourceMappingURL=ProvenanceAgentRoleCodings.d.ts.map