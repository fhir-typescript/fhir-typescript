/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export declare const ReactionEventCertaintyCodes: {
    /**
     * confirmed: There is a very high level of clinical certainty that the reaction was due to the identified Substance, which may include clinical evidence by testing or rechallenge.
     */
    readonly Confirmed: "confirmed";
    /**
     * likely: There is a high level of clinical certainty that the reaction was caused by the identified Substance.
     */
    readonly Likely: "likely";
    /**
     * unlikely: There is a low level of clinical certainty that the reaction was caused by the identified Substance.
     */
    readonly Unlikely: "unlikely";
};
/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export declare type ReactionEventCertaintyCodeType = typeof ReactionEventCertaintyCodes[keyof typeof ReactionEventCertaintyCodes];
//# sourceMappingURL=ReactionEventCertaintyCodes.d.ts.map