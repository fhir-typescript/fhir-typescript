/**
 * The aspect of quality, confidence, or certainty.
 */
export declare const CertaintyTypeCodes: {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    readonly DoseResponseGradient: "DoseResponseGradient";
    /**
     * Imprecision: fuzzy or wide variability.
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
     * Overall: Overall certainty of evidence (quality of evidence).
     */
    readonly OverallCertainty: "Overall";
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
 * The aspect of quality, confidence, or certainty.
 */
export declare type CertaintyTypeCodeType = typeof CertaintyTypeCodes[keyof typeof CertaintyTypeCodes];
//# sourceMappingURL=CertaintyTypeCodes.d.ts.map