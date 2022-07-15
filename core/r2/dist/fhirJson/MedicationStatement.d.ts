import * as fhir from '../fhirJson.js';
/**
 * Indicates how the medication is/was used by the patient.
 */
export interface MedicationStatementDosage extends fhir.BackboneElement {
    /**
     * Free text dosage information as reported about a patient's medication use. When coded dosage information is present, the free text may still be present for display to humans.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.dosage.text
     */
    _text?: fhir.FhirElement;
    /**
     * The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.Timing | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeededBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.dosage.asNeeded[x]
     */
    _asNeededBoolean?: fhir.FhirElement;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeededCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
    siteCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
    siteReference?: fhir.Reference | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    quantityQuantity?: fhir.Quantity | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    quantityRange?: fhir.Range | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRatio?: fhir.Ratio | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRange?: fhir.Range | undefined;
    /**
     * The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.
     */
    maxDosePerPeriod?: fhir.Ratio | undefined;
}
/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains   The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export interface MedicationStatement extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationStatement" | null;
    /**
     * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The person or animal who is/was taking the medication.
     */
    patient: fhir.Reference | null;
    /**
     * The person who provided the information about the taking of this medication.
     */
    informationSource?: fhir.Reference | undefined;
    /**
     * The date when the medication statement was asserted by the information source.
     */
    dateAsserted?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.dateAsserted
     */
    _dateAsserted?: fhir.FhirElement;
    /**
     * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
     */
    status: 'active' | 'completed' | 'entered-in-error' | 'intended' | null;
    /**
     * Extended properties for primitive element: MedicationStatement.status
     */
    _status?: fhir.FhirElement;
    /**
     * Set this to true if the record is saying that the medication was NOT taken.
     */
    wasNotTaken?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.wasNotTaken
     */
    _wasNotTaken?: fhir.FhirElement;
    /**
     * A code indicating why the medication was not taken.
     */
    reasonNotTaken?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A reason for why the medication is being/was taken.
     */
    reasonForUseCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A reason for why the medication is being/was taken.
     */
    reasonForUseReference?: fhir.Reference | undefined;
    /**
     * The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement;
    /**
     * The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.note
     */
    _note?: fhir.FhirElement;
    /**
     * Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.
     */
    supportingInformation?: (fhir.Reference | null)[] | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Indicates how the medication is/was used by the patient.
     */
    dosage?: (fhir.MedicationStatementDosage | null)[] | undefined;
}
//# sourceMappingURL=MedicationStatement.d.ts.map