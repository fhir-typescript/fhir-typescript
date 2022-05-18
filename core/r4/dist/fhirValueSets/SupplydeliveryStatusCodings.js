/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Status of the supply delivery.
 */
var SupplydeliveryStatusCodings = {
    /**
     * abandoned: Delivery was not completed.
     */
    Abandoned: new Coding({
        display: "Abandoned",
        code: "abandoned",
        system: "http://hl7.org/fhir/supplydelivery-status",
    }),
    /**
     * completed: Supply has been delivered ("completed").
     */
    Delivered: new Coding({
        display: "Delivered",
        code: "completed",
        system: "http://hl7.org/fhir/supplydelivery-status",
    }),
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    EnteredInError: new Coding({
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/supplydelivery-status",
    }),
    /**
     * in-progress: Supply has been requested, but not delivered.
     */
    InProgress: new Coding({
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/supplydelivery-status",
    }),
};

export { SupplydeliveryStatusCodings };
//# sourceMappingURL=SupplydeliveryStatusCodings.js.map