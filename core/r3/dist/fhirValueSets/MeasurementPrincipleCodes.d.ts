/**
 * Different measurement principle supported by the device.
 */
export declare const MeasurementPrincipleCodes: {
    /**
     * acoustical: Measurement is done using the acoustical principle.
     */
    readonly MSPAcoustical: "acoustical";
    /**
     * biological: Measurement is done using the biological principle.
     */
    readonly MSPBiological: "biological";
    /**
     * chemical: Measurement is done using the chemical principle.
     */
    readonly MSPChemical: "chemical";
    /**
     * electrical: Measurement is done using the electrical principle.
     */
    readonly MSPElectrical: "electrical";
    /**
     * impedance: Measurement is done using the impedance principle.
     */
    readonly MSPImpedance: "impedance";
    /**
     * manual: Measurement is done using the manual principle.
     */
    readonly MSPManual: "manual";
    /**
     * mechanical: Measurement is done using the mechanical principle.
     */
    readonly MSPMechanical: "mechanical";
    /**
     * nuclear: Measurement is done using the nuclear principle.
     */
    readonly MSPNuclear: "nuclear";
    /**
     * optical: Measurement is done using the optical principle.
     */
    readonly MSPOptical: "optical";
    /**
     * other: Measurement principle isn't in the list.
     */
    readonly MSPOther: "other";
    /**
     * thermal: Measurement is done using the thermal principle.
     */
    readonly MSPThermal: "thermal";
};
/**
 * Different measurement principle supported by the device.
 */
export declare type MeasurementPrincipleCodeType = typeof MeasurementPrincipleCodes[keyof typeof MeasurementPrincipleCodes];
//# sourceMappingURL=MeasurementPrincipleCodes.d.ts.map