import { CodingArgs } from '../fhir/Coding.js';
/**
 * Provides examples of reasons for actions to be performed.
 */
export declare type ActionReasonCodingType = {
    /**
     * care-gap: The action should be performed to address a detected care gap.
     */
    CareGapDetected: CodingArgs;
    /**
     * drug-drug-interaction: The action should be performed to address a detected potential drug-drug interaction.
     */
    DrugDrugInteraction: CodingArgs;
    /**
     * off-pathway: The action should be performed because the patient was determined to be off pathway.
     */
    OffPathway: CodingArgs;
    /**
     * quality-measure: The action should be performed to bring the patient's care in line with a quality measure.
     */
    QualityMeasure: CodingArgs;
    /**
     * risk-assessment: The action should be performed based on a particular risk assessment.
     */
    RiskAssessment: CodingArgs;
};
/**
 * Provides examples of reasons for actions to be performed.
 */
export declare const ActionReasonCodings: ActionReasonCodingType;
//# sourceMappingURL=ActionReasonCodings.d.ts.map