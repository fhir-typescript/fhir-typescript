import { Coding } from '../fhir/Coding.js';
/**
 * Status of the supply delivery.
 */
export declare const SupplydeliveryStatusCodings: {
    /**
     * abandoned: Delivery was not completed.
     */
    readonly Abandoned: Coding;
    /**
     * completed: Supply has been delivered ("completed").
     */
    readonly Delivered: Coding;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: Supply has been requested, but not delivered.
     */
    readonly InProgress: Coding;
};
/**
 * Status of the supply delivery.
 */
export declare type SupplydeliveryStatusCodingType = typeof SupplydeliveryStatusCodings;
//# sourceMappingURL=SupplydeliveryStatusCodings.d.ts.map