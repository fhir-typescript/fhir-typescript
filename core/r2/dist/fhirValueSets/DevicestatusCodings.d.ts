import { CodingArgs } from '../fhir/Coding.js';
/**
 * The availability status of the device.
 */
export declare type DevicestatusCodingType = {
    /**
     * available: The Device is available for use.
     */
    Available: CodingArgs;
    /**
     * entered-in-error: The Device was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * not-available: The Device is no longer available for use (e.g. lost, expired, damaged).
     */
    NotAvailable: CodingArgs;
};
/**
 * The availability status of the device.
 */
export declare const DevicestatusCodings: DevicestatusCodingType;
//# sourceMappingURL=DevicestatusCodings.d.ts.map