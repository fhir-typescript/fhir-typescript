/**
 * Classification of warning type.
 */
export declare const WarningTypeCodes: {
    /**
     * P313: Get medical advice/attention.
     */
    readonly GetMedicalAdviceAttention: "P313";
    /**
     * P314: Get medical advice/attention if you feel unwell.
     */
    readonly GetMedicalAdviceAttentionIfYouFeelUnwell: "P314";
    /**
     * P315: Get immediate medical advice/attention.
     */
    readonly GetImmediateMedicalAdviceAttention: "P315";
    /**
     * P320: Specific treatment is urgent (see ... on this label).
     */
    readonly SpecificTreatmentIsUrgentSeeEllipsisOnThisLabel: "P320";
    /**
     * P321: Specific treatment (see ... on this label).
     */
    readonly SpecificTreatmentSeeEllipsisOnThisLabel: "P321";
    /**
     * P322: Specific measures (see ... on this label).
     */
    readonly SpecificMeasuresSeeEllipsisOnThisLabel: "P322";
    /**
     * P330: Rinse mouth.
     */
    readonly RinseMouth: "P330";
    /**
     * P331: Do NOT induce vomiting.
     */
    readonly DoNOTInduceVomiting: "P331";
    /**
     * P361: Remove/Take off immediately all contaminated clothing.
     */
    readonly RemoveTakeOffImmediatelyAllContaminatedClothing: "P361";
    /**
     * P363: Wash contaminated clothing before reuse.
     */
    readonly WashContaminatedClothingBeforeReuse: "P363";
};
/**
 * Classification of warning type.
 */
export declare type WarningTypeCodeType = typeof WarningTypeCodes[keyof typeof WarningTypeCodes];
//# sourceMappingURL=WarningTypeCodes.d.ts.map