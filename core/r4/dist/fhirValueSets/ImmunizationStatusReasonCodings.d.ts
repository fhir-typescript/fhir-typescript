import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export declare type ImmunizationStatusReasonCodingType = {
    /**
     * Code: 171257003
     */
    NoConsentTetanusLowDoseDiphtheriaVaccine: CodingArgs;
    /**
     * Code: 171265000
     */
    PertussisVaccineRefused: CodingArgs;
    /**
     * Code: 171266004
     */
    NoConsentDiphtheriaImmunization: CodingArgs;
    /**
     * Code: 171267008
     */
    NoConsentTetanusImmunization: CodingArgs;
    /**
     * Code: 171268003
     */
    PolioImmunizationRefused: CodingArgs;
    /**
     * Code: 171269006
     */
    NoConsentMeaslesImmunization: CodingArgs;
    /**
     * Code: 171270007
     */
    NoConsentRubellaImmunization: CodingArgs;
    /**
     * Code: 171271006
     */
    NoConsentBCG: CodingArgs;
    /**
     * Code: 171272004
     */
    NoConsentInfluenzaImmunization: CodingArgs;
    /**
     * Code: 171280006
     */
    NoConsentForMMR: CodingArgs;
    /**
     * Code: 171283008
     */
    NoConsentForAnyPrimaryImmunization: CodingArgs;
    /**
     * Code: 171285001
     */
    NoConsentPreSchoolVaccinations: CodingArgs;
    /**
     * Code: 171286000
     */
    NoConsentSchoolExitVaccinations: CodingArgs;
    /**
     * Code: 171291004
     */
    NoConsentHaemophilusInfluenzaeTypeBImmunization: CodingArgs;
    /**
     * Code: 171292006
     */
    NoConsentPneumococcalImmunization: CodingArgs;
    /**
     * Code: 171293001
     */
    NoConsentForMRMeaslesRubellaVaccine: CodingArgs;
    /**
     * Code: 268559007
     */
    NoConsentForAnyImmunization: CodingArgs;
    /**
     * Code: 310839003
     */
    NoConsentForMMR1: CodingArgs;
    /**
     * Code: 310840001
     */
    NoConsentForSecondMeaslesMumpsAndRubellaVaccine: CodingArgs;
    /**
     * Code: 314768003
     */
    NoConsentDiphtheriaTetanusPertussisImmunization: CodingArgs;
    /**
     * Code: 314769006
     */
    NoConsentTetanusPlusDiphtheriaImmunization: CodingArgs;
    /**
     * Code: 314936001
     */
    NoConsentForMeningitisCImmunization: CodingArgs;
    /**
     * Code: 407598009
     */
    NoConsentFor3rdHIBBooster: CodingArgs;
    /**
     * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
     */
    Immunity: CodingArgs;
    /**
     * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
     */
    MedicalPrecaution: CodingArgs;
    /**
     * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
     */
    ProductOutOfStock: CodingArgs;
    /**
     * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
     */
    PatientObjection: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export declare const ImmunizationStatusReasonCodings: ImmunizationStatusReasonCodingType;
//# sourceMappingURL=ImmunizationStatusReasonCodings.d.ts.map