import { Coding } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export declare const ImmunizationStatusReasonCodings: {
    /**
     * Code: 171257003
     */
    readonly NoConsentTetanusLowDoseDiphtheriaVaccine: Coding;
    /**
     * Code: 171265000
     */
    readonly PertussisVaccineRefused: Coding;
    /**
     * Code: 171266004
     */
    readonly NoConsentDiphtheriaImmunization: Coding;
    /**
     * Code: 171267008
     */
    readonly NoConsentTetanusImmunization: Coding;
    /**
     * Code: 171268003
     */
    readonly PolioImmunizationRefused: Coding;
    /**
     * Code: 171269006
     */
    readonly NoConsentMeaslesImmunization: Coding;
    /**
     * Code: 171270007
     */
    readonly NoConsentRubellaImmunization: Coding;
    /**
     * Code: 171271006
     */
    readonly NoConsentBCG: Coding;
    /**
     * Code: 171272004
     */
    readonly NoConsentInfluenzaImmunization: Coding;
    /**
     * Code: 171280006
     */
    readonly NoConsentForMMR: Coding;
    /**
     * Code: 171283008
     */
    readonly NoConsentForAnyPrimaryImmunization: Coding;
    /**
     * Code: 171285001
     */
    readonly NoConsentPreSchoolVaccinations: Coding;
    /**
     * Code: 171286000
     */
    readonly NoConsentSchoolExitVaccinations: Coding;
    /**
     * Code: 171291004
     */
    readonly NoConsentHaemophilusInfluenzaeTypeBImmunization: Coding;
    /**
     * Code: 171292006
     */
    readonly NoConsentPneumococcalImmunization: Coding;
    /**
     * Code: 171293001
     */
    readonly NoConsentForMRMeaslesRubellaVaccine: Coding;
    /**
     * Code: 268559007
     */
    readonly NoConsentForAnyImmunization: Coding;
    /**
     * Code: 310839003
     */
    readonly NoConsentForMMR1: Coding;
    /**
     * Code: 310840001
     */
    readonly NoConsentForSecondMeaslesMumpsAndRubellaVaccine: Coding;
    /**
     * Code: 314768003
     */
    readonly NoConsentDiphtheriaTetanusPertussisImmunization: Coding;
    /**
     * Code: 314769006
     */
    readonly NoConsentTetanusPlusDiphtheriaImmunization: Coding;
    /**
     * Code: 314936001
     */
    readonly NoConsentForMeningitisCImmunization: Coding;
    /**
     * Code: 407598009
     */
    readonly NoConsentFor3rdHIBBooster: Coding;
    /**
     * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
     */
    readonly Immunity: Coding;
    /**
     * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
     */
    readonly MedicalPrecaution: Coding;
    /**
     * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
     */
    readonly ProductOutOfStock: Coding;
    /**
     * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
     */
    readonly PatientObjection: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export declare type ImmunizationStatusReasonCodingType = typeof ImmunizationStatusReasonCodings;
//# sourceMappingURL=ImmunizationStatusReasonCodings.d.ts.map