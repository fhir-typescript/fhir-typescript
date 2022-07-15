/**
 * Preferred value set for Condition Categories.
 */
export declare const ConditionCategoryCodes: {
    /**
     * encounter-diagnosis: A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
     */
    readonly EncounterDiagnosis: "encounter-diagnosis";
    /**
     * problem-list-item: An item on a problem list which can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
     */
    readonly ProblemListItem: "problem-list-item";
};
/**
 * Preferred value set for Condition Categories.
 */
export declare type ConditionCategoryCodeType = typeof ConditionCategoryCodes[keyof typeof ConditionCategoryCodes];
//# sourceMappingURL=ConditionCategoryCodes.d.ts.map