import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample funds reservation type codes.
 */
export declare const FundsreserveCodings: {
    /**
     * none: The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    readonly None: Coding;
    /**
     * patient: The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    readonly Patient: Coding;
    /**
     * provider: The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    readonly Provider: Coding;
};
/**
 * This value set includes sample funds reservation type codes.
 */
export declare type FundsreserveCodingType = typeof FundsreserveCodings;
//# sourceMappingURL=FundsreserveCodings.d.ts.map