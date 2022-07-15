import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the location.
 */
export declare type EncounterLocationStatusCodingType = {
    /**
     * active: The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed
     */
    Active: CodingArgs;
    /**
     * completed: The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location
     */
    Completed: CodingArgs;
    /**
     * planned: The patient is planned to be moved to this location at some point in the future.
     */
    Planned: CodingArgs;
    /**
     * reserved: This location is held empty for this patient.
     */
    Reserved: CodingArgs;
};
/**
 * The status of the location.
 */
export declare const EncounterLocationStatusCodings: EncounterLocationStatusCodingType;
//# sourceMappingURL=EncounterLocationStatusCodings.d.ts.map