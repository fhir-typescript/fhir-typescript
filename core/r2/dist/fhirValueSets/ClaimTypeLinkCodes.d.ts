/**
 * The type or discipline-style of the claim.
 */
export declare const ClaimTypeLinkCodes: {
    /**
     * institutional: A claim for Institution based, typically in-patient, goods and services.
     */
    readonly Institutional: "institutional";
    /**
     * oral: A claim for Oral Health (Dentist, Denturist, Hygienist) goods and services.
     */
    readonly OralHealth: "oral";
    /**
     * pharmacy: A claim for Pharmacy based goods and services.
     */
    readonly Pharmacy: "pharmacy";
    /**
     * professional: A claim for Professional, typically out-patient, goods and services.
     */
    readonly Professional: "professional";
    /**
     * vision: A claim for Vision (Ophthamologist, Optometrist and Optician) goods and services.
     */
    readonly Vision: "vision";
};
/**
 * The type or discipline-style of the claim.
 */
export declare type ClaimTypeLinkCodeType = typeof ClaimTypeLinkCodes[keyof typeof ClaimTypeLinkCodes];
//# sourceMappingURL=ClaimTypeLinkCodes.d.ts.map