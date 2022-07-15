import { CodingArgs } from '../fhir/Coding.js';
/**
 * The availability status of the device.
 */
export declare type DeviceStatusCodingType = {
    /**
     * active: The Device is available for use.  Note: This means for *implanted devices*  the device is implanted in the patient.
     */
    Active: CodingArgs;
    /**
     * entered-in-error: The Device was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The Device is no longer available for use (e.g. lost, expired, damaged).  Note: This means for *implanted devices*  the device has been removed from the patient.
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