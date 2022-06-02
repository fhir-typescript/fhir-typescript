import * as fhir from '../fhir.js';
import { MedicationrequestStatusCodeType } from '../fhirValueSets/MedicationrequestStatusCodes.js';
import { MedicationrequestIntentCodeType } from '../fhirValueSets/MedicationrequestIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the MedicationRequestDispenseRequestInitialFill type.
 */
export interface MedicationRequestDispenseRequestInitialFillArgs extends fhir.BackboneElementArgs {
    /**
     * The amount or quantity to provide as part of the first dispense.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The length of time that the first dispense is expected to last.
     */
    duration?: fhir.DurationArgs | undefined;
}
/**
 * If populating this element, either the quantity or the duration must be included.
 */
export declare class MedicationRequestDispenseRequestInitialFill extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The amount or quantity to provide as part of the first dispense.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The length of time that the first dispense is expected to last.
     */
    duration?: fhir.Duration | undefined;
    /**
     * Default constructor for MedicationRequestDispenseRequestInitialFill - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestDispenseRequestInitialFillArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationRequestDispenseRequest type.
 */
export interface MedicationRequestDispenseRequestArgs extends fhir.BackboneElementArgs {
    /**
     * If populating this element, either the quantity or the duration must be included.
     */
    initialFill?: fhir.MedicationRequestDispenseRequestInitialFillArgs | undefined;
    /**
     * The minimum period of time that must occur between dispenses of the medication.
     */
    dispenseInterval?: fhir.DurationArgs | undefined;
    /**
     * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * If displaying "number of authorized fills", add 1 to this number.
     */
    numberOfRepeatsAllowed?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.dispenseRequest.numberOfRepeatsAllowed
     */
    _numberOfRepeatsAllowed?: fhir.FhirElementArgs;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
     */
    expectedSupplyDuration?: fhir.DurationArgs | undefined;
    /**
     * Indicates the intended dispensing Organization specified by the prescriber.
     */
    performer?: fhir.ReferenceArgs | undefined;
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export declare class MedicationRequestDispenseRequest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If populating this element, either the quantity or the duration must be included.
     */
    initialFill?: fhir.MedicationRequestDispenseRequestInitialFill | undefined;
    /**
     * The minimum period of time that must occur between dispenses of the medication.
     */
    dispenseInterval?: fhir.Duration | undefined;
    /**
     * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * If displaying "number of authorized fills", add 1 to this number.
     */
    numberOfRepeatsAllowed?: fhir.FhirUnsignedInt | undefined;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
     */
    expectedSupplyDuration?: fhir.Duration | undefined;
    /**
     * Indicates the intended dispensing Organization specified by the prescriber.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicationRequestDispenseRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestDispenseRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationRequestSubstitution type.
 */
export interface MedicationRequestSubstitutionArgs extends fhir.BackboneElementArgs {
    /**
     * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
     */
    allowed?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
     */
    allowedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
     */
    allowedCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export declare class MedicationRequestSubstitution extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
     */
    allowed: (fhir.FhirBoolean | fhir.CodeableConcept) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationRequest.substitution.allowed[x]
     */
    protected static readonly _fts_allowedIsChoice: true;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationRequestSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestSubstitutionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationRequest type.
 */
export interface MedicationRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationRequest" | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<MedicationrequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<MedicationrequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * The category can be used to include where the medication is expected to be consumed or other types of requests.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * If do not perform is not specified, the request is a positive request e.g. "do perform".
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.doNotPerform
     */
    _doNotPerform?: fhir.FhirElementArgs;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reported?: fhir.FhirBoolean | fhir.Reference | undefined;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedReference?: fhir.ReferenceArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The individual, organization, or device that initiated the request and has responsibility for its activation.
     */
    requester?: fhir.ReferenceArgs | undefined;
    /**
     * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
     */
    performerType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElementArgs | null)[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElementArgs | null)[];
    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This attribute should not be confused with the protocol of the medication.
     */
    courseOfTherapyType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: fhir.ReferenceArgs[] | undefined;
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
     */
    dosageInstruction?: fhir.DosageArgs[] | undefined;
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhir.MedicationRequestDispenseRequestArgs | undefined;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhir.MedicationRequestSubstitutionArgs | undefined;
    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue?: fhir.ReferenceArgs[] | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export declare class MedicationRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationRequest";
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<MedicationrequestStatusCodeType> | null;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<MedicationrequestIntentCodeType> | null;
    /**
     * The category can be used to include where the medication is expected to be consumed or other types of requests.
     */
    category: fhir.CodeableConcept[];
    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * If do not perform is not specified, the request is a positive request e.g. "do perform".
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reported?: (fhir.FhirBoolean | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationRequest.reported[x]
     */
    protected static readonly _fts_reportedIsChoice: true;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationRequest.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation: fhir.Reference[];
    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The individual, organization, or device that initiated the request and has responsibility for its activation.
     */
    requester?: fhir.Reference | undefined;
    /**
     * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
     */
    performer?: fhir.Reference | undefined;
    /**
     * If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
     */
    performerType?: fhir.CodeableConcept | undefined;
    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
     */
    reasonReference: fhir.Reference[];
    /**
     * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesCanonical: fhir.FhirCanonical[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesUri: fhir.FhirUri[];
    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn: fhir.Reference[];
    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This attribute should not be confused with the protocol of the medication.
     */
    courseOfTherapyType?: fhir.CodeableConcept | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance: fhir.Reference[];
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note: fhir.Annotation[];
    /**
     * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
     */
    dosageInstruction: fhir.Dosage[];
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhir.MedicationRequestDispenseRequest | undefined;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhir.MedicationRequestSubstitution | undefined;
    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: fhir.Reference | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue: fhir.Reference[];
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory: fhir.Reference[];
    /**
     * Default constructor for MedicationRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (MedicationRequest.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Cancelled: "cancelled";
        readonly Completed: "completed";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
        readonly OnHold: "on-hold";
        readonly Stopped: "stopped";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for intent (MedicationRequest.intent)
     */
    static get intentRequiredCodes(): {
        readonly FillerOrder: "filler-order";
        readonly InstanceOrder: "instance-order";
        readonly Option: "option";
        readonly Order: "order";
        readonly OriginalOrder: "original-order";
        readonly Plan: "plan";
        readonly Proposal: "proposal";
        readonly ReflexOrder: "reflex-order";
    };
    /**
     * Required-bound Value Set for priority (MedicationRequest.priority)
     */
    static get priorityRequiredCodes(): {
        readonly ASAP: "asap";
        readonly Routine: "routine";
        readonly STAT: "stat";
        readonly Urgent: "urgent";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicationRequest.d.ts.map