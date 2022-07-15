import { CodingArgs } from '../fhir/Coding.js';
/**
 * Status of the supply request
 */
export declare type SupplyrequestStatusCodingType = {
    /**
     * cancelled: The orderer of the supply cancelled the request.
     */
    Cancelled: CodingArgs;
    /**
     * completed: Supply has been received by the requestor.
     */
    Received: CodingArgs;
    /**
     * failed: The supply will not be completed because the supplier was unable or unwilling to supply the item.
     */
    Failed: CodingArgs;
    /**
     * requested: Supply has been requested, but not dispensed.
     */
    Requested: CodingArgs;
};
/**
 * Status of the supply request
 */
export declare const SupplyrequestStatusCodings: SupplyrequestStatusCodingType;
//# sourceMappingURL=SupplyrequestStatusCodings.d.ts.map