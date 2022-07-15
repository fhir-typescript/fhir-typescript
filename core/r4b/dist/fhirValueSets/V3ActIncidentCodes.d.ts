/**
 * Set of codes indicating the type of incident or accident.
 */
export declare const V3ActIncidentCodes: {
    /**
     * Code: _ActPatientSafetyIncidentCode
     */
    readonly ActPatientSafetyIncidentCode: "_ActPatientSafetyIncidentCode";
    /**
     * Code: MVA
     */
    readonly MotorVehicleAccident: "MVA";
    /**
     * Code: SCHOOL
     */
    readonly SchoolAccident: "SCHOOL";
    /**
     * Code: SPT
     */
    readonly SportingAccident: "SPT";
    /**
     * Code: WPA
     */
    readonly WorkplaceAccident: "WPA";
};
/**
 * Set of codes indicating the type of incident or accident.
 */
export declare type V3ActIncidentCodeType = typeof V3ActIncidentCodes[keyof typeof V3ActIncidentCodes];
//# sourceMappingURL=V3ActIncidentCodes.d.ts.map