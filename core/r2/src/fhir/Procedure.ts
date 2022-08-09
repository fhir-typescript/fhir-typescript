// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Procedure

import * as fhir from '../fhir.js';

// @ts-ignore
import { ProcedureStatusCodes,  ProcedureStatusCodeType } from '../fhirValueSets/ProcedureStatusCodes.js';
// @ts-ignore
import { ProcedureStatusVsValidation } from '../fhirValueSets/ProcedureStatusVsValidation.js';
/**
 * Valid arguments for the ProcedurePerformer type.
 */
export interface ProcedurePerformerArgs extends fhir.BackboneElementArgs {
  /**
   * The practitioner who was involved in the procedure.
   */
  actor?: fhir.ReferenceArgs|undefined;
  /**
   * For example: surgeon, anaethetist, endoscopist.
   */
  role?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Limited to 'real' people rather than equipment.
 */
export class ProcedurePerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcedurePerformer';
  /**
   * The practitioner who was involved in the procedure.
   */
  public actor?: fhir.Reference|undefined;
  /**
   * For example: surgeon, anaethetist, endoscopist.
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ProcedurePerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcedurePerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['actor']) { this.actor = new fhir.Reference(source.actor, options); }
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Procedure.performer' }
    iss.push(...this.vOS('actor',exp));
    iss.push(...this.vOS('role',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ProcedureFocalDevice type.
 */
export interface ProcedureFocalDeviceArgs extends fhir.BackboneElementArgs {
  /**
   * The kind of change that happened to the device during the procedure.
   */
  action?: fhir.CodeableConceptArgs|undefined;
  /**
   * The device that was manipulated (changed) during the procedure.
   */
  manipulated: fhir.ReferenceArgs|null;
}

/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export class ProcedureFocalDevice extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcedureFocalDevice';
  /**
   * The kind of change that happened to the device during the procedure.
   */
  public action?: fhir.CodeableConcept|undefined;
  /**
   * The device that was manipulated (changed) during the procedure.
   */
  public manipulated: fhir.Reference|null;
  /**
   * Default constructor for ProcedureFocalDevice - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcedureFocalDeviceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['action']) { this.action = new fhir.CodeableConcept(source.action, options); }
    if (source['manipulated']) { this.manipulated = new fhir.Reference(source.manipulated, options); }
    else { this.manipulated = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Procedure.focalDevice' }
    iss.push(...this.vOS('action',exp));
    iss.push(...this.vRS('manipulated',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Procedure type.
 */
export interface ProcedureArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Procedure"|undefined;
  /**
   * Need to allow connection to a wider workflow.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The person, animal or group on which the procedure was performed.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
   */
  status: fhir.FhirCode<ProcedureStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Procedure.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Set this to true if the record is saying that the procedure was NOT performed.
   */
  notPerformed?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Procedure.notPerformed
   */
  _notPerformed?:fhir.FhirElementArgs;
  /**
   * A code indicating why the procedure was not performed.
   */
  reasonNotPerformed?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
   */
  bodySite?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
   */
  reason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
   */
  reasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
   */
  reasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * Limited to 'real' people rather than equipment.
   */
  performer?: fhir.ProcedurePerformerArgs[]|undefined;
  /**
   * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performed?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The encounter during which the procedure was performed.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Ties a procedure to where the records are likely kept.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * The outcome of the procedure - did it resolve reasons for the procedure being performed?
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * This could be a histology result, pathology report, surgical report, etc..
   */
  report?: fhir.ReferenceArgs[]|undefined;
  /**
   * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
   */
  complication?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
   */
  followUp?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A reference to a resource that contains details of the request for this procedure.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * Any other notes about the procedure.  E.g. the operative notes.
   */
  notes?: fhir.AnnotationArgs[]|undefined;
  /**
   * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  focalDevice?: fhir.ProcedureFocalDeviceArgs[]|undefined;
  /**
   * Used for tracking contamination, etc.
   */
  used?: fhir.ReferenceArgs[]|undefined;
}

/**
 * An action that is or was performed on a patient. This can be a physical intervention like an operation, or less invasive like counseling or hypnotherapy.
 */
export class Procedure extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Procedure';
  /**
   * Resource Type Name
   */
  public override resourceType: "Procedure";
  /**
   * Need to allow connection to a wider workflow.
   */
  public identifier: fhir.Identifier[];
  /**
   * The person, animal or group on which the procedure was performed.
   */
  public subject: fhir.Reference|null;
  /**
   * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
   */
  public status: fhir.FhirCode<ProcedureStatusCodeType>|null;
  /**
   * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Set this to true if the record is saying that the procedure was NOT performed.
   */
  public notPerformed?: fhir.FhirBoolean|undefined;
  /**
   * A code indicating why the procedure was not performed.
   */
  public reasonNotPerformed: fhir.CodeableConcept[];
  /**
   * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
   */
  public bodySite: fhir.CodeableConcept[];
  /**
   * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
   */
  public reason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Procedure.reason[x]
   */
  protected static readonly _fts_reasonIsChoice:true = true;
  /**
   * Limited to 'real' people rather than equipment.
   */
  public performer: fhir.ProcedurePerformer[];
  /**
   * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  public performed?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Procedure.performed[x]
   */
  protected static readonly _fts_performedIsChoice:true = true;
  /**
   * The encounter during which the procedure was performed.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Ties a procedure to where the records are likely kept.
   */
  public location?: fhir.Reference|undefined;
  /**
   * The outcome of the procedure - did it resolve reasons for the procedure being performed?
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * This could be a histology result, pathology report, surgical report, etc..
   */
  public report: fhir.Reference[];
  /**
   * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
   */
  public complication: fhir.CodeableConcept[];
  /**
   * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
   */
  public followUp: fhir.CodeableConcept[];
  /**
   * A reference to a resource that contains details of the request for this procedure.
   */
  public request?: fhir.Reference|undefined;
  /**
   * Any other notes about the procedure.  E.g. the operative notes.
   */
  public notes: fhir.Annotation[];
  /**
   * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  public focalDevice: fhir.ProcedureFocalDevice[];
  /**
   * Used for tracking contamination, etc.
   */
  public used: fhir.Reference[];
  /**
   * Default constructor for Procedure - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcedureArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Procedure';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ProcedureStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ProcedureStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category, options); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
    if (source['notPerformed'] !== undefined) { this.notPerformed = new fhir.FhirBoolean({value: source.notPerformed}, options); }
    if (source['_notPerformed']) {
      if (this.notPerformed) { this.notPerformed.addExtendedProperties(source._notPerformed!); }
      else { this.notPerformed = new fhir.FhirBoolean(source._notPerformed as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['reasonNotPerformed']) { this.reasonNotPerformed = source.reasonNotPerformed.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reasonNotPerformed = []; }
    if (source['bodySite']) { this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.bodySite = []; }
    if (source['reason']) { this.reason = source.reason; }
    else if (source['reasonCodeableConcept']) { this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept, options); }
    else if (source['reasonReference']) { this.reason = new fhir.Reference(source.reasonReference, options); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ProcedurePerformer(x, options)); }
    else { this.performer = []; }
    if (source['performed']) { this.performed = source.performed; }
    else if (source['performedDateTime'] !== undefined) { this.performed = new fhir.FhirDateTime({value: source.performedDateTime}, options); }
    else if (source['performedPeriod']) { this.performed = new fhir.Period(source.performedPeriod, options); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['location']) { this.location = new fhir.Reference(source.location, options); }
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome, options); }
    if (source['report']) { this.report = source.report.map((x) => new fhir.Reference(x, options)); }
    else { this.report = []; }
    if (source['complication']) { this.complication = source.complication.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.complication = []; }
    if (source['followUp']) { this.followUp = source.followUp.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.followUp = []; }
    if (source['request']) { this.request = new fhir.Reference(source.request, options); }
    if (source['notes']) { this.notes = source.notes.map((x) => new fhir.Annotation(x, options)); }
    else { this.notes = []; }
    if (source['focalDevice']) { this.focalDevice = source.focalDevice.map((x) => new fhir.ProcedureFocalDevice(x, options)); }
    else { this.focalDevice = []; }
    if (source['used']) { this.used = source.used.map((x) => new fhir.Reference(x, options)); }
    else { this.used = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Procedure' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vRSV('status',exp,'ProcedureStatus',ProcedureStatusVsValidation,'r'));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('notPerformed',exp));
    iss.push(...this.vOA('reasonNotPerformed',exp));
    iss.push(...this.vOA('bodySite',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOS('performed',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOS('outcome',exp));
    iss.push(...this.vOA('report',exp));
    iss.push(...this.vOA('complication',exp));
    iss.push(...this.vOA('followUp',exp));
    iss.push(...this.vOS('request',exp));
    iss.push(...this.vOA('notes',exp));
    iss.push(...this.vOA('focalDevice',exp));
    iss.push(...this.vOA('used',exp));
    return iss;
  }
}
