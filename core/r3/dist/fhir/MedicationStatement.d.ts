import * as fhir from '../fhir.js';
import { MedicationStatementStatusCodeType } from '../fhirValueSets/MedicationStatementStatusCodes.js';
import { MedicationStatementTakenCodeType } from '../fhirValueSets/MedicationStatementTakenCodes.js';
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
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The encounter or episode of care that establishes the context for this MedicationStatement.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<MedicationStatementStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Indicates where type of medication statement and where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date when the medication statement was asserted by the information source.
     */
    dateAsserted?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.dateAsserted
     */
    _dateAsserted?: fhir.FhirElementArgs;
    /**
     * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest.
     */
    informationSource?: fhir.ReferenceArgs | undefined;
    /**
     * The person, animal or group who is/was taking the medication.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
     */
    derivedFrom?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because it indicates that the medication was not taken.
     */
    taken: fhir.FhirCode<MedicationStatementTakenCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationStatement.taken
     */
    _taken?: fhir.FhirElementArgs;
    /**
     * A code indicating why the medication was not taken.
     */
    reasonNotTaken?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
     */
    dosage?: fhir.DosageArgs[] | undefined;
}
/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
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
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn: fhir.Reference[];
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf: fhir.Reference[];
    /**
     * The encounter or episode of care that establishes the context for this MedicationStatement.
     */
    context?: fhir.Reference | undefined;
    /**
     * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<MedicationStatementStatusCodeType> | null;
    /**
     * Indicates where type of medication statement and where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.
     */
    effective?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationStatement.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * The date when the medication statement was asserted by the information source.
     */
    dateAsserted?: fhir.FhirDateTime | undefined;
    /**
     * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest.
     */
    informationSource?: fhir.Reference | undefined;
    /**
     * The person, animal or group who is/was taking the medication.
     */
    subject: fhir.Reference | null;
    /**
     * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
     */
    derivedFrom: fhir.Reference[];
    /**
     * This element is labeled as a modifier because it indicates that the medication was not taken.
     */
    taken: fhir.FhirCode<MedicationStatementTakenCodeType> | null;
    /**
     * A code indicating why the medication was not taken.
     */
    reasonNotTaken: fhir.CodeableConcept[];
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
     */
    reasonReference: fhir.Reference[];
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note: fhir.Annotation[];
    /**
     * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
     */
    dosage: fhir.Dosage[];
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