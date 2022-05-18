import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Payment Type codes.
 */
export declare const PaymentTypeCodings: {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    readonly Adjustment: Coding;
    /**
     * advance: The amount is an advance against future claims.
     */
    readonly Advance: Coding;
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    readonly Payment: Coding;
};
/**
 * This value set includes sample Payment Type codes.
 */
export declare type PaymentTypeCodingType = typeof PaymentTypeCodings;
//# sourceMappingURL=PaymentTypeCodings.d.ts.map