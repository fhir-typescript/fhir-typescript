/**
 * Indicates the status of the care team.
 */
export declare const CareTeamStatusCodes: {
    /**
     * active: The care team is currently participating in the coordination and delivery of care.
     */
    readonly Active: "active";
    /**
     * entered-in-error: The care team should have never existed.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    readonly Inactive: "inactive";
    /**
     * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of care.
     */
    readonly Proposed: "proposed";
    /**
     * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    readonly Suspended: "suspended";
};
/**
 * Indicates the status of the care team.
 */
export declare type CareTeamStatusCodeType = typeof CareTeamStatusCodes[keyof typeof CareTeamStatusCodes];
//# sourceMappingURL=CareTeamStatusCodes.d.ts.map