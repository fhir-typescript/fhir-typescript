/**
 * A categorisation for an interaction between two substances.
 */
export declare const InteractionTypeCodes: {
    /**
     * Code: drug-drug
     */
    readonly DrugToDrugInteraction: "drug-drug";
    /**
     * Code: drug-food
     */
    readonly DrugToFoodInteraction: "drug-food";
    /**
     * Code: drug-test
     */
    readonly DrugToLaboratoryTestInteraction: "drug-test";
    /**
     * Code: other
     */
    readonly OtherInteraction: "other";
};
/**
 * A categorisation for an interaction between two substances.
 */
export declare type InteractionTypeCodeType = typeof InteractionTypeCodes[keyof typeof InteractionTypeCodes];
//# sourceMappingURL=InteractionTypeCodes.d.ts.map