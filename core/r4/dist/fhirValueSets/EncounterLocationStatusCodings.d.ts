import { Coding } from '../fhir/Coding.js';
/**
 * The status of the location.
 */
export declare const EncounterLocationStatusCodings: {
    /**
     * active: The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed.
     */
    readonly Active: Coding;
    /**
     * completed: The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location.
     */
    readonly Completed: Coding;
    /**
     * planned: The patient is planned to be moved to this location at some point in the future.
     */
    readonly Planned: Coding;
    /**
     * reserved: This location is held empty for this patient.
     */
    readonly Reserved: Coding;
};
/**
 * The status of the location.
 */
export declare type EncounterLocationStatusCodingType = typeof EncounterLocationStatusCodings;
//# sourceMappingURL=EncounterLocationStatusCodings.d.ts.map