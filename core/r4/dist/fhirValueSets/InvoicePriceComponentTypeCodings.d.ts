import { Coding } from '../fhir/Coding.js';
/**
 * Codes indicating the kind of the price component.
 */
export declare const InvoicePriceComponentTypeCodings: {
    /**
     * base: the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.
     */
    readonly BasePrice: Coding;
    /**
     * deduction: the amount is a deduction applied on the base price.
     */
    readonly Deduction: Coding;
    /**
     * discount: the amount is a discount applied on the base price.
     */
    readonly Discount: Coding;
    /**
     * informational: the amount is of informational character, it has not been applied in the calculation of the total price.
     */
    readonly Informational: Coding;
    /**
     * surcharge: the amount is a surcharge applied on the base price.
     */
    readonly Surcharge: Coding;
    /**
     * tax: the amount is the tax component of the total price.
     */
    readonly Tax: Coding;
};
/**
 * Codes indicating the kind of the price component.
 */
export declare type InvoicePriceComponentTypeCodingType = typeof InvoicePriceComponentTypeCodings;
//# sourceMappingURL=InvoicePriceComponentTypeCodings.d.ts.map