import { Coding } from '../fhir/Coding.js';
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare const CertaintySubcomponentTypeCodings: {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    readonly DoseResponseGradient: Coding;
    /**
     * Imprecision: High quality evidence.
     */
    readonly Imprecision: Coding;
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    readonly Inconsistency: Coding;
    /**
     * Indirectness: concerns reducing external validity.
     */
    readonly Indirectness: Coding;
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    readonly LargeEffect: Coding;
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    readonly PlausibleConfounding: Coding;
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    readonly PublicationBias: Coding;
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    readonly RiskOfBias: Coding;
};
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare type CertaintySubcomponentTypeCodingType = typeof CertaintySubcomponentTypeCodings;
//# sourceMappingURL=CertaintySubcomponentTypeCodings.d.ts.map