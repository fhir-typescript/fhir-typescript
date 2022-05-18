/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * MedicationDispense Status Codes
 */
var MedicationdispenseStatusCodings = {
    /**
     * cancelled: The dispensed product was not and will never be picked up by the patient.
     */
    Cancelled: new Coding({
        display: "Cancelled",
        code: "cancelled",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * completed: The dispensed product has been picked up.
     */
    Completed: new Coding({
        display: "Completed",
        code: "completed",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * declined: The dispense was declined and not performed.
     */
    Declined: new Coding({
        display: "Declined",
        code: "declined",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * in-progress: The dispensed product is ready for pickup.
     */
    InProgress: new Coding({
        display: "In Progress",
        code: "in-progress",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    OnHold: new Coding({
        display: "On Hold",
        code: "on-hold",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    Preparation: new Coding({
        display: "Preparation",
        code: "preparation",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped: new Coding({
        display: "Stopped",
        code: "stopped",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
    /**
     * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    Unknown: new Coding({
        display: "Unknown",
        code: "unknown",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    }),
};

export { MedicationdispenseStatusCodings };
//# sourceMappingURL=MedicationdispenseStatusCodings.js.map