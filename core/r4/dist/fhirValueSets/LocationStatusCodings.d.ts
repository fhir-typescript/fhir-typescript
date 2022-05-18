import { Coding } from '../fhir/Coding.js';
/**
 * Indicates whether the location is still in use.
 */
export declare const LocationStatusCodings: {
    /**
     * active: The location is operational.
     */
    readonly Active: Coding;
    /**
     * inactive: The location is no longer used.
     */
    readonly Inactive: Coding;
    /**
     * suspended: The location is temporarily closed.
     */
    readonly Suspended: Coding;
};
/**
 * Indicates whether the location is still in use.
 */
export declare type LocationStatusCodingType = typeof LocationStatusCodings;
//# sourceMappingURL=LocationStatusCodings.d.ts.map