import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes representing the priority of the request.
 */
export declare type DeviceUseRequestPriorityCodingType = {
    /**
     * asap: The request should be acted on as soon as possible.
     */
    ASAP: CodingArgs;
    /**
     * routine: The request has a normal priority.
     */
    Routine: CodingArgs;
    /**
     * stat: The request is time-critical.
     */
    Stat: CodingArgs;
    /**
     * urgent: The request should be done urgently.
     */
    Urgent: CodingArgs;
};
/**
 * Codes representing the priority of the request.
 */
export declare const DeviceUseRequestPriorityCodings: DeviceUseRequestPriorityCodingType;
//# sourceMappingURL=DeviceUseRequestPriorityCodings.d.ts.map