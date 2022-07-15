/**
 * Evidence focus characteristic code.
 */
export declare const FocusCharacteristicCodes: {
    /**
     * citation: Used to reference a specific article.
     */
    readonly Citation: "citation";
    /**
     * clinical-outcomes-observed: Used to denote a focus on clinical outcomes, ie evidence variable in role of outcome (measured variable) as observed is considered a "clinical outcome" (patient-important outcome such as mortality, symptoms, function or quality of life).
     */
    readonly ObservedOutcomesAreClinicalOutcomes: "clinical-outcomes-observed";
    /**
     * comparator: The comparator (intervention or control state) of interest.
     */
    readonly Comparator: "comparator";
    /**
     * exposure: The exposure of interest, such as an intervention.
     */
    readonly Exposure: "exposure";
    /**
     * medication-exposures: Any medication exposures. A subset of exposures or interventions that are medications.
     */
    readonly MedicationExposures: "medication-exposures";
    /**
     * outcome: the outcome of interest.
     */
    readonly Outcome: "outcome";
    /**
     * population: The population of interest.
     */
    readonly Population: "population";
    /**
     * study-type: Type of research study, such as randomized trial or case-control study.
     */
    readonly StudyType: "study-type";
};
/**
 * Evidence focus characteristic code.
 */
export declare type FocusCharacteristicCodeType = typeof FocusCharacteristicCodes[keyof typeof FocusCharacteristicCodes];
//# sourceMappingURL=FocusCharacteristicCodes.d.ts.map