/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participationstatus|4.0.1
/**
 * The Participation status of an appointment.
 */
var ParticipationstatusCodes = {
    /**
     * accepted: The participant has accepted the appointment.
     */
    Accepted: "accepted",
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    Declined: "declined",
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    NeedsAction: "needs-action",
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    Tentative: "tentative",
};

export { ParticipationstatusCodes };
//# sourceMappingURL=ParticipationstatusCodes.js.map