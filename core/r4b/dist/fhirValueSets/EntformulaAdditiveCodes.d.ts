/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export declare const EntformulaAdditiveCodes: {
    /**
     * carbohydrate: Modular carbohydrate enteral formula component
     */
    readonly Carbohydrate: "carbohydrate";
    /**
     * fiber: Modular fiber enteral formula component
     */
    readonly Fiber: "fiber";
    /**
     * lipid: Modular lipid enteral formula component
     */
    readonly Lipid: "lipid";
    /**
     * protein: Modular protein enteral formula component
     */
    readonly Protein: "protein";
    /**
     * water: Added water
     */
    readonly Water: "water";
};
/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export declare type EntformulaAdditiveCodeType = typeof EntformulaAdditiveCodes[keyof typeof EntformulaAdditiveCodes];
//# sourceMappingURL=EntformulaAdditiveCodes.d.ts.map