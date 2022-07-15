import { CodingArgs } from '../fhir/Coding.js';
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified Substance.
 */
export declare type AllergyIntoleranceStatusCodingType = {
    /**
     * active: An active record of a reaction to the identified Substance.
     */
    Active: CodingArgs;
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified Substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: CodingArgs;
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: An inactive record of a reaction to the identified Substance.
     */
    Inactive: CodingArgs;
    /**
     * refuted: A propensity for a reaction to the identified Substance has been disproven with a high level of clinical certainty, which may include testing or rechallenge, and is refuted.
     */
    Refuted: CodingArgs;
    /**
     * resolved: A reaction to the identified Substance has been clinically reassessed by testing or rechallenge and considered to be resolved.
     */
    Resolved: CodingArgs;
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified Substance.
     */
    Unconfirmed: CodingArgs;
};
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified Substance.
 */
export declare const AllergyIntoleranceStatusCodings: AllergyIntoleranceStatusCodingType;
//# sourceMappingURL=AllergyIntoleranceStatusCodings.d.ts.map