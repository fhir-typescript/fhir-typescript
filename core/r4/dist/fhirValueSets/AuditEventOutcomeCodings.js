/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Indicates whether the event succeeded or failed.
 */
var AuditEventOutcomeCodings = {
    /**
     * 0: The operation completed successfully (whether with warnings or not).
     */
    Success: new Coding({
        display: "Success",
        code: "0",
        system: "http://hl7.org/fhir/audit-event-outcome",
    }),
    /**
     * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    MajorFailure: new Coding({
        display: "Major failure",
        code: "12",
        system: "http://hl7.org/fhir/audit-event-outcome",
    }),
    /**
     * 4: The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    MinorFailure: new Coding({
        display: "Minor failure",
        code: "4",
        system: "http://hl7.org/fhir/audit-event-outcome",
    }),
    /**
     * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    SeriousFailure: new Coding({
        display: "Serious failure",
        code: "8",
        system: "http://hl7.org/fhir/audit-event-outcome",
    }),
};

export { AuditEventOutcomeCodings };
//# sourceMappingURL=AuditEventOutcomeCodings.js.map
