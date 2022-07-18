import { CodingArgs } from '../fhir/Coding.js';
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance.
 */
export declare type AllergyVerificationStatusCodingType = {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: CodingArgs;
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: CodingArgs;
    /**
     * refuted: A propensity for a reaction to the identified substance has been disproven with a high level of clinical certainty, which may include testing or rechallenge, and is refuted.
     */
    Refuted: CodingArgs;
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    Unconfirmed: CodingArgs;
};
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance.
 */
export declare const AllergyVerificationStatusCodings: AllergyVerificationStatusCodingType;
//# sourceMappingURL=AllergyVerificationStatusCodings.d.ts.map