import { CodingArgs } from '../fhir/Coding.js';
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare type V3ActIncidentCodingType = {
    /**
     * MVA: Incident or accident as the result of a motor vehicle accident
     */
    MotorVehicleAccident: CodingArgs;
    /**
     * SCHOOL: Incident or accident is the result of a school place accident.
     */
    SchoolAccident: CodingArgs;
    /**
     * SPT: Incident or accident is the result of a sporting accident.
     */
    SportingAccident: CodingArgs;
    /**
     * WPA: Incident or accident is the result of a work place accident
     */
    WorkplaceAccident: CodingArgs;
};
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare const V3ActIncidentCodings: V3ActIncidentCodingType;
//# sourceMappingURL=V3ActIncidentCodings.d.ts.map