import { CodingArgs } from '../fhir/Coding.js';
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export declare type AllergyintoleranceVerificationCodingType = {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: CodingArgs;
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: CodingArgs;
    /**
     * refuted: A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
     */
    Refuted: CodingArgs;
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    Unconfirmed: CodingArgs;
};
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export declare const AllergyintoleranceVerificationCodings: AllergyintoleranceVerificationCodingType;
//# sourceMappingURL=AllergyintoleranceVerificationCodings.d.ts.map