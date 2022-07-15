import { CodingArgs } from '../fhir/Coding.js';
/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export declare type ReactionEventCertaintyCodingType = {
    /**
     * confirmed: There is a very high level of clinical certainty that the reaction was due to the identified Substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: CodingArgs;
    /**
     * likely: There is a high level of clinical certainty that the reaction was caused by the identified Substance.
     */
    Likely: CodingArgs;
    /**
     * unlikely: There is a low level of clinical certainty that the reaction was caused by the identified Substance.
     */
    Unlikely: CodingArgs;
};
/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export declare const ReactionEventCertaintyCodings: ReactionEventCertaintyCodingType;
//# sourceMappingURL=ReactionEventCertaintyCodings.d.ts.map