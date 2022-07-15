import * as fhir from '../fhirJson.js';
/**
 * Indicates how the medication is to be used by the patient.
 */
export interface MedicationOrderDosageInstruction extends fhir.BackboneElement {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dosageInstruction.text
     */
    _text?: fhir.FhirElement;
    /**
     * Additional instructions such as "Swallow with plenty of water" which may or may not be coded.
     */
    additionalInstructions?: fhir.CodeableConcept | undefined;
    /**
     * The timing schedule for giving the medication to the patient. The Schedule data type allows many different expressions. For example: "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.Timing | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
     */
    asNeededBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dosageInstruction.asNeeded[x]
     */
    _asNeededBoolean?: fhir.FhirElement;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
     */
    asNeededCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A coded specification of the anatomic site where the medication first enters the body.
     */
    siteCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A coded specification of the anatomic site where the medication first enters the body.
     */
    siteReference?: fhir.Reference | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient's body.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  For examples, Slow Push; Deep IV.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    doseRange?: fhir.Range | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    doseQuantity?: fhir.Quantity | undefined;
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
 * Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export interface MedicationOrderDispenseRequest extends fhir.BackboneElement {
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Indicates when the Prescription becomes valid, and when it ceases to be a dispensable Prescription.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.
     */
    numberOfRepeatsAllowed?: number | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dispenseRequest.numberOfRepeatsAllowed
     */
    _numberOfRepeatsAllowed?: fhir.FhirElement;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
     */
    expectedSupplyDuration?: fhir.Quantity | undefined;
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export interface MedicationOrderSubstitution extends fhir.BackboneElement {
    /**
     * A code signifying whether a different drug should be dispensed from what was prescribed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConcept | undefined;
}
/**
 * An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.
 */
export interface MedicationOrder extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationOrder" | null;
    /**
     * External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records have to be tracked through an entire system.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dateWritten
     */
    _dateWritten?: fhir.FhirElement;
    /**
     * A code specifying the state of the order.  Generally this will be active or completed state.
     */
    status?: 'active' | 'completed' | 'draft' | 'entered-in-error' | 'on-hold' | 'stopped' | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.status
     */
    _status?: fhir.FhirElement;
    /**
     * The date (and perhaps time) when the prescription was stopped.
     */
    dateEnded?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dateEnded
     */
    _dateEnded?: fhir.FhirElement;
    /**
     * The reason why the prescription was stopped, if it was.
     */
    reasonEnded?: fhir.CodeableConcept | undefined;
    /**
     * A link to a resource representing the person to whom the medication will be given.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhir.Reference | undefined;
    /**
     * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.note
     */
    _note?: fhir.FhirElement;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: (fhir.MedicationOrderDosageInstruction | null)[] | undefined;
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhir.MedicationOrderDispenseRequest | undefined;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhir.MedicationOrderSubstitution | undefined;
    /**
     * A link to a resource representing an earlier order or prescription that this order supersedes.
     */
    priorPrescription?: fhir.Reference | undefined;
}
//# sourceMappingURL=MedicationOrder.d.ts.map