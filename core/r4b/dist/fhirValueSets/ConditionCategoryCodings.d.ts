import { CodingArgs } from '../fhir/Coding.js';
/**
 * Preferred value set for Condition Categories.
 */
export declare type ConditionCategoryCodingType = {
    /**
     * encounter-diagnosis: A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
     */
    EncounterDiagnosis: CodingArgs;
    /**
     * problem-list-item: An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
     */
    ProblemListItem: CodingArgs;
};
/**
 * Preferred value set for Condition Categories.
 */
export declare const ConditionCategoryCodings: ConditionCategoryCodingType;
//# sourceMappingURL=ConditionCategoryCodings.d.ts.map