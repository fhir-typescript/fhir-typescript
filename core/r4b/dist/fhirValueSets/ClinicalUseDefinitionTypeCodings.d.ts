import { CodingArgs } from '../fhir/Coding.js';
/**
 * Overall defining type of this clinical use definition.
 */
export declare type ClinicalUseDefinitionTypeCodingType = {
    /**
     * contraindication: A reason for not giving the medication.
     */
    Contraindication: CodingArgs;
    /**
     * indication: A reason for giving the medication.
     */
    Indication: CodingArgs;
    /**
     * interaction: Interactions between the medication and other substances.
     */
    Interaction: CodingArgs;
    /**
     * undesirable-effect: Side effects or adverse effects associated with the medication.
     */
    UndesirableEffect: CodingArgs;
    /**
     * warning: A general warning or issue that is not specifically one of the other types.
     */
    Warning: CodingArgs;
};
/**
 * Overall defining type of this clinical use definition.
 */
export declare const ClinicalUseDefinitionTypeCodings: ClinicalUseDefinitionTypeCodingType;
//# sourceMappingURL=ClinicalUseDefinitionTypeCodings.d.ts.map