/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export declare const EncounterSpecialArrangementsCodes: {
    /**
     * add-bed: An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
     */
    readonly AdditionalBedding: "add-bed";
    /**
     * att: A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
     */
    readonly Attendant: "att";
    /**
     * dog: The patient has a guide-dog and the location used for the encounter should be able to support the presence of the service animal.
     */
    readonly GuideDog: "dog";
    /**
     * int: The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
     */
    readonly Interpreter: "int";
    /**
     * wheel: The patient requires a wheelchair to be made available for the encounter.
     */
    readonly Wheelchair: "wheel";
};
/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export declare type EncounterSpecialArrangementsCodeType = typeof EncounterSpecialArrangementsCodes[keyof typeof EncounterSpecialArrangementsCodes];
//# sourceMappingURL=EncounterSpecialArrangementsCodes.d.ts.map