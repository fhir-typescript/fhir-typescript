/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export declare const V3ActEncounterCodes: {
    /**
     * Code: ACUTE
     */
    readonly InpatientAcute: "ACUTE";
    /**
     * Code: AMB
     */
    readonly Ambulatory: "AMB";
    /**
     * Code: EMER
     */
    readonly Emergency: "EMER";
    /**
     * Code: FLD
     */
    readonly Field: "FLD";
    /**
     * Code: HH
     */
    readonly HomeHealth: "HH";
    /**
     * Code: IMP
     */
    readonly InpatientEncounter: "IMP";
    /**
     * Code: NONAC
     */
    readonly InpatientNonAcute: "NONAC";
    /**
     * Code: OBSENC
     */
    readonly ObservationEncounter: "OBSENC";
    /**
     * Code: PRENC
     */
    readonly PreAdmission: "PRENC";
    /**
     * Code: SS
     */
    readonly ShortStay: "SS";
    /**
     * Code: VR
     */
    readonly Virtual: "VR";
};
/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export declare type V3ActEncounterCodeType = typeof V3ActEncounterCodes[keyof typeof V3ActEncounterCodes];
//# sourceMappingURL=V3ActEncounterCodes.d.ts.map