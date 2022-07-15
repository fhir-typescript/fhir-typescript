import { CodingArgs } from '../fhir/Coding.js';
/**
 * Evidence focus characteristic code.
 */
export declare type FocusCharacteristicCodingType = {
    /**
     * citation: Used to reference a specific article.
     */
    Citation: CodingArgs;
    /**
     * clinical-outcomes-observed: Used to denote a focus on clinical outcomes, ie evidence variable in role of outcome (measured variable) as observed is considered a "clinical outcome" (patient-important outcome such as mortality, symptoms, function or quality of life).
     */
    ObservedOutcomesAreClinicalOutcomes: CodingArgs;
    /**
     * comparator: The comparator (intervention or control state) of interest.
     */
    Comparator: CodingArgs;
    /**
     * exposure: The exposure of interest, such as an intervention.
     */
    Exposure: CodingArgs;
    /**
     * medication-exposures: Any medication exposures. A subset of exposures or interventions that are medications.
     */
    MedicationExposures: CodingArgs;
    /**
     * outcome: the outcome of interest.
     */
    Outcome: CodingArgs;
    /**
     * population: The population of interest.
     */
    Population: CodingArgs;
    /**
     * study-type: Type of research study, such as randomized trial or case-control study.
     */
    StudyType: CodingArgs;
};
/**
 * Evidence focus characteristic code.
 */
export declare const FocusCharacteristicCodings: FocusCharacteristicCodingType;
//# sourceMappingURL=FocusCharacteristicCodings.d.ts.map