import { Coding } from '../fhir/Coding.js';
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare const ConditionClinicalCodings: {
    /**
     * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
     */
    readonly Active: Coding;
    /**
     * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
     */
    readonly Inactive: Coding;
    /**
     * recurrence: The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.
     */
    readonly Recurrence: Coding;
    /**
     * relapse: The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.
     */
    readonly Relapse: Coding;
    /**
     * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    readonly Remission: Coding;
    /**
     * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
     */
    readonly Resolved: Coding;
};
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare type ConditionClinicalCodingType = typeof ConditionClinicalCodings;
//# sourceMappingURL=ConditionClinicalCodings.d.ts.map