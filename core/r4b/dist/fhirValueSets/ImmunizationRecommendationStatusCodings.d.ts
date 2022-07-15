import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRecommendationStatusCodingType = {
    /**
     * complete: The patient is fully protected and no further doses are recommended.
     */
    Complete: CodingArgs;
    /**
     * contraindicated: The patient is contraindicated for futher doses.
     */
    Contraindicated: CodingArgs;
    /**
     * due: The patient is due for their next vaccination.
     */
    Due: CodingArgs;
    /**
     * immune: The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    Immune: CodingArgs;
    /**
     * overdue: The patient is considered overdue for their next vaccination.
     */
    Overdue: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRecommendationStatusCodings: ImmunizationRecommendationStatusCodingType;
//# sourceMappingURL=ImmunizationRecommendationStatusCodings.d.ts.map