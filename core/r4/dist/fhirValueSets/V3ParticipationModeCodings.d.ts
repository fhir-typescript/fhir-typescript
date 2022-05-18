import { Coding } from '../fhir/Coding.js';
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export declare const V3ParticipationModeCodings: {
    /**
     * DICTATE: Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    readonly Dictated: Coding;
    /**
     * ELECTRONIC: Participation by non-human-languaged based electronic signal
     */
    readonly ElectronicData: Coding;
    /**
     * EMAILWRIT: Participation by text or diagrams transmitted over an electronic mail system.
     */
    readonly Email: Coding;
    /**
     * FACE: Participation by voice communication where parties speak to each other directly.
     */
    readonly FaceToFace: Coding;
    /**
     * FAXWRIT: Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    readonly Telefax: Coding;
    /**
     * HANDWRIT: Participation by text or diagrams printed on paper or other recording medium
     */
    readonly Handwritten: Coding;
    /**
     * MAILWRIT: Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    readonly Mail: Coding;
    /**
     * ONLINEWRIT: Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    readonly OnlineWritten: Coding;
    /**
     * PHONE: Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    readonly Telephone: Coding;
    /**
     * PHYSICAL: Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    readonly PhysicalPresence: Coding;
    /**
     * REMOTE: Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    readonly RemotePresence: Coding;
    /**
     * TYPEWRIT: Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    readonly Typewritten: Coding;
    /**
     * VERBAL: Participation by voice communication
     */
    readonly Verbal: Coding;
    /**
     * VIDEOCONF: Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    readonly Videoconferencing: Coding;
    /**
     * WRITTEN: Participation by human language recorded on a physical material
     */
    readonly Written: Coding;
};
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export declare type V3ParticipationModeCodingType = typeof V3ParticipationModeCodings;
//# sourceMappingURL=V3ParticipationModeCodings.d.ts.map