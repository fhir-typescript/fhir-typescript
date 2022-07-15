/**
 * Classification of relationship between a therapy and a contraindication or an indication.
 */
export declare const TherapyRelationshipTypeCodes: {
    /**
     * contraindicated-except-with: Contraindicated unless the other therapy is given
     */
    readonly ContraindicatedUnlessTheOtherTherapyIsGiven: "contraindicated-except-with";
    /**
     * contraindicated-only-with: Only contraindicated if the other therapy is given
     */
    readonly OnlyContraindicatedIfTheOtherTherapyIsGiven: "contraindicated-only-with";
    /**
     * indicated-except-with: Indicated except when the other therapy is given
     */
    readonly IndicatedExceptWhenTheOtherTherapyIsGiven: "indicated-except-with";
    /**
     * indicated-only-before: Indicated only if the other therapy is planned to be given afterwards (prep)
     */
    readonly IndicatedOnlyIfTheOtherTherapyIsPlannedToBeGivenAfterwardsPrep: "indicated-only-before";
    /**
     * indicated-only-with: Indicated only when the other therapy is given (co-occurrent)
     */
    readonly IndicatedOnlyWhenTheOtherTherapyIsGivenCoOccurrent: "indicated-only-with";
    /**
     * replace-other-therapy: Indicated to replace the other therapy
     */
    readonly IndicatedToReplaceTheOtherTherapy: "replace-other-therapy";
    /**
     * replace-other-therapy-contraindicated: Indicated to replace the other contraindicated therapy.
     */
    readonly IndicatedToReplaceTheOtherContraindicatedTherapy: "replace-other-therapy-contraindicated";
    /**
     * replace-other-therapy-not-effective: Indicated to replace the other therapy not effective on patient
     */
    readonly IndicatedToReplaceTheOtherTherapyNotEffectiveOnPatient: "replace-other-therapy-not-effective";
    /**
     * replace-other-therapy-not-tolerated: Indicated to replace the other therapy not well tolerated by patient
     */
    readonly IndicatedToReplaceTheOtherTherapyNotWellToleratedByPatient: "replace-other-therapy-not-tolerated";
};
/**
 * Classification of relationship between a therapy and a contraindication or an indication.
 */
export declare type TherapyRelationshipTypeCodeType = typeof TherapyRelationshipTypeCodes[keyof typeof TherapyRelationshipTypeCodes];
//# sourceMappingURL=TherapyRelationshipTypeCodes.d.ts.map