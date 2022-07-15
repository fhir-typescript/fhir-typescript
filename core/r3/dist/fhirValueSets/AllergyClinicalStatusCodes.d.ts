/**
 * The clinical status of the allergy or intolerance.
 */
export declare const AllergyClinicalStatusCodes: {
    /**
     * active: An active record of a risk of a reaction to the identified substance.
     */
    readonly Active: "active";
    /**
     * inactive: An inactivated record of a risk of a reaction to the identified substance.
     */
    readonly Inactive: "inactive";
    /**
     * resolved: A reaction to the identified substance has been clinically reassessed by testing or re-exposure and considered to be resolved.
     */
    readonly Resolved: "resolved";
};
/**
 * The clinical status of the allergy or intolerance.
 */
export declare type AllergyClinicalStatusCodeType = typeof AllergyClinicalStatusCodes[keyof typeof AllergyClinicalStatusCodes];
//# sourceMappingURL=AllergyClinicalStatusCodes.d.ts.map