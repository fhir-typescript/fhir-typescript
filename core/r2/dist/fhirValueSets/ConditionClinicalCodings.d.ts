import { CodingArgs } from '../fhir/Coding.js';
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare type ConditionClinicalCodingType = {
    /**
     * active: The subject is currently experiencing the symptoms of the condition.
     */
    Active: CodingArgs;
    /**
     * relapse: The subject is re-experiencing the symptoms of the condition after a period of remission or presumed resolution.
     */
    Relapse: CodingArgs;
    /**
     * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    Remission: CodingArgs;
    /**
     * resolved: The subject is no longer experiencing the symptoms of the condition and there is no perceived risk of the symptoms returning.
     */
    Resolved: CodingArgs;
};
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare const ConditionClinicalCodings: ConditionClinicalCodingType;
//# sourceMappingURL=ConditionClinicalCodings.d.ts.map