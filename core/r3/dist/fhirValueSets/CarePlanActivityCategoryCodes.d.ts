/**
 * High-level categorization of the type of activity in a care plan.
 */
export declare const CarePlanActivityCategoryCodes: {
    /**
     * diet: Plan for the patient to consume food of a specified nature
     */
    readonly Diet: "diet";
    /**
     * drug: Plan for the patient to consume/receive a drug, vaccine or other product
     */
    readonly Drug: "drug";
    /**
     * encounter: Plan to meet or communicate with the patient (in-patient, out-patient, phone call, etc.)
     */
    readonly Encounter: "encounter";
    /**
     * observation: Plan to capture information about a patient (vitals, labs, diagnostic images, etc.)
     */
    readonly Observation: "observation";
    /**
     * other: Some other form of action
     */
    readonly Other: "other";
    /**
     * procedure: Plan to modify the patient in some way (surgery, physiotherapy, education, counseling, etc.)
     */
    readonly Procedure: "procedure";
    /**
     * supply: Plan to provide something to the patient (medication, medical supply, etc.)
     */
    readonly Supply: "supply";
};
/**
 * High-level categorization of the type of activity in a care plan.
 */
export declare type CarePlanActivityCategoryCodeType = typeof CarePlanActivityCategoryCodes[keyof typeof CarePlanActivityCategoryCodes];
//# sourceMappingURL=CarePlanActivityCategoryCodes.d.ts.map