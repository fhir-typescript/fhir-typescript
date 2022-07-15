import * as fhir from '../fhirJson.js';
/**
 * Indicates how the medication is to be used by the patient.
 */
export interface MedicationDispenseDosageInstruction extends fhir.BackboneElement {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.dosageInstruction.text
     */
    _text?: fhir.FhirElement;
    /**
     * Additional instructions such as "Swallow with plenty of water" which may or may not be coded.
     */
    additionalInstructions?: fhir.CodeableConcept | undefined;
    /**
     * The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions.  For example, "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.Timing | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeededBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.dosageInstruction.asNeeded[x]
     */
    _asNeededBoolean?: fhir.FhirElement;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
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
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.
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
     * The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time,  e.g. 1000mg in 24 hours.
     */
    maxDosePerPeriod?: fhir.Ratio | undefined;
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.
 */
export interface MedicationDispenseSubstitution extends fhir.BackboneElement {
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.
     */
    reason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: (fhir.Reference | null)[] | undefined;
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export interface MedicationDispense extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationDispense" | null;
    /**
     * Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * A code specifying the state of the set of dispense events.
     */
    status?: 'completed' | 'entered-in-error' | 'in-progress' | 'on-hold' | 'stopped' | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.status
     */
    _status?: fhir.FhirElement;
    /**
     * A link to a resource representing the person to whom the medication will be given.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The individual responsible for dispensing the medication.
     */
    dispenser?: fhir.Reference | undefined;
    /**
     * Indicates the medication order that is being dispensed against.
     */
    authorizingPrescription?: (fhir.Reference | null)[] | undefined;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: fhir.Quantity | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenPrepared
     */
    _whenPrepared?: fhir.FhirElement;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenHandedOver
     */
    _whenHandedOver?: fhir.FhirElement;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: (fhir.Reference | null)[] | undefined;
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.note
     */
    _note?: fhir.FhirElement;
    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: (fhir.MedicationDispenseDosageInstruction | null)[] | undefined;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.
     */
    substitution?: fhir.MedicationDispenseSubstitution | undefined;
}
//# sourceMappingURL=MedicationDispense.d.ts.map