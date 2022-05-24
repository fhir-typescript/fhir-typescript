import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept indicating the current status of the Device Usage.
 */
export declare type DeviceStatementStatusCodingType = {
    /**
     * active: The device is still being used.
     */
    Active: CodingArgs;
    /**
     * completed: The device is no longer being used.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: The statement was recorded incorrectly.
     */
    EnteredInError: CodingArgs;
    /**
     * intended: The device may be used at some time in the future.
     */
    Intended: CodingArgs;
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    Stopped: CodingArgs;
};
/**
 * A coded concept indicating the current status of the Device Usage.
 */
export declare const DeviceStatementStatusCodings: DeviceStatementStatusCodingType;
//# sourceMappingURL=DeviceStatementStatusCodings.d.ts.map