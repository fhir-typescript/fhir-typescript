/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * A coded concept indicating the current status of the Device Usage.
 */
var DeviceStatementStatusCodings = {
    /**
     * active: The device is still being used.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/device-statement-status",
    }),
    /**
     * completed: The device is no longer being used.
     */
    Completed: new Coding({
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/device-statement-status",
    }),
    /**
     * entered-in-error: The statement was recorded incorrectly.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/device-statement-status",
    }),
    /**
     * intended: The device may be used at some time in the future.
     */
    Intended: new Coding({
        display: "Intended",
        code: "intended",
        system: "http://hl7.org/fhir/device-statement-status",
    }),
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: new Coding({
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/device-statement-status",
    }),
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    Stopped: new Coding({
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/device-statement-status",
    }),
};

export { DeviceStatementStatusCodings };
//# sourceMappingURL=DeviceStatementStatusCodings.js.map
