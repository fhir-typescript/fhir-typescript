// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicationDispense

import * as fhir from '../fhir.js';

// @ts-ignore
import { MedicationdispensePerformerFunctionCodings, MedicationdispensePerformerFunctionCodingType,} from '../fhirValueSets/MedicationdispensePerformerFunctionCodings.js';
// @ts-ignore
import { MedicationdispensePerformerFunctionCodes,  MedicationdispensePerformerFunctionCodeType } from '../fhirValueSets/MedicationdispensePerformerFunctionCodes.js';
// @ts-ignore
import { V3ActSubstanceAdminSubstitutionCodings, V3ActSubstanceAdminSubstitutionCodingType,} from '../fhirValueSets/V3ActSubstanceAdminSubstitutionCodings.js';
// @ts-ignore
import { V3ActSubstanceAdminSubstitutionCodes,  V3ActSubstanceAdminSubstitutionCodeType } from '../fhirValueSets/V3ActSubstanceAdminSubstitutionCodes.js';
// @ts-ignore
import { V3SubstanceAdminSubstitutionReasonCodings, V3SubstanceAdminSubstitutionReasonCodingType,} from '../fhirValueSets/V3SubstanceAdminSubstitutionReasonCodings.js';
// @ts-ignore
import { V3SubstanceAdminSubstitutionReasonCodes,  V3SubstanceAdminSubstitutionReasonCodeType } from '../fhirValueSets/V3SubstanceAdminSubstitutionReasonCodes.js';
// @ts-ignore
import { MedicationdispenseStatusCodings, MedicationdispenseStatusCodingType,} from '../fhirValueSets/MedicationdispenseStatusCodings.js';
// @ts-ignore
import { MedicationdispenseStatusCodes,  MedicationdispenseStatusCodeType } from '../fhirValueSets/MedicationdispenseStatusCodes.js';
// @ts-ignore
import { MedicationdispenseCategoryCodings, MedicationdispenseCategoryCodingType,} from '../fhirValueSets/MedicationdispenseCategoryCodings.js';
// @ts-ignore
import { MedicationdispenseCategoryCodes,  MedicationdispenseCategoryCodeType } from '../fhirValueSets/MedicationdispenseCategoryCodes.js';
// @ts-ignore
import { V3ActPharmacySupplyTypeCodings, V3ActPharmacySupplyTypeCodingType,} from '../fhirValueSets/V3ActPharmacySupplyTypeCodings.js';
// @ts-ignore
import { V3ActPharmacySupplyTypeCodes,  V3ActPharmacySupplyTypeCodeType } from '../fhirValueSets/V3ActPharmacySupplyTypeCodes.js';
/**
 * Valid arguments for the MedicationDispensePerformer type.
 */
export interface MedicationDispensePerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  function?: fhir.CodeableConceptArgs|undefined;
  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * Indicates who or what performed the event.
 */
export class MedicationDispensePerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicationDispensePerformer';
  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationDispensePerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicationDispense.performer' }
    if (this["function"]) { issues.push(...this.function.doModelValidation(expression+'.function')); }
    if (!this['actor']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property actor fhir: MedicationDispense.performer.actor:Reference', expression: [expression] });
    }
    if (this["actor"]) { issues.push(...this.actor.doModelValidation(expression+'.actor')); }
    return issues;
  }
}
/**
 * Valid arguments for the MedicationDispenseSubstitution type.
 */
export interface MedicationDispenseSubstitutionArgs extends fhir.BackboneElementArgs {
  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  wasSubstituted: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: MedicationDispense.substitution.wasSubstituted
   */
  _wasSubstituted?:fhir.FhirElementArgs;
  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  responsibleParty?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export class MedicationDispenseSubstitution extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicationDispenseSubstitution';
  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  public wasSubstituted: fhir.FhirBoolean|null;
  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  public reason: fhir.CodeableConcept[];
  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  public responsibleParty: fhir.Reference[];
  /**
   * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationDispenseSubstitutionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['wasSubstituted']) { this.wasSubstituted = new fhir.FhirBoolean({value: source.wasSubstituted}); }
    else { this.wasSubstituted = null; }
    if (source['_wasSubstituted']) {
      if (this.wasSubstituted) { this.wasSubstituted.addExtendedProperties(source._wasSubstituted!); }
      else { this.wasSubstituted = new fhir.FhirBoolean(source._wasSubstituted as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reason = []; }
    if (source['responsibleParty']) { this.responsibleParty = source.responsibleParty.map((x) => new fhir.Reference(x)); }
    else { this.responsibleParty = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicationDispense.substitution' }
    if (!this['wasSubstituted']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property wasSubstituted fhir: MedicationDispense.substitution.wasSubstituted:boolean', expression: [expression] });
    }
    if (this["wasSubstituted"]) { issues.push(...this.wasSubstituted.doModelValidation(expression+'.wasSubstituted')); }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["reason"]) { this.reason.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reason[${i}]`)); }) }
    if (this["responsibleParty"]) { this.responsibleParty.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.responsibleParty[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the MedicationDispense type.
 */
export interface MedicationDispenseArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicationDispense"|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The procedure that trigger the dispense.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<MedicationdispenseStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: MedicationDispense.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medication?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhir.ReferenceArgs|undefined;
  /**
   * SubstanceAdministration-&gt;subject-&gt;Patient.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Additional information that supports the medication being dispensed.
   */
  supportingInformation?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates who or what performed the event.
   */
  performer?: fhir.MedicationDispensePerformerArgs[]|undefined;
  /**
   * The principal physical location where the dispense was performed.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Maps to basedOn in Event logical model.
   */
  authorizingPrescription?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * The amount of medication expressed as a timing amount.
   */
  daysSupply?: fhir.QuantityArgs|undefined;
  /**
   * The time when the dispensed product was packaged and reviewed.
   */
  whenPrepared?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicationDispense.whenPrepared
   */
  _whenPrepared?:fhir.FhirElementArgs;
  /**
   * The time the dispensed product was provided to the patient or their representative.
   */
  whenHandedOver?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicationDispense.whenHandedOver
   */
  _whenHandedOver?:fhir.FhirElementArgs;
  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  destination?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  receiver?: fhir.ReferenceArgs[]|undefined;
  /**
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
   * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   */
  dosageInstruction?: fhir.DosageArgs[]|undefined;
  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  substitution?: fhir.MedicationDispenseSubstitutionArgs|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  detectedIssue?: fhir.ReferenceArgs[]|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  eventHistory?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export class MedicationDispense extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicationDispense';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicationDispense";
  /**
   * This is a business identifier, not a resource identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * The procedure that trigger the dispense.
   */
  public partOf: fhir.Reference[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<MedicationdispenseStatusCodeType>|null;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  public statusReason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element MedicationDispense.statusReason[x]
   */
  protected static readonly _fts_statusReasonIsChoice:true = true;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medication: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element MedicationDispense.medication[x]
   */
  protected static readonly _fts_medicationIsChoice:true = true;
  /**
   * SubstanceAdministration-&gt;subject-&gt;Patient.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Additional information that supports the medication being dispensed.
   */
  public supportingInformation: fhir.Reference[];
  /**
   * Indicates who or what performed the event.
   */
  public performer: fhir.MedicationDispensePerformer[];
  /**
   * The principal physical location where the dispense was performed.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Maps to basedOn in Event logical model.
   */
  public authorizingPrescription: fhir.Reference[];
  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * The amount of medication expressed as a timing amount.
   */
  public daysSupply?: fhir.Quantity|undefined;
  /**
   * The time when the dispensed product was packaged and reviewed.
   */
  public whenPrepared?: fhir.FhirDateTime|undefined;
  /**
   * The time the dispensed product was provided to the patient or their representative.
   */
  public whenHandedOver?: fhir.FhirDateTime|undefined;
  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  public destination?: fhir.Reference|undefined;
  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  public receiver: fhir.Reference[];
  /**
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  public note: fhir.Annotation[];
  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
   * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   */
  public dosageInstruction: fhir.Dosage[];
  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  public substitution?: fhir.MedicationDispenseSubstitution|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  public detectedIssue: fhir.Reference[];
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  public eventHistory: fhir.Reference[];
  /**
   * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationDispenseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicationDispense';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = new fhir.FhirCode<MedicationdispenseStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<MedicationdispenseStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusReason']) { this.statusReason = source.statusReason; }
    else if (source['statusReasonCodeableConcept']) { this.statusReason = new fhir.CodeableConcept(source.statusReasonCodeableConcept); }
    else if (source['statusReasonReference']) { this.statusReason = new fhir.Reference(source.statusReasonReference); }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['medication']) { this.medication = source.medication; }
    else if (source['medicationCodeableConcept']) { this.medication = new fhir.CodeableConcept(source.medicationCodeableConcept); }
    else if (source['medicationReference']) { this.medication = new fhir.Reference(source.medicationReference); }
    else { this.medication = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['supportingInformation']) { this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x)); }
    else { this.supportingInformation = []; }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.MedicationDispensePerformer(x)); }
    else { this.performer = []; }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['authorizingPrescription']) { this.authorizingPrescription = source.authorizingPrescription.map((x) => new fhir.Reference(x)); }
    else { this.authorizingPrescription = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['daysSupply']) { this.daysSupply = new fhir.Quantity(source.daysSupply); }
    if (source['whenPrepared']) { this.whenPrepared = new fhir.FhirDateTime({value: source.whenPrepared}); }
    if (source['_whenPrepared']) {
      if (this.whenPrepared) { this.whenPrepared.addExtendedProperties(source._whenPrepared!); }
      else { this.whenPrepared = new fhir.FhirDateTime(source._whenPrepared as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['whenHandedOver']) { this.whenHandedOver = new fhir.FhirDateTime({value: source.whenHandedOver}); }
    if (source['_whenHandedOver']) {
      if (this.whenHandedOver) { this.whenHandedOver.addExtendedProperties(source._whenHandedOver!); }
      else { this.whenHandedOver = new fhir.FhirDateTime(source._whenHandedOver as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination); }
    if (source['receiver']) { this.receiver = source.receiver.map((x) => new fhir.Reference(x)); }
    else { this.receiver = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['dosageInstruction']) { this.dosageInstruction = source.dosageInstruction.map((x) => new fhir.Dosage(x)); }
    else { this.dosageInstruction = []; }
    if (source['substitution']) { this.substitution = new fhir.MedicationDispenseSubstitution(source.substitution); }
    if (source['detectedIssue']) { this.detectedIssue = source.detectedIssue.map((x) => new fhir.Reference(x)); }
    else { this.detectedIssue = []; }
    if (source['eventHistory']) { this.eventHistory = source.eventHistory.map((x) => new fhir.Reference(x)); }
    else { this.eventHistory = []; }
  }
  /**
   * Required-bound Value Set for status (MedicationDispense.status)
   */
  public static get statusRequiredCodes() {
    return MedicationdispenseStatusCodes;
  }
  /**
   * Preferred-bound Value Set for category (MedicationDispense.category)
   */
  public static get categoryPreferredCodings():MedicationdispenseCategoryCodingType {
    return MedicationdispenseCategoryCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicationDispense' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: MedicationDispense.resourceType:"MedicationDispense"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["partOf"]) { this.partOf.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.partOf[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: MedicationDispense.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(MedicationdispenseStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (MedicationDispense.status) of type code is missing code for Required binding to: MedicationdispenseStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["category"]) { issues.push(...this.category.doModelValidation(expression+'.category')); }
    if (!this['medication']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property medication fhir: MedicationDispense.medication[x]:', expression: [expression] });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["context"]) { issues.push(...this.context.doModelValidation(expression+'.context')); }
    if (this["supportingInformation"]) { this.supportingInformation.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.supportingInformation[${i}]`)); }) }
    if (this["performer"]) { this.performer.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.performer[${i}]`)); }) }
    if (this["location"]) { issues.push(...this.location.doModelValidation(expression+'.location')); }
    if (this["authorizingPrescription"]) { this.authorizingPrescription.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.authorizingPrescription[${i}]`)); }) }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["quantity"]) { issues.push(...this.quantity.doModelValidation(expression+'.quantity')); }
    if (this["daysSupply"]) { issues.push(...this.daysSupply.doModelValidation(expression+'.daysSupply')); }
    if (this["whenPrepared"]) { issues.push(...this.whenPrepared.doModelValidation(expression+'.whenPrepared')); }
    if (this["whenHandedOver"]) { issues.push(...this.whenHandedOver.doModelValidation(expression+'.whenHandedOver')); }
    if (this["destination"]) { issues.push(...this.destination.doModelValidation(expression+'.destination')); }
    if (this["receiver"]) { this.receiver.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.receiver[${i}]`)); }) }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    if (this["dosageInstruction"]) { this.dosageInstruction.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.dosageInstruction[${i}]`)); }) }
    if (this["substitution"]) { issues.push(...this.substitution.doModelValidation(expression+'.substitution')); }
    if (this["detectedIssue"]) { this.detectedIssue.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.detectedIssue[${i}]`)); }) }
    if (this["eventHistory"]) { this.eventHistory.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.eventHistory[${i}]`)); }) }
    return issues;
  }
}
