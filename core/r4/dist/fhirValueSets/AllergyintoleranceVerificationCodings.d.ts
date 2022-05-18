import { Coding } from '../fhir/Coding.js';
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export declare const AllergyintoleranceVerificationCodings: {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    readonly Confirmed: Coding;
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    readonly EnteredInError: Coding;
    /**
     * refuted: A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
     */
    readonly Refuted: Coding;
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    readonly Unconfirmed: Coding;
};
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export declare type AllergyintoleranceVerificationCodingType = typeof AllergyintoleranceVerificationCodings;
//# sourceMappingURL=AllergyintoleranceVerificationCodings.d.ts.map