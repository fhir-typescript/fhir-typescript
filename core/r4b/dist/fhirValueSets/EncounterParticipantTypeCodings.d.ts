import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare type EncounterParticipantTypeCodingType = {
    /**
     * Code: ADM
     */
    Admitter: CodingArgs;
    /**
     * Code: ATND
     */
    Attender: CodingArgs;
    /**
     * Code: CALLBCK
     */
    CallbackContact: CodingArgs;
    /**
     * Code: CON
     */
    Consultant: CodingArgs;
    /**
     * Code: DIS
     */
    Discharger: CodingArgs;
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    Emergency: CodingArgs;
    /**
     * Code: ESC
     */
    Escort: CodingArgs;
    /**
     * Code: PART
     */
    PART: CodingArgs;
    /**
     * Code: PPRF
     */
    PPRF: CodingArgs;
    /**
     * Code: REF
     */
    Referrer: CodingArgs;
    /**
     * Code: SPRF
     */
    SPRF: CodingArgs;
    /**
     * translator: A translator who is facilitating communication with the patient during the encounter.
     */
    Translator: CodingArgs;
};
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare const EncounterParticipantTypeCodings: EncounterParticipantTypeCodingType;
//# sourceMappingURL=EncounterParticipantTypeCodings.d.ts.map