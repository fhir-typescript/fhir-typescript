/**
 * A coded concept indicating the current status of a the Device Usage
 */
export declare const DeviceStatementStatusCodes: {
    /**
     * active: The device is still being used.
     */
    readonly Active: "active";
    /**
     * completed: The device is no longer being used.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: The statement was recorded incorrectly.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * intended: The device may be used at some time in the future.
     */
    readonly Intended: "intended";
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    readonly Stopped: "stopped";
};
/**
 * A coded concept indicating the current status of a the Device Usage
 */
export declare type DeviceStatementStatusCodeType = typeof DeviceStatementStatusCodes[keyof typeof DeviceStatementStatusCodes];
//# sourceMappingURL=DeviceStatementStatusCodes.d.ts.map