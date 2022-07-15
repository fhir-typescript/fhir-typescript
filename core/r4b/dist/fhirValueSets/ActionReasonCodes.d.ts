/**
 * Provides examples of reasons for actions to be performed.
 */
export declare const ActionReasonCodes: {
    /**
     * care-gap: The action should be performed to address a detected care gap.
     */
    readonly CareGapDetected: "care-gap";
    /**
     * drug-drug-interaction: The action should be performed to address a detected potential drug-drug interaction.
     */
    readonly DrugDrugInteraction: "drug-drug-interaction";
    /**
     * off-pathway: The action should be performed because the patient was determined to be off pathway.
     */
    readonly OffPathway: "off-pathway";
    /**
     * quality-measure: The action should be performed to bring the patient's care in line with a quality measure.
     */
    readonly QualityMeasure: "quality-measure";
    /**
     * risk-assessment: The action should be performed based on a particular risk assessment.
     */
    readonly RiskAssessment: "risk-assessment";
};
/**
 * Provides examples of reasons for actions to be performed.
 */
export declare type ActionReasonCodeType = typeof ActionReasonCodes[keyof typeof ActionReasonCodes];
//# sourceMappingURL=ActionReasonCodes.d.ts.map