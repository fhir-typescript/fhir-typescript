/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export declare const FlagCategoryCodes: {
    /**
     * admin: Flags related to administrative and financial processes.
     */
    readonly Administrative: "admin";
    /**
     * contact: Flags related to coming into contact with the patient.
     */
    readonly SubjectContact: "contact";
    /**
     * diet: Flags related to the subject's dietary needs.
     */
    readonly Diet: "diet";
    /**
     * drug: Flags related to the patient's medications.
     */
    readonly Drug: "drug";
    /**
     * lab: Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
     */
    readonly Lab: "lab";
};
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export declare type FlagCategoryCodeType = typeof FlagCategoryCodes[keyof typeof FlagCategoryCodes];
//# sourceMappingURL=FlagCategoryCodes.d.ts.map