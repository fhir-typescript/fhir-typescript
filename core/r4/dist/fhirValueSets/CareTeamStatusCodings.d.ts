import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the status of the care team.
 */
export declare type CareTeamStatusCodingType = {
    /**
     * active: The care team is currently participating in the coordination and delivery of care.
     */
    Active: CodingArgs;
    /**
     * entered-in-error: The care team should have never existed.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    Inactive: CodingArgs;
    /**
     * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    Proposed: CodingArgs;
    /**
     * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    Suspended: CodingArgs;
};
/**
 * Indicates the status of the care team.
 */
export declare const CareTeamStatusCodings: CareTeamStatusCodingType;
//# sourceMappingURL=CareTeamStatusCodings.d.ts.map