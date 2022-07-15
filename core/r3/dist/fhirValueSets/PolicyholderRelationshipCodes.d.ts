/**
 * This value set includes codes for the relationship between the Policyholder and the Beneficiary (insured/covered party/patient)..
 */
export declare const PolicyholderRelationshipCodes: {
    /**
     * child: The Beneficiary is a child of the Policyholder
     */
    readonly Child: "child";
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Policyholder
     */
    readonly CommonLawSpouse: "common";
    /**
     * other: The Beneficiary has some other relationship the Policyholder
     */
    readonly Other: "other";
    /**
     * parent: The Beneficiary is a parent of the Policyholder
     */
    readonly Parent: "parent";
    /**
     * self: The Beneficiary is the Policyholder
     */
    readonly Self: "self";
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Policyholder
     */
    readonly Spouse: "spouse";
};
/**
 * This value set includes codes for the relationship between the Policyholder and the Beneficiary (insured/covered party/patient)..
 */
export declare type PolicyholderRelationshipCodeType = typeof PolicyholderRelationshipCodes[keyof typeof PolicyholderRelationshipCodes];
//# sourceMappingURL=PolicyholderRelationshipCodes.d.ts.map