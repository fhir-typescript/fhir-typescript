/**
 * This value set includes sample Modifier type codes.
 */
export declare const ClaimModifiersCodes: {
    /**
     * a: Repair of prior service or installation.
     */
    readonly RepairOfPriorServiceOrInstallation: "a";
    /**
     * b: Temporary service or installation.
     */
    readonly TemporaryServiceOrInstallation: "b";
    /**
     * c: Treatment associated with TMJ.
     */
    readonly TMJTreatment: "c";
    /**
     * e: Implant or associated with an implant.
     */
    readonly ImplantOrAssociatedWithAnImplant: "e";
    /**
     * rooh: A Rush service or service performed outside of normal office hours.
     */
    readonly RushOrOutsideOfOfficeHours: "rooh";
    /**
     * x: None.
     */
    readonly None: "x";
};
/**
 * This value set includes sample Modifier type codes.
 */
export declare type ClaimModifiersCodeType = typeof ClaimModifiersCodes[keyof typeof ClaimModifiersCodes];
//# sourceMappingURL=ClaimModifiersCodes.d.ts.map