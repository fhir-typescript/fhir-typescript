import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample funds reservation type codes.
 */
export declare type FundsreserveCodingType = {
    /**
     * none: The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    None: CodingArgs;
    /**
     * patient: The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    Patient: CodingArgs;
    /**
     * provider: The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    Provider: CodingArgs;
};
/**
 * This value set includes sample funds reservation type codes.
 */
export declare const FundsreserveCodings: FundsreserveCodingType;
//# sourceMappingURL=FundsreserveCodings.d.ts.map