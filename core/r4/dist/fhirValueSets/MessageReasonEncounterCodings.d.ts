import { CodingArgs } from '../fhir/Coding.js';
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare type MessageReasonEncounterCodingType = {
    /**
     * absent: The patient has temporarily left the institution.
     */
    Absent: CodingArgs;
    /**
     * admit: The patient has been admitted.
     */
    Admit: CodingArgs;
    /**
     * discharge: The patient has been discharged.
     */
    Discharge: CodingArgs;
    /**
     * edit: Encounter details have been updated (e.g. to correct a coding error).
     */
    Edit: CodingArgs;
    /**
     * moved: The patient has been moved to a new location.
     */
    Moved: CodingArgs;
    /**
     * return: The patient has returned from a temporary absence.
     */
    Returned: CodingArgs;
};
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare const MessageReasonEncounterCodings: MessageReasonEncounterCodingType;
//# sourceMappingURL=MessageReasonEncounterCodings.d.ts.map