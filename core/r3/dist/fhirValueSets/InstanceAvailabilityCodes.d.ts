/**
 * Availability of the resource
 */
export declare const InstanceAvailabilityCodes: {
    /**
     * NEARLINE: Instances need to be retrieved from relatively slow media such as optical disk or tape
     */
    readonly Nearline: "NEARLINE";
    /**
     * OFFLINE: Instances need to be retrieved by manual intervention
     */
    readonly Offline: "OFFLINE";
    /**
     * ONLINE: Instances are immediately available
     */
    readonly Online: "ONLINE";
    /**
     * UNAVAILABLE: Instances cannot be retrieved
     */
    readonly Unavailable: "UNAVAILABLE";
};
/**
 * Availability of the resource
 */
export declare type InstanceAvailabilityCodeType = typeof InstanceAvailabilityCodes[keyof typeof InstanceAvailabilityCodes];
//# sourceMappingURL=InstanceAvailabilityCodes.d.ts.map