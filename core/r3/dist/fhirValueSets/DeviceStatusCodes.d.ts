/**
 * The availability status of the device.
 */
export declare const DeviceStatusCodes: {
    /**
     * active: The Device is available for use.  Note: This means for *implanted devices*  the device is implanted in the patient.
     */
    readonly Active: "active";
    /**
     * entered-in-error: The Device was entered in error and voided.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The Device is no longer available for use (e.g. lost, expired, damaged).  Note: This means for *implanted devices*  the device has been removed from the patient.
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