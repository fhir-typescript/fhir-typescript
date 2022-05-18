import { Coding } from '../fhir/Coding.js';
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export declare const FlagCategoryCodings: {
    /**
     * admin: Flags related to administrative and financial processes.
     */
    readonly Administrative: Coding;
    /**
     * advance-directive: Flags related to subject's advance directives.
     */
    readonly AdvanceDirective: Coding;
    /**
     * behavioral: Flags related to behavior.
     */
    readonly Behavioral: Coding;
    /**
     * clinical: Flags related to the subject's clinical data.
     */
    readonly Clinical: Coding;
    /**
     * contact: Flags related to coming into contact with the patient.
     */
    readonly SubjectContact: Coding;
    /**
     * diet: Flags related to the subject's dietary needs.
     */
    readonly Diet: Coding;
    /**
     * drug: Flags related to the subject's medications.
     */
    readonly Drug: Coding;
    /**
     * lab: Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
     */
    readonly Lab: Coding;
    /**
     * research: Flags related to research.
     */
    readonly Research: Coding;
    /**
     * safety: Flags related to safety precautions.
     */
    readonly Safety: Coding;
};
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export declare type FlagCategoryCodingType = typeof FlagCategoryCodings;
//# sourceMappingURL=FlagCategoryCodings.d.ts.map