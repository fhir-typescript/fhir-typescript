/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The type of participant for the action.
 */
var ActionParticipantTypeCodings = {
    /**
     * device: The participant is a system or device used in the care of the patient.
     */
    Device: new Coding({
        display: "Device",
        code: "device",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
    /**
     * patient: The participant is the patient under evaluation.
     */
    Patient: new Coding({
        display: "Patient",
        code: "patient",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
    /**
     * practitioner: The participant is a practitioner involved in the patient's care.
     */
    Practitioner: new Coding({
        display: "Practitioner",
        code: "practitioner",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
    /**
     * related-person: The participant is a person related to the patient.
     */
    RelatedPerson: new Coding({
        display: "Related Person",
        code: "related-person",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
};

export { ActionParticipantTypeCodings };
//# sourceMappingURL=ActionParticipantTypeCodings.js.map
