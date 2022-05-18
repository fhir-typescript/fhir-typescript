/**
 * The availability status reason of the device.
 */
export declare const DeviceStatusReasonCodes: {
    /**
     * hw-discon: The device hardware is disconnected.
     */
    readonly HardwareDisconnected: "hw-discon";
    /**
     * not-ready: The device is not ready.
     */
    readonly NotReady: "not-ready";
    /**
     * off: The device is off.
     */
    readonly Off: "off";
    /**
     * offline: The device is offline.
     */
    readonly Offline: "offline";
    /**
     * online: The device is off.
     */
    readonly Online: "online";
    /**
     * paused: The device is paused.
     */
    readonly Paused: "paused";
    /**
     * standby: The device is ready but not actively operating.
     */
    readonly Standby: "standby";
    /**
     * transduc-discon: The device transducer is disconnected.
     */
    readonly TransducerDisconnected: "transduc-discon";
};
/**
 * The availability status reason of the device.
 */
export declare type DeviceStatusReasonCodeType = typeof DeviceStatusReasonCodes[keyof typeof DeviceStatusReasonCodes];
//# sourceMappingURL=DeviceStatusReasonCodes.d.ts.map