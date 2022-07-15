/**
 * Codes identifying the lifecycle stage of a product.
 */
export declare const NutritionproductStatusCodes: {
    /**
     * active: The product can be used.
     */
    readonly Active: "active";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The product is not expected or allowed to be used.
     */
    readonly Inactive: "inactive";
};
/**
 * Codes identifying the lifecycle stage of a product.
 */
export declare type NutritionproductStatusCodeType = typeof NutritionproductStatusCodes[keyof typeof NutritionproductStatusCodes];
//# sourceMappingURL=NutritionproductStatusCodes.d.ts.map