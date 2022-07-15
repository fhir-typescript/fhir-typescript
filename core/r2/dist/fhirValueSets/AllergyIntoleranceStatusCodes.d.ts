/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified Substance.
 */
export declare const AllergyIntoleranceStatusCodes: {
    /**
     * active: An active record of a reaction to the identified Substance.
     */
    readonly Active: "active";
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified Substance, which may include clinical evidence by testing or rechallenge.
     */
    readonly Confirmed: "confirmed";
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: An inactive record of a reaction to the identified Substance.
     */
    readonly Inactive: "inactive";
    /**
     * refuted: A propensity for a reaction to the identified Substance has been disproven with a high level of clinical certainty, which may include testing or rechallenge, and is refuted.
     */
    readonly Refuted: "refuted";
    /**
     * resolved: A reaction to the identified Substance has been clinically reassessed by testing or rechallenge and considered to be resolved.
     */
    readonly Resolved: "resolved";
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified Substance.
     */
    readonly Unconfirmed: "unconfirmed";
};
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified Substance.
 */
export declare type AllergyIntoleranceStatusCodeType = typeof AllergyIntoleranceStatusCodes[keyof typeof AllergyIntoleranceStatusCodes];
//# sourceMappingURL=AllergyIntoleranceStatusCodes.d.ts.map