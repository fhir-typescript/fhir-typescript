import * as fhir from '../fhir.js';
import { MedicationStatementStatusCodeType } from '../fhirValueSets/MedicationStatementStatusCodes.js';
/**
 * Valid arguments for the MedicationStatementDosage type.
 */
export interface MedicationStatementDosageArgs extends fhir.BackboneElementArgs {
    /**
     * Free text dosage information as reported about a patient's medication use. When coded dosage information is present, the free text may still be present for display to humans.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.dosage.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.TimingArgs | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeeded?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeededBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeededCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
    site?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
    siteCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
    siteReference?: fhir.ReferenceArgs | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
     */
    route?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    quantity?: fhir.Quantity | fhir.Range | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    quantityQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The amount of therapeutic or other substance given at one administration event.
     */
    quantityRange?: fhir.RangeArgs | undefined;
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
 * Indicates how the medication is/was used by the patient.
 */
export declare class MedicationStatementDosage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Free text dosage information as reported about a patient's medication use. When coded dosage information is present, the free text may still be present for display to humans.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.Timing | undefined;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
    asNeeded?: (fhir.FhirBoolean | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.dosage.asNeeded[x]
     */
    protected static readonly _fts_asNeededIsChoice: true;
    /**
     * A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
    site?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.dosage.site[x]
     */
    protected static readonly _fts_siteIsChoice: true;
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
    quantity?: (fhir.Quantity | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.dosage.quantity[x]
     */
    protected static readonly _fts_quantityIsChoice: true;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rate?: (fhir.Ratio | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.dosage.rate[x]
     */
    protected static readonly _fts_rateIsChoice: true;
    /**
     * The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.
     */
    maxDosePerPeriod?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationStatementDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationStatementDosageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationStatement type.
 */
export interface MedicationStatementArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationStatement" | undefined;
    /**
     * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The person or animal who is/was taking the medication.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The person who provided the information about the taking of this medication.
     */
    informationSource?: fhir.ReferenceArgs | undefined;
    /**
     * The date when the medication statement was asserted by the information source.
     */
    dateAsserted?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.dateAsserted
     */
    _dateAsserted?: fhir.FhirElementArgs;
    /**
     * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
     */
    status: fhir.FhirCode<MedicationStatementStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Set this to true if the record is saying that the medication was NOT taken.
     */
    wasNotTaken?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.wasNotTaken
     */
    _wasNotTaken?: fhir.FhirElementArgs;
    /**
     * A code indicating why the medication was not taken.
     */
    reasonNotTaken?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A reason for why the medication is being/was taken.
     */
    reasonForUse?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * A reason for why the medication is being/was taken.
     */
    reasonForUseCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A reason for why the medication is being/was taken.
     */
    reasonForUseReference?: fhir.ReferenceArgs | undefined;
    /**
     * The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.note
     */
    _note?: fhir.FhirElementArgs;
    /**
     * Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates how the medication is/was used by the patient.
     */
    dosage?: fhir.MedicationStatementDosageArgs[] | undefined;
}
/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains   The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export declare class MedicationStatement extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationStatement";
    /**
     * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */
    identifier: fhir.Identifier[];
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
    dateAsserted?: fhir.FhirDateTime | undefined;
    /**
     * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
     */
    status: fhir.FhirCode<MedicationStatementStatusCodeType> | null;
    /**
     * Set this to true if the record is saying that the medication was NOT taken.
     */
    wasNotTaken?: fhir.FhirBoolean | undefined;
    /**
     * A code indicating why the medication was not taken.
     */
    reasonNotTaken: fhir.CodeableConcept[];
    /**
     * A reason for why the medication is being/was taken.
     */
    reasonForUse?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.reasonForUse[x]
     */
    protected static readonly _fts_reasonForUseIsChoice: true;
    /**
     * The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
     */
    effective?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note?: fhir.FhirString | undefined;
    /**
     * Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.
     */
    supportingInformation: fhir.Reference[];
    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * Indicates how the medication is/was used by the patient.
     */
    dosage: fhir.MedicationStatementDosage[];
    /**
     * Default constructor for MedicationStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationStatementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicationStatement.d.ts.map