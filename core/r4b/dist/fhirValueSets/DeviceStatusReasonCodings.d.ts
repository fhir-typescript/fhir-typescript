import { CodingArgs } from '../fhir/Coding.js';
/**
 * The availability status reason of the device.
 */
export declare type DeviceStatusReasonCodingType = {
    /**
     * hw-discon: The device hardware is disconnected.
     */
    HardwareDisconnected: CodingArgs;
    /**
     * not-ready: The device is not ready.
     */
    NotReady: CodingArgs;
    /**
     * off: The device is off.
     */
    Off: CodingArgs;
    /**
     * offline: The device is offline.
     */
    Offline: CodingArgs;
    /**
     * online: The device is off.
     */
    Online: CodingArgs;
    /**
     * paused: The device is paused.
     */
    Paused: CodingArgs;
    /**
     * standby: The device is ready but not actively operating.
     */
    Standby: CodingArgs;
    /**
     * transduc-discon: The device transducer is disconnected.
     */
    TransducerDisconnected: CodingArgs;
};
/**
 * The availability status reason of the device.
 */
export declare const DeviceStatusReasonCodings: DeviceStatusReasonCodingType;
//# sourceMappingURL=DeviceStatusReasonCodings.d.ts.map