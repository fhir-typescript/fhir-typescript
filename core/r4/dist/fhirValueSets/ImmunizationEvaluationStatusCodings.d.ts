import { Coding } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 */
export declare const ImmunizationEvaluationStatusCodings: {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    readonly EnteredInError: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 */
export declare type ImmunizationEvaluationStatusCodingType = typeof ImmunizationEvaluationStatusCodings;
//# sourceMappingURL=ImmunizationEvaluationStatusCodings.d.ts.map