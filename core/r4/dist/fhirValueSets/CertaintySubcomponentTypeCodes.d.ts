/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare const CertaintySubcomponentTypeCodes: {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    readonly DoseResponseGradient: "DoseResponseGradient";
    /**
     * Imprecision: High quality evidence.
     */
    readonly Imprecision: "Imprecision";
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    readonly Inconsistency: "Inconsistency";
    /**
     * Indirectness: concerns reducing external validity.
     */
    readonly Indirectness: "Indirectness";
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    readonly LargeEffect: "LargeEffect";
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    readonly PlausibleConfounding: "PlausibleConfounding";
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    readonly PublicationBias: "PublicationBias";
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    readonly RiskOfBias: "RiskOfBias";
};
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare type CertaintySubcomponentTypeCodeType = typeof CertaintySubcomponentTypeCodes[keyof typeof CertaintySubcomponentTypeCodes];
//# sourceMappingURL=CertaintySubcomponentTypeCodes.d.ts.map