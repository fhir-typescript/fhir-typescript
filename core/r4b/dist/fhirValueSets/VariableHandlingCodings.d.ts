import { CodingArgs } from '../fhir/Coding.js';
/**
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare type VariableHandlingCodingType = {
    /**
     * continuous: A continuous variable is one for which, within the limits the variable ranges, any value is possible (from STATO http://purl.obolibrary.org/obo/STATO_0000251).
     */
    ContinuousVariable: CodingArgs;
    /**
     * dichotomous: A dichotomous variable is a categorical variable which is defined to have only 2 categories or possible values (from STATO http://purl.obolibrary.org/obo/STATO_0000090).
     */
    DichotomousVariable: CodingArgs;
    /**
     * ordinal: An ordinal variable is a categorical variable where the discrete possible values are ordered or correspond to an implicit ranking (from STATO http://purl.obolibrary.org/obo/STATO_0000228).
     */
    OrdinalVariable: CodingArgs;
    /**
     * polychotomous: A polychotomous variable is a categorical variable which is defined to have minimally 2 categories or possible values. (from STATO  http://purl.obolibrary.org/obo/STATO_0000087).  Suggestion to limit code use to situations when neither dichotomous nor ordinal variables apply.
     */
    PolychotomousVariable: CodingArgs;
};
/**
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare const VariableHandlingCodings: VariableHandlingCodingType;
//# sourceMappingURL=VariableHandlingCodings.d.ts.map