/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare const V3ActIncidentCodes: {
    /**
     * MVA: Incident or accident as the result of a motor vehicle accident
     */
    readonly MotorVehicleAccident: "MVA";
    /**
     * SCHOOL: Incident or accident is the result of a school place accident.
     */
    readonly SchoolAccident: "SCHOOL";
    /**
     * SPT: Incident or accident is the result of a sporting accident.
     */
    readonly SportingAccident: "SPT";
    /**
     * WPA: Incident or accident is the result of a work place accident
     */
    readonly WorkplaceAccident: "WPA";
};
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare type V3ActIncidentCodeType = typeof V3ActIncidentCodes[keyof typeof V3ActIncidentCodes];
//# sourceMappingURL=V3ActIncidentCodes.d.ts.map