/**
 * The type of name the device is referred by.
 */
export declare const DeviceNametypeCodes: {
    /**
     * manufacturer-name: Manufacturer name.
     */
    readonly ManufacturerName: "manufacturer-name";
    /**
     * model-name: Model name.
     */
    readonly ModelName: "model-name";
    /**
     * other: other.
     */
    readonly Other: "other";
    /**
     * patient-reported-name: Patient Reported name.
     */
    readonly PatientReportedName: "patient-reported-name";
    /**
     * udi-label-name: UDI Label name.
     */
    readonly UDILabelName: "udi-label-name";
    /**
     * user-friendly-name: User Friendly name.
     */
    readonly UserFriendlyName: "user-friendly-name";
};
/**
 * The type of name the device is referred by.
 */
export declare type DeviceNametypeCodeType = typeof DeviceNametypeCodes[keyof typeof DeviceNametypeCodes];
//# sourceMappingURL=DeviceNametypeCodes.d.ts.map