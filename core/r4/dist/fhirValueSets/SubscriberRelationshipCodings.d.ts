import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare const SubscriberRelationshipCodings: {
    /**
     * child: The Beneficiary is a child of the Subscriber
     */
    readonly Child: Coding;
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    readonly CommonLawSpouse: Coding;
    /**
     * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    readonly InjuredParty: Coding;
    /**
     * other: The Beneficiary has some other relationship the Subscriber
     */
    readonly Other: Coding;
    /**
     * parent: The Beneficiary is a parent of the Subscriber
     */
    readonly Parent: Coding;
    /**
     * self: The Beneficiary is the Subscriber
     */
    readonly Self: Coding;
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
     */
    readonly Spouse: Coding;
};
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare type SubscriberRelationshipCodingType = typeof SubscriberRelationshipCodings;
//# sourceMappingURL=SubscriberRelationshipCodings.d.ts.map