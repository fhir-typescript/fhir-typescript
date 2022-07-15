import * as fhir from '../fhir.js';
import { MedicationOrderStatusCodeType } from '../fhirValueSets/MedicationOrderStatusCodes.js';
/**
 * Valid arguments for the MedicationOrderDosageInstruction type.
 */
export interface MedicationOrderDosageInstructionArgs extends fhir.BackboneElementArgs {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dosageInstruction.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Additional instructions such as "Swallow with plenty of water" which may or may not be coded.
     */
    additionalInstructions?: fhir.CodeableConceptArgs | undefined;
    /**
     * The timing schedule for giving the medication to the patient. The Schedule data type allows many different expressions. For example: "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.TimingArgs | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
     */
    asNeeded?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
     */
    asNeededBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
     */
    asNeededCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded specification of the anatomic site where the medication first enters the body.
     */
    site?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * A coded specification of the anatomic site where the medication first enters the body.
     */
    siteCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded specification of the anatomic site where the medication first enters the body.
     */
    siteReference?: fhir.ReferenceArgs | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient's body.
     */
    route?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  For examples, Slow Push; Deep IV.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    dose?: fhir.Range | fhir.Quantity | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    doseRange?: fhir.RangeArgs | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    doseQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rate?: fhir.Ratio | fhir.Range | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRatio?: fhir.RatioArgs | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRange?: fhir.RangeArgs | undefined;
    /**
     * The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.
     */
    maxDosePerPeriod?: fhir.RatioArgs | undefined;
}
/**
 * Indicates how the medication is to be used by the patient.
 */
export declare class MedicationOrderDosageInstruction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.
     */
    text?: fhir.FhirString | undefined;
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
    asNeeded?: (fhir.FhirBoolean | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.dosageInstruction.asNeeded[x]
     */
    protected static readonly _fts_asNeededIsChoice: true;
    /**
     * A coded specification of the anatomic site where the medication first enters the body.
     */
    site?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.dosageInstruction.site[x]
     */
    protected static readonly _fts_siteIsChoice: true;
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
    dose?: (fhir.Range | fhir.Quantity) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.dosageInstruction.dose[x]
     */
    protected static readonly _fts_doseIsChoice: true;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rate?: (fhir.Ratio | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.dosageInstruction.rate[x]
     */
    protected static readonly _fts_rateIsChoice: true;
    /**
     * The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.
     */
    maxDosePerPeriod?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationOrderDosageInstruction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationOrderDosageInstructionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationOrderDispenseRequest type.
 */
export interface MedicationOrderDispenseRequestArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the Prescription becomes valid, and when it ceases to be a dispensable Prescription.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.
     */
    numberOfRepeatsAllowed?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dispenseRequest.numberOfRepeatsAllowed
     */
    _numberOfRepeatsAllowed?: fhir.FhirElementArgs;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
     */
    expectedSupplyDuration?: fhir.QuantityArgs | undefined;
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export declare class MedicationOrderDispenseRequest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.dispenseRequest.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * Indicates when the Prescription becomes valid, and when it ceases to be a dispensable Prescription.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.
     */
    numberOfRepeatsAllowed?: fhir.FhirPositiveInt | undefined;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
     */
    expectedSupplyDuration?: fhir.Quantity | undefined;
    /**
     * Default constructor for MedicationOrderDispenseRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationOrderDispenseRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationOrderSubstitution type.
 */
export interface MedicationOrderSubstitutionArgs extends fhir.BackboneElementArgs {
    /**
     * A code signifying whether a different drug should be dispensed from what was prescribed.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export declare class MedicationOrderSubstitution extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code signifying whether a different drug should be dispensed from what was prescribed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationOrderSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationOrderSubstitutionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationOrder type.
 */
export interface MedicationOrderArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationOrder" | undefined;
    /**
     * External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records have to be tracked through an entire system.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dateWritten
     */
    _dateWritten?: fhir.FhirElementArgs;
    /**
     * A code specifying the state of the order.  Generally this will be active or completed state.
     */
    status?: fhir.FhirCode<MedicationOrderStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The date (and perhaps time) when the prescription was stopped.
     */
    dateEnded?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.dateEnded
     */
    _dateEnded?: fhir.FhirElementArgs;
    /**
     * The reason why the prescription was stopped, if it was.
     */
    reasonEnded?: fhir.CodeableConceptArgs | undefined;
    /**
     * A link to a resource representing the person to whom the medication will be given.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhir.ReferenceArgs | undefined;
    /**
     * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicationOrder.note
     */
    _note?: fhir.FhirElementArgs;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: fhir.MedicationOrderDosageInstructionArgs[] | undefined;
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhir.MedicationOrderDispenseRequestArgs | undefined;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhir.MedicationOrderSubstitutionArgs | undefined;
    /**
     * A link to a resource representing an earlier order or prescription that this order supersedes.
     */
    priorPrescription?: fhir.ReferenceArgs | undefined;
}
/**
 * An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.
 */
export declare class MedicationOrder extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationOrder";
    /**
     * External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records have to be tracked through an entire system.
     */
    identifier: fhir.Identifier[];
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: fhir.FhirDateTime | undefined;
    /**
     * A code specifying the state of the order.  Generally this will be active or completed state.
     */
    status?: fhir.FhirCode<MedicationOrderStatusCodeType> | undefined;
    /**
     * The date (and perhaps time) when the prescription was stopped.
     */
    dateEnded?: fhir.FhirDateTime | undefined;
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
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: fhir.FhirString | undefined;
    /**
     * Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationOrder.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction: fhir.MedicationOrderDosageInstruction[];
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
    /**
     * Default constructor for MedicationOrder - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationOrderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicationOrder.d.ts.map