import { Coding } from '../fhir/Coding.js';
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare const V3ActIncidentCodeCodings: {
    /**
     * MVA: Incident or accident as the result of a motor vehicle accident
     */
    readonly MotorVehicleAccident: Coding;
    /**
     * SCHOOL: Incident or accident is the result of a school place accident.
     */
    readonly SchoolAccident: Coding;
    /**
     * SPT: Incident or accident is the result of a sporting accident.
     */
    readonly SportingAccident: Coding;
    /**
     * WPA: Incident or accident is the result of a work place accident
     */
    readonly WorkplaceAccident: Coding;
};
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare type V3ActIncidentCodeCodingType = typeof V3ActIncidentCodeCodings;
//# sourceMappingURL=V3ActIncidentCodeCodings.d.ts.map