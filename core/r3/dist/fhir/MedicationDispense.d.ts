import * as fhir from '../fhir.js';
import { MedicationDispenseStatusCodeType } from '../fhirValueSets/MedicationDispenseStatusCodes.js';
/**
 * Valid arguments for the MedicationDispensePerformer type.
 */
export interface MedicationDispensePerformerArgs extends fhir.BackboneElementArgs {
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
     */
    actor: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * The performer will be reviewed as part of STU4.
 */
export declare class MedicationDispensePerformer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
     */
    actor: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationDispensePerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationDispenseSubstitution type.
 */
export interface MedicationDispenseSubstitutionArgs extends fhir.BackboneElementArgs {
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.substitution.wasSubstituted
     */
    _wasSubstituted?: fhir.FhirElementArgs;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export declare class MedicationDispenseSubstitution extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted: fhir.FhirBoolean | null;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.
     */
    reason: fhir.CodeableConcept[];
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty: fhir.Reference[];
    /**
     * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationDispenseSubstitutionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationDispense type.
 */
export interface MedicationDispenseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationDispense" | undefined;
    /**
     * Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The procedure that the dispense is done because of.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<MedicationDispenseStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Indicates type of medication dispense and where the medication is expected to be consumed or administered.
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
     * SubstanceAdministration-&gt;subject-&gt;Patient.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * The performer will be reviewed as part of STU4.
     */
    performer?: fhir.MedicationDispensePerformerArgs[] | undefined;
    /**
     * Maps to basedOn in Event logical model.
     */
    authorizingPrescription?: fhir.ReferenceArgs[] | undefined;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: fhir.QuantityArgs | undefined;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenPrepared
     */
    _whenPrepared?: fhir.FhirElementArgs;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenHandedOver
     */
    _whenHandedOver?: fhir.FhirElementArgs;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: fhir.ReferenceArgs[] | undefined;
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
     * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
     */
    dosageInstruction?: fhir.DosageArgs[] | undefined;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
     */
    substitution?: fhir.MedicationDispenseSubstitutionArgs | undefined;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
     */
    detectedIssue?: fhir.ReferenceArgs[] | undefined;
    /**
     * True if the dispense was not performed for some reason.
     */
    notDone?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.notDone
     */
    _notDone?: fhir.FhirElementArgs;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    notDoneReason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    notDoneReasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    notDoneReasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export declare class MedicationDispense extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationDispense";
    /**
     * Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
     */
    identifier: fhir.Identifier[];
    /**
     * The procedure that the dispense is done because of.
     */
    partOf: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<MedicationDispenseStatusCodeType> | undefined;
    /**
     * Indicates type of medication dispense and where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationDispense.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * SubstanceAdministration-&gt;subject-&gt;Patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.Reference | undefined;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation: fhir.Reference[];
    /**
     * The performer will be reviewed as part of STU4.
     */
    performer: fhir.MedicationDispensePerformer[];
    /**
     * Maps to basedOn in Event logical model.
     */
    authorizingPrescription: fhir.Reference[];
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
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: fhir.FhirDateTime | undefined;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: fhir.FhirDateTime | undefined;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver: fhir.Reference[];
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note: fhir.Annotation[];
    /**
     * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
     * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
     */
    dosageInstruction: fhir.Dosage[];
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
     */
    substitution?: fhir.MedicationDispenseSubstitution | undefined;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
     */
    detectedIssue: fhir.Reference[];
    /**
     * True if the dispense was not performed for some reason.
     */
    notDone?: fhir.FhirBoolean | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    notDoneReason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationDispense.notDoneReason[x]
     */
    protected static readonly _fts_notDoneReasonIsChoice: true;
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory: fhir.Reference[];
    /**
     * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationDispenseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicationDispense.d.ts.map