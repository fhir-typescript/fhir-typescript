/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance.
 */
export declare const AllergyVerificationStatusCodes: {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    readonly Confirmed: "confirmed";
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * refuted: A propensity for a reaction to the identified substance has been disproven with a high level of clinical certainty, which may include testing or rechallenge, and is refuted.
     */
    readonly Refuted: "refuted";
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    readonly Unconfirmed: "unconfirmed";
};
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance.
 */
export declare type AllergyVerificationStatusCodeType = typeof AllergyVerificationStatusCodes[keyof typeof AllergyVerificationStatusCodes];
//# sourceMappingURL=AllergyVerificationStatusCodes.d.ts.map