import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Dosage type.
 */
export interface DosageArgs extends fhir.FhirElementArgs {
    /**
     * Indicates the order in which the dosage instructions should be applied or interpreted.
     */
    sequence?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Dosage.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * Free text dosage instructions e.g. SIG.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Dosage.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Supplemental instruction - e.g. "with meals".
     */
    additionalInstruction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Dosage.patientInstruction
     */
    _patientInstruction?: fhir.FhirElementArgs;
    /**
     * This attribute may not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
     */
    timing?: fhir.TimingArgs | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeeded?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeededBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeededCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConceptArgs | undefined;
    /**
     * How drug should enter body.
     */
    route?: fhir.CodeableConceptArgs | undefined;
    /**
     * Terminologies used often pre-coordinate this term with the route and or form of administration.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    dose?: fhir.Range | fhir.Quantity | undefined;
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    doseRange?: fhir.RangeArgs | undefined;
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    doseQuantity?: fhir.QuantityArgs | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
     */
    maxDosePerPeriod?: fhir.RatioArgs | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
     */
    maxDosePerAdministration?: fhir.QuantityArgs | undefined;
    /**
     * Upper limit on medication per lifetime of the patient.
     */
    maxDosePerLifetime?: fhir.QuantityArgs | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     */
    rate?: fhir.Ratio | fhir.Range | fhir.Quantity | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     */
    rateRatio?: fhir.RatioArgs | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     */
    rateRange?: fhir.RangeArgs | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     */
    rateQuantity?: fhir.QuantityArgs | undefined;
}
/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export declare class Dosage extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates the order in which the dosage instructions should be applied or interpreted.
     */
    sequence?: fhir.FhirInteger | undefined;
    /**
     * Free text dosage instructions e.g. SIG.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Supplemental instruction - e.g. "with meals".
     */
    additionalInstruction: fhir.CodeableConcept[];
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: fhir.FhirString | undefined;
    /**
     * This attribute may not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
     */
    timing?: fhir.Timing | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeeded?: (fhir.FhirBoolean | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Dosage.asNeeded[x]
     */
    protected static readonly _fts_asNeededIsChoice: true;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * How drug should enter body.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * Terminologies used often pre-coordinate this term with the route and or form of administration.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    dose?: (fhir.Range | fhir.Quantity) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Dosage.dose[x]
     */
    protected static readonly _fts_doseIsChoice: true;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
     */
    maxDosePerPeriod?: fhir.Ratio | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
     */
    maxDosePerAdministration?: fhir.Quantity | undefined;
    /**
     * Upper limit on medication per lifetime of the patient.
     */
    maxDosePerLifetime?: fhir.Quantity | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     */
    rate?: (fhir.Ratio | fhir.Range | fhir.Quantity) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Dosage.rate[x]
     */
    protected static readonly _fts_rateIsChoice: true;
    /**
     * Default constructor for Dosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DosageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Dosage.d.ts.map