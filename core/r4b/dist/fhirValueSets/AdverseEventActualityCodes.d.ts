/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare const AdverseEventActualityCodes: {
    /**
     * actual: The adverse event actually happened regardless of whether anyone was affected or harmed.
     */
    readonly AdverseEvent: "actual";
    /**
     * potential: A potential adverse event.
     */
    readonly PotentialAdverseEvent: "potential";
};
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare type AdverseEventActualityCodeType = typeof AdverseEventActualityCodes[keyof typeof AdverseEventActualityCodes];
//# sourceMappingURL=AdverseEventActualityCodes.d.ts.map