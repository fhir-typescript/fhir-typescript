import { CodingArgs } from '../fhir/Coding.js';
/**
 * Status of the supply delivery.
 */
export declare type SupplydeliveryStatusCodingType = {
    /**
     * abandoned: Delivery was not completed.
     */
    Abandoned: CodingArgs;
    /**
     * completed: Supply has been delivered ("completed").
     */
    Delivered: CodingArgs;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: Supply has been requested, but not delivered.
     */
    InProgress: CodingArgs;
};
/**
 * Status of the supply delivery.
 */
export declare const SupplydeliveryStatusCodings: SupplydeliveryStatusCodingType;
//# sourceMappingURL=SupplydeliveryStatusCodings.d.ts.map