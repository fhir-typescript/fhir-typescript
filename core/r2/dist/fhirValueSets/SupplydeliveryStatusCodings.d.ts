import { CodingArgs } from '../fhir/Coding.js';
/**
 * Status of the supply delivery.
 */
export declare type SupplydeliveryStatusCodingType = {
    /**
     * abandoned: Dispensing was not completed.
     */
    Abandoned: CodingArgs;
    /**
     * completed: Supply has been delivered ("completed").
     */
    Delivered: CodingArgs;
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