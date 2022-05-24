import { CodingArgs } from '../fhir/Coding.js';
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export declare type V3ParticipationModeCodingType = {
    /**
     * DICTATE: Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    Dictated: CodingArgs;
    /**
     * ELECTRONIC: Participation by non-human-languaged based electronic signal
     */
    ElectronicData: CodingArgs;
    /**
     * EMAILWRIT: Participation by text or diagrams transmitted over an electronic mail system.
     */
    Email: CodingArgs;
    /**
     * FACE: Participation by voice communication where parties speak to each other directly.
     */
    FaceToFace: CodingArgs;
    /**
     * FAXWRIT: Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    Telefax: CodingArgs;
    /**
     * HANDWRIT: Participation by text or diagrams printed on paper or other recording medium
     */
    Handwritten: CodingArgs;
    /**
     * MAILWRIT: Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    Mail: CodingArgs;
    /**
     * ONLINEWRIT: Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    OnlineWritten: CodingArgs;
    /**
     * PHONE: Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    Telephone: CodingArgs;
    /**
     * PHYSICAL: Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    PhysicalPresence: CodingArgs;
    /**
     * REMOTE: Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    RemotePresence: CodingArgs;
    /**
     * TYPEWRIT: Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    Typewritten: CodingArgs;
    /**
     * VERBAL: Participation by voice communication
     */
    Verbal: CodingArgs;
    /**
     * VIDEOCONF: Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    Videoconferencing: CodingArgs;
    /**
     * WRITTEN: Participation by human language recorded on a physical material
     */
    Written: CodingArgs;
};
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export declare const V3ParticipationModeCodings: V3ParticipationModeCodingType;
//# sourceMappingURL=V3ParticipationModeCodings.d.ts.map