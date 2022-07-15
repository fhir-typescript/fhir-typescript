import { CodingArgs } from '../fhir/Coding.js';
/**
 * Availability of the resource
 */
export declare type InstanceAvailabilityCodingType = {
    /**
     * NEARLINE: Instances need to be retrieved from relatively slow media such as optical disk or tape
     */
    Nearline: CodingArgs;
    /**
     * OFFLINE: Instances need to be retrieved by manual intervention
     */
    Offline: CodingArgs;
    /**
     * ONLINE: Instances are immediately available
     */
    Online: CodingArgs;
    /**
     * UNAVAILABLE: Instances cannot be retrieved
     */
    Unavailable: CodingArgs;
};
/**
 * Availability of the resource
 */
export declare const InstanceAvailabilityCodings: InstanceAvailabilityCodingType;
//# sourceMappingURL=InstanceAvailabilityCodings.d.ts.map