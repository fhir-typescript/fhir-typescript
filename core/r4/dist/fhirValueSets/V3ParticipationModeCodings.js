/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
var V3ParticipationModeCodings = {
    /**
     * DICTATE: Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    Dictated: new Coding({
        display: "dictated",
        code: "DICTATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * ELECTRONIC: Participation by non-human-languaged based electronic signal
     */
    ElectronicData: new Coding({
        display: "electronic data",
        code: "ELECTRONIC",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * EMAILWRIT: Participation by text or diagrams transmitted over an electronic mail system.
     */
    Email: new Coding({
        display: "email",
        code: "EMAILWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * FACE: Participation by voice communication where parties speak to each other directly.
     */
    FaceToFace: new Coding({
        display: "face-to-face",
        code: "FACE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * FAXWRIT: Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    Telefax: new Coding({
        display: "telefax",
        code: "FAXWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * HANDWRIT: Participation by text or diagrams printed on paper or other recording medium
     */
    Handwritten: new Coding({
        display: "handwritten",
        code: "HANDWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * MAILWRIT: Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    Mail: new Coding({
        display: "mail",
        code: "MAILWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * ONLINEWRIT: Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    OnlineWritten: new Coding({
        display: "online written",
        code: "ONLINEWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * PHONE: Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    Telephone: new Coding({
        display: "telephone",
        code: "PHONE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * PHYSICAL: Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    PhysicalPresence: new Coding({
        display: "physical presence",
        code: "PHYSICAL",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * REMOTE: Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    RemotePresence: new Coding({
        display: "remote presence",
        code: "REMOTE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * TYPEWRIT: Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    Typewritten: new Coding({
        display: "typewritten",
        code: "TYPEWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * VERBAL: Participation by voice communication
     */
    Verbal: new Coding({
        display: "verbal",
        code: "VERBAL",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * VIDEOCONF: Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    Videoconferencing: new Coding({
        display: "videoconferencing",
        code: "VIDEOCONF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * WRITTEN: Participation by human language recorded on a physical material
     */
    Written: new Coding({
        display: "written",
        code: "WRITTEN",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
};

export { V3ParticipationModeCodings };
//# sourceMappingURL=V3ParticipationModeCodings.js.map
