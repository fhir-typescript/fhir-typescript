/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The mode of a message capability statement.
 */
var EventCapabilityModeCodings = {
    /**
     * receiver: The application receives requests and sends responses.
     */
    Receiver: new Coding({
        display: "Receiver",
        code: "receiver",
        system: "http://hl7.org/fhir/event-capability-mode",
    }),
    /**
     * sender: The application sends requests and receives responses.
     */
    Sender: new Coding({
        display: "Sender",
        code: "sender",
        system: "http://hl7.org/fhir/event-capability-mode",
    }),
};

export { EventCapabilityModeCodings };
//# sourceMappingURL=EventCapabilityModeCodings.js.map