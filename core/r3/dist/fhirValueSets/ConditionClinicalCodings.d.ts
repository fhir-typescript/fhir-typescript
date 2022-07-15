import { CodingArgs } from '../fhir/Coding.js';
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare type ConditionClinicalCodingType = {
    /**
     * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
     */
    Active: CodingArgs;
    /**
     * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
     */
    Inactive: CodingArgs;
    /**
     * recurrence: The subject is having a relapse or re-experiencing the condition after a period of remission or presumed resolution.
     */
    Recurrence: CodingArgs;
    /**
     * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    Remission: CodingArgs;
    /**
     * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
     */
    Resolved: CodingArgs;
};
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare const ConditionClinicalCodings: ConditionClinicalCodingType;
//# sourceMappingURL=ConditionClinicalCodings.d.ts.map