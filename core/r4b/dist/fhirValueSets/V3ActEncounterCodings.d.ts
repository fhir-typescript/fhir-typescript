import { CodingArgs } from '../fhir/Coding.js';
/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export declare type V3ActEncounterCodingType = {
    /**
     * Code: ACUTE
     */
    InpatientAcute: CodingArgs;
    /**
     * Code: AMB
     */
    Ambulatory: CodingArgs;
    /**
     * Code: EMER
     */
    Emergency: CodingArgs;
    /**
     * Code: FLD
     */
    Field: CodingArgs;
    /**
     * Code: HH
     */
    HomeHealth: CodingArgs;
    /**
     * Code: IMP
     */
    InpatientEncounter: CodingArgs;
    /**
     * Code: NONAC
     */
    InpatientNonAcute: CodingArgs;
    /**
     * Code: OBSENC
     */
    ObservationEncounter: CodingArgs;
    /**
     * Code: PRENC
     */
    PreAdmission: CodingArgs;
    /**
     * Code: SS
     */
    ShortStay: CodingArgs;
    /**
     * Code: VR
     */
    Virtual: CodingArgs;
};
/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export declare const V3ActEncounterCodings: V3ActEncounterCodingType;
//# sourceMappingURL=V3ActEncounterCodings.d.ts.map