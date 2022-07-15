import { CodingArgs } from '../fhir/Coding.js';
/**
 * The aspect of quality, confidence, or certainty.
 */
export declare type CertaintyTypeCodingType = {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    DoseResponseGradient: CodingArgs;
    /**
     * Imprecision: fuzzy or wide variability.
     */
    Imprecision: CodingArgs;
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    Inconsistency: CodingArgs;
    /**
     * Indirectness: concerns reducing external validity.
     */
    Indirectness: CodingArgs;
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    LargeEffect: CodingArgs;
    /**
     * Overall: Overall certainty of evidence (quality of evidence).
     */
    OverallCertainty: CodingArgs;
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    PlausibleConfounding: CodingArgs;
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    PublicationBias: CodingArgs;
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    RiskOfBias: CodingArgs;
};
/**
 * The aspect of quality, confidence, or certainty.
 */
export declare const CertaintyTypeCodings: CertaintyTypeCodingType;
//# sourceMappingURL=CertaintyTypeCodings.d.ts.map