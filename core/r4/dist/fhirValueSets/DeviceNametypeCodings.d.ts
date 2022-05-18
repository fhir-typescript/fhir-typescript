import { Coding } from '../fhir/Coding.js';
/**
 * The type of name the device is referred by.
 */
export declare const DeviceNametypeCodings: {
    /**
     * manufacturer-name: Manufacturer name.
     */
    readonly ManufacturerName: Coding;
    /**
     * model-name: Model name.
     */
    readonly ModelName: Coding;
    /**
     * other: other.
     */
    readonly Other: Coding;
    /**
     * patient-reported-name: Patient Reported name.
     */
    readonly PatientReportedName: Coding;
    /**
     * udi-label-name: UDI Label name.
     */
    readonly UDILabelName: Coding;
    /**
     * user-friendly-name: User Friendly name.
     */
    readonly UserFriendlyName: Coding;
};
/**
 * The type of name the device is referred by.
 */
export declare type DeviceNametypeCodingType = typeof DeviceNametypeCodings;
//# sourceMappingURL=DeviceNametypeCodings.d.ts.map