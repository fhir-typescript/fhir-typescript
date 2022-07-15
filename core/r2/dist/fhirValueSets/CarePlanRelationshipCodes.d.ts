/**
 * Codes identifying the types of relationships between two plans.
 */
export declare const CarePlanRelationshipCodes: {
    /**
     * fulfills: This plan provides details about how to perform activities defined at a higher level by the referenced plan.
     */
    readonly Fulfills: "fulfills";
    /**
     * includes: The referenced plan is considered to be part of this plan.
     */
    readonly Includes: "includes";
    /**
     * replaces: This plan takes the places of the referenced plan.
     */
    readonly Replaces: "replaces";
};
/**
 * Codes identifying the types of relationships between two plans.
 */
export declare type CarePlanRelationshipCodeType = typeof CarePlanRelationshipCodes[keyof typeof CarePlanRelationshipCodes];
//# sourceMappingURL=CarePlanRelationshipCodes.d.ts.map