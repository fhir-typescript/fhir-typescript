import { CodingArgs } from '../fhir/Coding.js';
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export declare type FlagCategoryCodingType = {
    /**
     * admin: Flags related to administrative and financial processes.
     */
    Administrative: CodingArgs;
    /**
     * contact: Flags related to coming into contact with the patient.
     */
    SubjectContact: CodingArgs;
    /**
     * diet: Flags related to the subject's dietary needs.
     */
    Diet: CodingArgs;
    /**
     * drug: Flags related to the patient's medications.
     */
    Drug: CodingArgs;
    /**
     * lab: Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
     */
    Lab: CodingArgs;
};
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export declare const FlagCategoryCodings: FlagCategoryCodingType;
//# sourceMappingURL=FlagCategoryCodings.d.ts.map