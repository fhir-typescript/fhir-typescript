import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of a product.
 */
export declare type NutritionproductStatusCodingType = {
    /**
     * active: The product can be used.
     */
    Active: CodingArgs;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The product is not expected or allowed to be used.
     */
    Inactive: CodingArgs;
};
/**
 * Codes identifying the lifecycle stage of a product.
 */
export declare const NutritionproductStatusCodings: NutritionproductStatusCodingType;
//# sourceMappingURL=NutritionproductStatusCodings.d.ts.map