import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Payment Type codes.
 */
export declare type PaymentTypeCodingType = {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    Adjustment: CodingArgs;
    /**
     * advance: The amount is an advance against future claims.
     */
    Advance: CodingArgs;
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    Payment: CodingArgs;
};
/**
 * This value set includes sample Payment Type codes.
 */
export declare const PaymentTypeCodings: PaymentTypeCodingType;
//# sourceMappingURL=PaymentTypeCodings.d.ts.map