import { CodingArgs } from '../fhir/Coding.js';
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare type CertaintySubcomponentTypeCodingType = {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    DoseResponseGradient: CodingArgs;
    /**
     * Imprecision: High quality evidence.
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
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare const CertaintySubcomponentTypeCodings: CertaintySubcomponentTypeCodingType;
//# sourceMappingURL=CertaintySubcomponentTypeCodings.d.ts.map