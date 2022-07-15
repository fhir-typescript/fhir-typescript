import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes indicating the kind of the price component.
 */
export declare type InvoicePriceComponentTypeCodingType = {
    /**
     * base: the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.
     */
    BasePrice: CodingArgs;
    /**
     * deduction: the amount is a deduction applied on the base price.
     */
    Deduction: CodingArgs;
    /**
     * discount: the amount is a discount applied on the base price.
     */
    Discount: CodingArgs;
    /**
     * informational: the amount is of informational character, it has not been applied in the calculation of the total price.
     */
    Informational: CodingArgs;
    /**
     * surcharge: the amount is a surcharge applied on the base price.
     */
    Surcharge: CodingArgs;
    /**
     * tax: the amount is the tax component of the total price.
     */
    Tax: CodingArgs;
};
/**
 * Codes indicating the kind of the price component.
 */
export declare const InvoicePriceComponentTypeCodings: InvoicePriceComponentTypeCodingType;
//# sourceMappingURL=InvoicePriceComponentTypeCodings.d.ts.map