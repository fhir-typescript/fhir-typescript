/**
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare const VariableHandlingCodes: {
    /**
     * continuous: A continuous variable is one for which, within the limits the variable ranges, any value is possible (from STATO http://purl.obolibrary.org/obo/STATO_0000251).
     */
    readonly ContinuousVariable: "continuous";
    /**
     * dichotomous: A dichotomous variable is a categorical variable which is defined to have only 2 categories or possible values (from STATO http://purl.obolibrary.org/obo/STATO_0000090).
     */
    readonly DichotomousVariable: "dichotomous";
    /**
     * ordinal: An ordinal variable is a categorical variable where the discrete possible values are ordered or correspond to an implicit ranking (from STATO http://purl.obolibrary.org/obo/STATO_0000228).
     */
    readonly OrdinalVariable: "ordinal";
    /**
     * polychotomous: A polychotomous variable is a categorical variable which is defined to have minimally 2 categories or possible values. (from STATO  http://purl.obolibrary.org/obo/STATO_0000087).  Suggestion to limit code use to situations when neither dichotomous nor ordinal variables apply.
     */
    readonly PolychotomousVariable: "polychotomous";
};
/**
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare type VariableHandlingCodeType = typeof VariableHandlingCodes[keyof typeof VariableHandlingCodes];
//# sourceMappingURL=VariableHandlingCodes.d.ts.map