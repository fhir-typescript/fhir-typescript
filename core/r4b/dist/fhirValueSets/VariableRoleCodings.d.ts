import { CodingArgs } from '../fhir/Coding.js';
/**
 * The role that the assertion variable plays.
 */
export declare type VariableRoleCodingType = {
    /**
     * confounder: variable represents a confounder.
     */
    Confounder: CodingArgs;
    /**
     * exposure: variable represents an exposure.
     */
    Exposure: CodingArgs;
    /**
     * measuredVariable: variable represents a measured variable.
     */
    MeasuredVariable: CodingArgs;
    /**
     * population: variable represents a population.
     */
    Population: CodingArgs;
    /**
     * referenceExposure: variable represents a reference exposure.
     */
    ReferenceExposure: CodingArgs;
    /**
     * subpopulation: variable represents a subpopulation.
     */
    Subpopulation: CodingArgs;
};
/**
 * The role that the assertion variable plays.
 */
export declare const VariableRoleCodings: VariableRoleCodingType;
//# sourceMappingURL=VariableRoleCodings.d.ts.map