import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the endpoint
 */
export declare type EndpointStatusCodingType = {
    /**
     * active: This endpoint is expected to be active and can be used
     */
    Active: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * error: This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken
     */
    Error: CodingArgs;
    /**
     * off: This endpoint is no longer to be used
     */
    Off: CodingArgs;
    /**
     * suspended: This endpoint is temporarily unavailable
     */
    Suspended: CodingArgs;
    /**
     * test: This endpoint is not intended for production usage.
     */
    Test: CodingArgs;
};
/**
 * The status of the endpoint
 */
export declare const EndpointStatusCodings: EndpointStatusCodingType;
//# sourceMappingURL=EndpointStatusCodings.d.ts.map