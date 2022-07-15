import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare type SubscriberRelationshipCodingType = {
    /**
     * child: The Beneficiary is a child of the Subscriber
     */
    Child: CodingArgs;
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    CommonLawSpouse: CodingArgs;
    /**
     * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    InjuredParty: CodingArgs;
    /**
     * other: The Beneficiary has some other relationship the Subscriber
     */
    Other: CodingArgs;
    /**
     * parent: The Beneficiary is a parent of the Subscriber
     */
    Parent: CodingArgs;
    /**
     * self: The Beneficiary is the Subscriber
     */
    Self: CodingArgs;
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
     */
    Spouse: CodingArgs;
};
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare const SubscriberRelationshipCodings: SubscriberRelationshipCodingType;
//# sourceMappingURL=SubscriberRelationshipCodings.d.ts.map