// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicationStatement

import * as fhir from '../fhir.js';

// @ts-ignore
import { MedicationStatementStatusCodings, MedicationStatementStatusCodingType,} from '../fhirValueSets/MedicationStatementStatusCodings.js';
// @ts-ignore
import { MedicationStatementStatusCodes,  MedicationStatementStatusCodeType } from '../fhirValueSets/MedicationStatementStatusCodes.js';
// @ts-ignore
import { ReasonMedicationStatusCodesCodings, ReasonMedicationStatusCodesCodingType,} from '../fhirValueSets/ReasonMedicationStatusCodesCodings.js';
// @ts-ignore
import { ReasonMedicationStatusCodesCodes,  ReasonMedicationStatusCodesCodeType } from '../fhirValueSets/ReasonMedicationStatusCodesCodes.js';
// @ts-ignore
import { MedicationStatementCategoryCodings, MedicationStatementCategoryCodingType,} from '../fhirValueSets/MedicationStatementCategoryCodings.js';
// @ts-ignore
import { MedicationStatementCategoryCodes,  MedicationStatementCategoryCodeType } from '../fhirValueSets/MedicationStatementCategoryCodes.js';
// @ts-ignore
import { ConditionCodeCodings, ConditionCodeCodingType,} from '../fhirValueSets/ConditionCodeCodings.js';
// @ts-ignore
import { ConditionCodeCodes,  ConditionCodeCodeType } from '../fhirValueSets/ConditionCodeCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the MedicationStatement type.
 */
export interface MedicationStatementArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicationStatement"|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationStatementStatusCodeType|null;
  /**
   * This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates where the medication is expected to be consumed or administered.
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
   * The person, animal or group who is/was taking the medication.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The encounter or episode of care that establishes the context for this MedicationStatement.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   */
  effective?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   */
  effectiveDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The date when the medication statement was asserted by the information source.
   */
  dateAsserted?: fhir.FhirDateTime|string|undefined;
  /**
   * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
   */
  informationSource?: fhir.ReferenceArgs|undefined;
  /**
   * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
   */
  derivedFrom?: fhir.ReferenceArgs[]|undefined;
  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Provides extra information about the medication statement that is not conveyed by the other attributes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
   */
  dosage?: fhir.DosageArgs[]|undefined;
}

/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export class MedicationStatement extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicationStatement';
  /**
   * Resource Type Name
   */
  public resourceType: "MedicationStatement";
  /**
   * This is a business identifier, not a resource identifier.
   */
  public identifier?: fhir.Identifier[];
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  public basedOn?: fhir.Reference[];
  /**
   * A larger event of which this particular event is a component or step.
   */
  public partOf?: fhir.Reference[];
  /**
   * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: MedicationStatementStatusCodeType|null;
  /**
   * This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
   */
  public statusReason?: fhir.CodeableConcept[];
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medication: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element MedicationStatement.medication[x]
   */
  protected static readonly _fts_medicationIsChoice:true = true;
  /**
   * The person, animal or group who is/was taking the medication.
   */
  public subject: fhir.Reference|null;
  /**
   * The encounter or episode of care that establishes the context for this MedicationStatement.
   */
  public context?: fhir.Reference|undefined;
  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   */
  public effective?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element MedicationStatement.effective[x]
   */
  protected static readonly _fts_effectiveIsChoice:true = true;
  /**
   * The date when the medication statement was asserted by the information source.
   */
  public dateAsserted?: fhir.FhirDateTime|undefined;
  /**
   * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
   */
  public informationSource?: fhir.Reference|undefined;
  /**
   * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
   */
  public derivedFrom?: fhir.Reference[];
  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
   */
  public reasonCode?: fhir.CodeableConcept[];
  /**
   * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
   */
  public reasonReference?: fhir.Reference[];
  /**
   * Provides extra information about the medication statement that is not conveyed by the other attributes.
   */
  public note?: fhir.Annotation[];
  /**
   * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
   */
  public dosage?: fhir.Dosage[];
  /**
   * Default constructor for MedicationStatement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationStatementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicationStatement';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['statusReason']) { this.statusReason = source.statusReason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.statusReason = []; }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['medication']) { this.medication = source.medication; }
    else if (source['medicationCodeableConcept']) { this.medication = new fhir.CodeableConcept(source.medicationCodeableConcept); }
    else if (source['medicationReference']) { this.medication = new fhir.Reference(source.medicationReference); }
    else { this.medication = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['effective']) { this.effective = source.effective; }
    else if (source['effectiveDateTime']) { this.effective = new fhir.FhirDateTime({value: source.effectiveDateTime}); }
    else if (source['effectivePeriod']) { this.effective = new fhir.Period(source.effectivePeriod); }
    if (source['dateAsserted']) { this.dateAsserted = new fhir.FhirDateTime({value: source.dateAsserted}); }
    if (source['informationSource']) { this.informationSource = new fhir.Reference(source.informationSource); }
    if (source['derivedFrom']) { this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x)); }
    else { this.derivedFrom = []; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['dosage']) { this.dosage = source.dosage.map((x) => new fhir.Dosage(x)); }
    else { this.dosage = []; }
  }
  /**
   * Required-bound Value Set for status (MedicationStatement.status)
   */
  public static statusRequiredCoding():MedicationStatementStatusCodingType {
    return MedicationStatementStatusCodings;
  }
  /**
   * Preferred-bound Value Set for category (MedicationStatement.category)
   */
  public static categoryPreferredCoding():MedicationStatementCategoryCodingType {
    return MedicationStatementCategoryCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"MedicationStatement" fhir: MedicationStatement.resourceType:"MedicationStatement"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:MedicationStatementStatusCodeType fhir: MedicationStatement.status:code', }));
    }
    if (this["statusReason"]) { this.statusReason.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["category"]) { outcome.issue!.push(...this.category.doModelValidation().issue!); }
    if (!this['medication']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property medication: fhir: MedicationStatement.medication[x]:', }));
    }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property subject:fhir.Reference fhir: MedicationStatement.subject:Reference', }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["context"]) { outcome.issue!.push(...this.context.doModelValidation().issue!); }
    if (this["dateAsserted"]) { outcome.issue!.push(...this.dateAsserted.doModelValidation().issue!); }
    if (this["informationSource"]) { outcome.issue!.push(...this.informationSource.doModelValidation().issue!); }
    if (this["derivedFrom"]) { this.derivedFrom.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["dosage"]) { this.dosage.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}