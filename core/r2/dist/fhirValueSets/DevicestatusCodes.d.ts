/**
 * The availability status of the device.
 */
export declare const DevicestatusCodes: {
    /**
     * available: The Device is available for use.
     */
    readonly Available: "available";
    /**
     * entered-in-error: The Device was entered in error and voided.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * not-available: The Device is no longer available for use (e.g. lost, expired, damaged).
     */
    readonly NotAvailable: "not-available";
};
/**
 * The availability status of the device.
 */
export declare type DevicestatusCodeType = typeof DevicestatusCodes[keyof typeof DevicestatusCodes];
//# sourceMappingURL=DevicestatusCodes.d.ts.map