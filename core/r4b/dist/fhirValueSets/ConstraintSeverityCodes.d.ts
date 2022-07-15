/**
 * SHALL applications comply with this constraint?
 */
export declare const ConstraintSeverityCodes: {
    /**
     * error: If the constraint is violated, the resource is not conformant.
     */
    readonly Error: "error";
    /**
     * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
     */
    readonly Warning: "warning";
};
/**
 * SHALL applications comply with this constraint?
 */
export declare type ConstraintSeverityCodeType = typeof ConstraintSeverityCodes[keyof typeof ConstraintSeverityCodes];
//# sourceMappingURL=ConstraintSeverityCodes.d.ts.map