/**
 * Types of resources that are part of group.
 */
export declare const GroupTypeCodes: {
    /**
     * animal: Group contains "animal" Patient resources.
     */
    readonly Animal: "animal";
    /**
     * device: Group contains Device resources.
     */
    readonly Device: "device";
    /**
     * medication: Group contains Medication resources.
     */
    readonly Medication: "medication";
    /**
     * person: Group contains "person" Patient resources.
     */
    readonly Person: "person";
    /**
     * practitioner: Group contains healthcare practitioner resources (Practitioner or PractitionerRole).
     */
    readonly Practitioner: "practitioner";
    /**
     * substance: Group contains Substance resources.
     */
    readonly Substance: "substance";
};
/**
 * Types of resources that are part of group.
 */
export declare type GroupTypeCodeType = typeof GroupTypeCodes[keyof typeof GroupTypeCodes];
//# sourceMappingURL=GroupTypeCodes.d.ts.map