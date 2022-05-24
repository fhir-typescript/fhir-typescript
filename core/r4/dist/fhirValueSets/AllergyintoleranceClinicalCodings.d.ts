import { CodingArgs } from '../fhir/Coding.js';
/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export declare type AllergyintoleranceClinicalCodingType = {
    /**
     * active: The subject is currently experiencing, or is at risk of, a reaction to the identified substance.
     */
    Active: CodingArgs;
    /**
     * inactive: The subject is no longer at risk of a reaction to the identified substance.
     */
    Inactive: CodingArgs;
    /**
     * resolved: A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.
     */
    Resolved: CodingArgs;
};
/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export declare const AllergyintoleranceClinicalCodings: AllergyintoleranceClinicalCodingType;
//# sourceMappingURL=AllergyintoleranceClinicalCodings.d.ts.map