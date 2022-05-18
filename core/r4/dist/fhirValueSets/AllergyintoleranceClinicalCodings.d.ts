import { Coding } from '../fhir/Coding.js';
/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export declare const AllergyintoleranceClinicalCodings: {
    /**
     * active: The subject is currently experiencing, or is at risk of, a reaction to the identified substance.
     */
    readonly Active: Coding;
    /**
     * inactive: The subject is no longer at risk of a reaction to the identified substance.
     */
    readonly Inactive: Coding;
    /**
     * resolved: A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.
     */
    readonly Resolved: Coding;
};
/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export declare type AllergyintoleranceClinicalCodingType = typeof AllergyintoleranceClinicalCodings;
//# sourceMappingURL=AllergyintoleranceClinicalCodings.d.ts.map