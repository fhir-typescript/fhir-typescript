/**
 * Overall defining type of this clinical use definition.
 */
export declare const ClinicalUseDefinitionTypeCodes: {
    /**
     * contraindication: A reason for not giving the medication.
     */
    readonly Contraindication: "contraindication";
    /**
     * indication: A reason for giving the medication.
     */
    readonly Indication: "indication";
    /**
     * interaction: Interactions between the medication and other substances.
     */
    readonly Interaction: "interaction";
    /**
     * undesirable-effect: Side effects or adverse effects associated with the medication.
     */
    readonly UndesirableEffect: "undesirable-effect";
    /**
     * warning: A general warning or issue that is not specifically one of the other types.
     */
    readonly Warning: "warning";
};
/**
 * Overall defining type of this clinical use definition.
 */
export declare type ClinicalUseDefinitionTypeCodeType = typeof ClinicalUseDefinitionTypeCodes[keyof typeof ClinicalUseDefinitionTypeCodes];
//# sourceMappingURL=ClinicalUseDefinitionTypeCodes.d.ts.map