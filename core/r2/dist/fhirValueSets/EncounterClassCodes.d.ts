/**
 * Classification of the encounter
 */
export declare const EncounterClassCodes: {
    /**
     * ambulatory: An encounter where the patient visits the practitioner in his/her office, e.g. a G.P. visit.
     */
    readonly Ambulatory: "ambulatory";
    /**
     * daytime: An encounter where the patient needs more prolonged treatment or investigations than outpatients, but who do not need to stay in the hospital overnight.
     */
    readonly Daytime: "daytime";
    /**
     * emergency: An encounter in the Emergency Care Department.
     */
    readonly Emergency: "emergency";
    /**
     * field: An encounter taking place outside the regular environment for giving care.
     */
    readonly Field: "field";
    /**
     * home: An encounter where the practitioner visits the patient at his/her home.
     */
    readonly Home: "home";
    /**
     * inpatient: An encounter during which the patient is hospitalized and stays overnight.
     */
    readonly Inpatient: "inpatient";
    /**
     * other: Any other encounter type that is not described by one of the other values. Where this is used it is expected that an implementer will include an extension value to define what the actual other type is.
     */
    readonly Other: "other";
    /**
     * outpatient: An encounter during which the patient is not hospitalized overnight.
     */
    readonly Outpatient: "outpatient";
    /**
     * virtual: An encounter that takes place where the patient and practitioner do not physically meet but use electronic means for contact.
     */
    readonly Virtual: "virtual";
};
/**
 * Classification of the encounter
 */
export declare type EncounterClassCodeType = typeof EncounterClassCodes[keyof typeof EncounterClassCodes];
//# sourceMappingURL=EncounterClassCodes.d.ts.map