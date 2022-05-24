import { CodingArgs } from '../fhir/Coding.js';
/**
 * The availability status of the device.
 */
export declare type DeviceStatusCodingType = {
    /**
     * active: The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    Active: CodingArgs;
    /**
     * entered-in-error: The device was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    Inactive: CodingArgs;
    /**
     * unknown: The status of the device has not been determined.
     */
    Unknown: CodingArgs;
};
/**
 * The availability status of the device.
 */
export declare const DeviceStatusCodings: DeviceStatusCodingType;
//# sourceMappingURL=DeviceStatusCodings.d.ts.map