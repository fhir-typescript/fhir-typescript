/**
 * Codes indicating the kind of the price component.
 */
export declare const InvoicePriceComponentTypeCodes: {
    /**
     * base: the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.
     */
    readonly BasePrice: "base";
    /**
     * deduction: the amount is a deduction applied on the base price.
     */
    readonly Deduction: "deduction";
    /**
     * discount: the amount is a discount applied on the base price.
     */
    readonly Discount: "discount";
    /**
     * informational: the amount is of informational character, it has not been applied in the calculation of the total price.
     */
    readonly Informational: "informational";
    /**
     * surcharge: the amount is a surcharge applied on the base price.
     */
    readonly Surcharge: "surcharge";
    /**
     * tax: the amount is the tax component of the total price.
     */
    readonly Tax: "tax";
};
/**
 * Codes indicating the kind of the price component.
 */
export declare type InvoicePriceComponentTypeCodeType = typeof InvoicePriceComponentTypeCodes[keyof typeof InvoicePriceComponentTypeCodes];
//# sourceMappingURL=InvoicePriceComponentTypeCodes.d.ts.map