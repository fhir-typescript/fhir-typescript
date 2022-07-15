/**
 * The availability status of the device.
 */
export declare const DeviceStatusCodes: {
    /**
     * active: The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    readonly Active: "active";
    /**
     * entered-in-error: The device was entered in error and voided.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    readonly Inactive: "inactive";
    /**
     * unknown: The status of the device has not been determined.
     */
    readonly Unknown: "unknown";
};
/**
 * The availability status of the device.
 */
export declare type DeviceStatusCodeType = typeof DeviceStatusCodes[keyof typeof DeviceStatusCodes];
//# sourceMappingURL=DeviceStatusCodes.d.ts.map