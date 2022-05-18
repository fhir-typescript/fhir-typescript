/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export declare const AllergyintoleranceVerificationCodes: {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    readonly Confirmed: "confirmed";
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * refuted: A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
     */
    readonly Refuted: "refuted";
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    readonly Unconfirmed: "unconfirmed";
};
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export declare type AllergyintoleranceVerificationCodeType = typeof AllergyintoleranceVerificationCodes[keyof typeof AllergyintoleranceVerificationCodes];
//# sourceMappingURL=AllergyintoleranceVerificationCodes.d.ts.map