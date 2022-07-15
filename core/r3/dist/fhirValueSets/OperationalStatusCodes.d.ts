/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export declare const OperationalStatusCodes: {
    /**
     * entered-in-error: The device was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * hw-discon: The device hardware is disconnected.
     */
    readonly HardwareDisconnectd: "hw-discon";
    /**
     * not-ready: The device is not ready.
     */
    readonly NotReady: "not-ready";
    /**
     * off: The device is off.
     */
    readonly Off: "off";
    /**
     * on: The device is fully operational.
     */
    readonly On: "on";
    /**
     * standby: The device is ready but not actively operating.
     */
    readonly Standby: "standby";
    /**
     * transduc-discon: The device transducer is diconnected.
     */
    readonly TransducerDiconnected: "transduc-discon";
};
/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export declare type OperationalStatusCodeType = typeof OperationalStatusCodes[keyof typeof OperationalStatusCodes];
//# sourceMappingURL=OperationalStatusCodes.d.ts.map