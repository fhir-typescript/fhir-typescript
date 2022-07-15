/**
 * The role that the assertion variable plays.
 */
export declare const VariableRoleCodes: {
    /**
     * confounder: variable represents a confounder.
     */
    readonly Confounder: "confounder";
    /**
     * exposure: variable represents an exposure.
     */
    readonly Exposure: "exposure";
    /**
     * measuredVariable: variable represents a measured variable.
     */
    readonly MeasuredVariable: "measuredVariable";
    /**
     * population: variable represents a population.
     */
    readonly Population: "population";
    /**
     * referenceExposure: variable represents a reference exposure.
     */
    readonly ReferenceExposure: "referenceExposure";
    /**
     * subpopulation: variable represents a subpopulation.
     */
    readonly Subpopulation: "subpopulation";
};
/**
 * The role that the assertion variable plays.
 */
export declare type VariableRoleCodeType = typeof VariableRoleCodes[keyof typeof VariableRoleCodes];
//# sourceMappingURL=VariableRoleCodes.d.ts.map