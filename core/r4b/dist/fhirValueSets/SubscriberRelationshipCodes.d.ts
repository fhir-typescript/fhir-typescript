/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare const SubscriberRelationshipCodes: {
    /**
     * child: The Beneficiary is a child of the Subscriber
     */
    readonly Child: "child";
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    readonly CommonLawSpouse: "common";
    /**
     * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    readonly InjuredParty: "injured";
    /**
     * other: The Beneficiary has some other relationship the Subscriber
     */
    readonly Other: "other";
    /**
     * parent: The Beneficiary is a parent of the Subscriber
     */
    readonly Parent: "parent";
    /**
     * self: The Beneficiary is the Subscriber
     */
    readonly Self: "self";
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
     */
    readonly Spouse: "spouse";
};
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare type SubscriberRelationshipCodeType = typeof SubscriberRelationshipCodes[keyof typeof SubscriberRelationshipCodes];
//# sourceMappingURL=SubscriberRelationshipCodes.d.ts.map