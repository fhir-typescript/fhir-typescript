import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export declare type OperationalStatusCodingType = {
    /**
     * entered-in-error: The device was entered in error.
     */
    EnteredInError: CodingArgs;
    /**
     * hw-discon: The device hardware is disconnected.
     */
    HardwareDisconnectd: CodingArgs;
    /**
     * not-ready: The device is not ready.
     */
    NotReady: CodingArgs;
    /**
     * off: The device is off.
     */
    Off: CodingArgs;
    /**
     * on: The device is fully operational.
     */
    On: CodingArgs;
    /**
     * standby: The device is ready but not actively operating.
     */
    Standby: CodingArgs;
    /**
     * transduc-discon: The device transducer is diconnected.
     */
    TransducerDiconnected: CodingArgs;
};
/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export declare const OperationalStatusCodings: OperationalStatusCodingType;
//# sourceMappingURL=OperationalStatusCodings.d.ts.map