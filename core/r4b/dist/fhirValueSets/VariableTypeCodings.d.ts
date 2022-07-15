import { CodingArgs } from '../fhir/Coding.js';
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare type VariableTypeCodingType = {
    /**
     * continuous: The variable is a continuous result such as a quantity.
     */
    Continuous: CodingArgs;
    /**
     * descriptive: The variable is described narratively rather than quantitatively.
     */
    Descriptive: CodingArgs;
    /**
     * dichotomous: The variable is dichotomous, such as present or absent.
     */
    Dichotomous: CodingArgs;
};
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare const VariableTypeCodings: VariableTypeCodingType;
//# sourceMappingURL=VariableTypeCodings.d.ts.map