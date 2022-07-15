/**
 * The relationship between two substance types.
 */
export declare const SubstanceRelationshipTypeCodes: {
    /**
     * Code: ActiveMoiety
     */
    readonly ActiveMoiety: "ActiveMoiety";
    /**
     * Code: Impurity
     */
    readonly ImpurityOf: "Impurity";
    /**
     * Code: Polymorph
     */
    readonly PolymorphOf: "Polymorph";
    /**
     * Code: Salt
     */
    readonly SaltToParent: "Salt";
    /**
     * Code: StartingMaterial
     */
    readonly StartingMaterialFor: "StartingMaterial";
};
/**
 * The relationship between two substance types.
 */
export declare type SubstanceRelationshipTypeCodeType = typeof SubstanceRelationshipTypeCodes[keyof typeof SubstanceRelationshipTypeCodes];
//# sourceMappingURL=SubstanceRelationshipTypeCodes.d.ts.map