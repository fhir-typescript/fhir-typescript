/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare const VariableTypeCodes: {
    /**
     * continuous: The variable is a continuous result such as a quantity.
     */
    readonly Continuous: "continuous";
    /**
     * descriptive: The variable is described narratively rather than quantitatively.
     */
    readonly Descriptive: "descriptive";
    /**
     * dichotomous: The variable is dichotomous, such as present or absent.
     */
    readonly Dichotomous: "dichotomous";
};
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare type VariableTypeCodeType = typeof VariableTypeCodes[keyof typeof VariableTypeCodes];
//# sourceMappingURL=VariableTypeCodes.d.ts.map