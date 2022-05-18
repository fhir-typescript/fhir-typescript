import { Coding } from '../fhir/Coding.js';
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare const VariableTypeCodings: {
    /**
     * continuous: The variable is a continuous result such as a quantity.
     */
    readonly Continuous: Coding;
    /**
     * descriptive: The variable is described narratively rather than quantitatively.
     */
    readonly Descriptive: Coding;
    /**
     * dichotomous: The variable is dichotomous, such as present or absent.
     */
    readonly Dichotomous: Coding;
};
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare type VariableTypeCodingType = typeof VariableTypeCodings;
//# sourceMappingURL=VariableTypeCodings.d.ts.map