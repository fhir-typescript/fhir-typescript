// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Procedure

import * as fhir from '../fhir.js';

// @ts-ignore
import { PerformerRoleCodings, PerformerRoleCodingType,} from '../fhirValueSets/PerformerRoleCodings.js';
// @ts-ignore
import { PerformerRoleCodes,  PerformerRoleCodeType } from '../fhirValueSets/PerformerRoleCodes.js';
// @ts-ignore
import { DeviceActionCodings, DeviceActionCodingType,} from '../fhirValueSets/DeviceActionCodings.js';
// @ts-ignore
import { DeviceActionCodes,  DeviceActionCodeType } from '../fhirValueSets/DeviceActionCodes.js';
// @ts-ignore
import { EventStatusCodings, EventStatusCodingType,} from '../fhirValueSets/EventStatusCodings.js';
// @ts-ignore
import { EventStatusCodes,  EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
// @ts-ignore
import { ProcedureNotPerformedReasonCodings, ProcedureNotPerformedReasonCodingType,} from '../fhirValueSets/ProcedureNotPerformedReasonCodings.js';
// @ts-ignore
import { ProcedureNotPerformedReasonCodes,  ProcedureNotPerformedReasonCodeType } from '../fhirValueSets/ProcedureNotPerformedReasonCodes.js';
// @ts-ignore
import { ProcedureCategoryCodings, ProcedureCategoryCodingType,} from '../fhirValueSets/ProcedureCategoryCodings.js';
// @ts-ignore
import { ProcedureCategoryCodes,  ProcedureCategoryCodeType } from '../fhirValueSets/ProcedureCategoryCodes.js';
// @ts-ignore
import { ProcedureCodings, ProcedureCodingType,} from '../fhirValueSets/ProcedureCodings.js';
// @ts-ignore
import { ProcedureCodes,  ProcedureCodeType } from '../fhirValueSets/ProcedureCodes.js';
// @ts-ignore
import { ProcedureReasonCodings, ProcedureReasonCodingType,} from '../fhirValueSets/ProcedureReasonCodings.js';
// @ts-ignore
import { ProcedureReasonCodes,  ProcedureReasonCodeType } from '../fhirValueSets/ProcedureReasonCodes.js';
// @ts-ignore
import { BodySiteCodings, BodySiteCodingType,} from '../fhirValueSets/BodySiteCodings.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { ProcedureOutcomeCodings, ProcedureOutcomeCodingType,} from '../fhirValueSets/ProcedureOutcomeCodings.js';
// @ts-ignore
import { ProcedureOutcomeCodes,  ProcedureOutcomeCodeType } from '../fhirValueSets/ProcedureOutcomeCodes.js';
// @ts-ignore
import { ConditionCodings, ConditionCodingType,} from '../fhirValueSets/ConditionCodings.js';
// @ts-ignore
import { ConditionCodes,  ConditionCodeType } from '../fhirValueSets/ConditionCodes.js';
// @ts-ignore
import { ProcedureFollowupCodings, ProcedureFollowupCodingType,} from '../fhirValueSets/ProcedureFollowupCodings.js';
// @ts-ignore
import { ProcedureFollowupCodes,  ProcedureFollowupCodeType } from '../fhirValueSets/ProcedureFollowupCodes.js';
// @ts-ignore
import { DeviceKindCodings, DeviceKindCodingType,} from '../fhirValueSets/DeviceKindCodings.js';
// @ts-ignore
import { DeviceKindCodes,  DeviceKindCodeType } from '../fhirValueSets/DeviceKindCodes.js';
/**
 * Valid arguments for the ProcedurePerformer type.
 */
export interface ProcedurePerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   */
  function?: fhir.CodeableConceptArgs|undefined;
  /**
   * The practitioner who was involved in the procedure.
   */
  actor: fhir.ReferenceArgs|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
}

/**
 * Limited to "real" people rather than equipment.
 */
export class ProcedurePerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcedurePerformer';
  /**
   * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * The practitioner who was involved in the procedure.
   */
  public actor: fhir.Reference|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Default constructor for ProcedurePerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcedurePerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["function"]) { issues.push(...this.function.doModelValidation()); }
    if (!this['actor']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property actor:fhir.Reference fhir: Procedure.performer.actor:Reference' });
    }
    if (this["actor"]) { issues.push(...this.actor.doModelValidation()); }
    if (this["onBehalfOf"]) { issues.push(...this.onBehalfOf.doModelValidation()); }
    return issues;
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
    if (source['action']) { this.action = new fhir.CodeableConcept(source.action); }
    if (source['manipulated']) { this.manipulated = new fhir.Reference(source.manipulated); }
    else { this.manipulated = null; }
  }
  /**
   * Preferred-bound Value Set for action (Procedure.focalDevice.action)
   */
  public static get actionPreferredCodings():DeviceActionCodingType {
    return DeviceActionCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["action"]) { issues.push(...this.action.doModelValidation()); }
    if (!this['manipulated']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property manipulated:fhir.Reference fhir: Procedure.focalDevice.manipulated:Reference' });
    }
    if (this["manipulated"]) { issues.push(...this.manipulated.doModelValidation()); }
    return issues;
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
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  instantiatesCanonical?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Procedure.instantiatesCanonical
   */
  _instantiatesCanonical?:(fhir.FhirElementArgs|null)[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: fhir.FhirUri[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Procedure.instantiatesUri
   */
  _instantiatesUri?:(fhir.FhirElementArgs|null)[];
  /**
   * A reference to a resource that contains details of the request for this procedure.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<EventStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Procedure.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The person, animal or group on which the procedure was performed.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performed?: fhir.FhirDateTime|fhir.Period|fhir.FhirString|fhir.Age|fhir.Range|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedString?: fhir.FhirString|string|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedAge?: fhir.AgeArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedRange?: fhir.RangeArgs|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: fhir.ReferenceArgs|undefined;
  /**
   * Individual who is making the procedure statement.
   */
  asserter?: fhir.ReferenceArgs|undefined;
  /**
   * Limited to "real" people rather than equipment.
   */
  performer?: fhir.ProcedurePerformerArgs[]|undefined;
  /**
   * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use). 
   * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
   */
  bodySite?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
   */
  report?: fhir.ReferenceArgs[]|undefined;
  /**
   * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
   */
  complication?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Any complications that occurred during the procedure, or in the immediate post-performance period.
   */
  complicationDetail?: fhir.ReferenceArgs[]|undefined;
  /**
   * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   */
  followUp?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Any other notes and comments about the procedure.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  focalDevice?: fhir.ProcedureFocalDeviceArgs[]|undefined;
  /**
   * For devices actually implanted or removed, use Procedure.device.
   */
  usedReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * For devices actually implanted or removed, use Procedure.device.
   */
  usedCode?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
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
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  public instantiatesCanonical: fhir.FhirCanonical[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri: fhir.FhirUri[];
  /**
   * A reference to a resource that contains details of the request for this procedure.
   */
  public basedOn: fhir.Reference[];
  /**
   * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
   */
  public partOf: fhir.Reference[];
  /**
   * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<EventStatusCodeType>|null;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The person, animal or group on which the procedure was performed.
   */
  public subject: fhir.Reference|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  public performed?: (fhir.FhirDateTime|fhir.Period|fhir.FhirString|fhir.Age|fhir.Range)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Procedure.performed[x]
   */
  protected static readonly _fts_performedIsChoice:true = true;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * Individual who is making the procedure statement.
   */
  public asserter?: fhir.Reference|undefined;
  /**
   * Limited to "real" people rather than equipment.
   */
  public performer: fhir.ProcedurePerformer[];
  /**
   * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use). 
   * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   */
  public reasonReference: fhir.Reference[];
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
   */
  public bodySite: fhir.CodeableConcept[];
  /**
   * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
   */
  public report: fhir.Reference[];
  /**
   * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
   */
  public complication: fhir.CodeableConcept[];
  /**
   * Any complications that occurred during the procedure, or in the immediate post-performance period.
   */
  public complicationDetail: fhir.Reference[];
  /**
   * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   */
  public followUp: fhir.CodeableConcept[];
  /**
   * Any other notes and comments about the procedure.
   */
  public note: fhir.Annotation[];
  /**
   * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  public focalDevice: fhir.ProcedureFocalDevice[];
  /**
   * For devices actually implanted or removed, use Procedure.device.
   */
  public usedReference: fhir.Reference[];
  /**
   * For devices actually implanted or removed, use Procedure.device.
   */
  public usedCode: fhir.CodeableConcept[];
  /**
   * Default constructor for Procedure - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcedureArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Procedure';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['instantiatesCanonical']) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.instantiatesCanonical = []; }
    if (source['_instantiatesCanonical']) {
      source._instantiatesCanonical.forEach((x,i) => {
        if (this.instantiatesCanonical.length >= i) { if (x) { this.instantiatesCanonical[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesCanonical.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['instantiatesUri']) { this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({value: x})); }
    else { this.instantiatesUri = []; }
    if (source['_instantiatesUri']) {
      source._instantiatesUri.forEach((x,i) => {
        if (this.instantiatesUri.length >= i) { if (x) { this.instantiatesUri[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesUri.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = new fhir.FhirCode<EventStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EventStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusReason']) { this.statusReason = new fhir.CodeableConcept(source.statusReason); }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['performed']) { this.performed = source.performed; }
    else if (source['performedDateTime']) { this.performed = new fhir.FhirDateTime({value: source.performedDateTime}); }
    else if (source['performedPeriod']) { this.performed = new fhir.Period(source.performedPeriod); }
    else if (source['performedString']) { this.performed = new fhir.FhirString({value: source.performedString}); }
    else if (source['performedAge']) { this.performed = new fhir.Age(source.performedAge); }
    else if (source['performedRange']) { this.performed = new fhir.Range(source.performedRange); }
    if (source['recorder']) { this.recorder = new fhir.Reference(source.recorder); }
    if (source['asserter']) { this.asserter = new fhir.Reference(source.asserter); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ProcedurePerformer(x)); }
    else { this.performer = []; }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['bodySite']) { this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x)); }
    else { this.bodySite = []; }
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome); }
    if (source['report']) { this.report = source.report.map((x) => new fhir.Reference(x)); }
    else { this.report = []; }
    if (source['complication']) { this.complication = source.complication.map((x) => new fhir.CodeableConcept(x)); }
    else { this.complication = []; }
    if (source['complicationDetail']) { this.complicationDetail = source.complicationDetail.map((x) => new fhir.Reference(x)); }
    else { this.complicationDetail = []; }
    if (source['followUp']) { this.followUp = source.followUp.map((x) => new fhir.CodeableConcept(x)); }
    else { this.followUp = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['focalDevice']) { this.focalDevice = source.focalDevice.map((x) => new fhir.ProcedureFocalDevice(x)); }
    else { this.focalDevice = []; }
    if (source['usedReference']) { this.usedReference = source.usedReference.map((x) => new fhir.Reference(x)); }
    else { this.usedReference = []; }
    if (source['usedCode']) { this.usedCode = source.usedCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.usedCode = []; }
  }
  /**
   * Required-bound Value Set for status (Procedure.status)
   */
  public static get statusRequiredCodes() {
    return EventStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Procedure" fhir: Procedure.resourceType:"Procedure"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["instantiatesCanonical"]) { this.instantiatesCanonical.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["instantiatesUri"]) { this.instantiatesUri.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<EventStatusCodeType> fhir: Procedure.status:code' });
    }
    if (this['status'] && (!Object.values(EventStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<EventStatusCodeType> fhir: Procedure.status:code Required binding to: EventStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["statusReason"]) { issues.push(...this.statusReason.doModelValidation()); }
    if (this["category"]) { issues.push(...this.category.doModelValidation()); }
    if (this["code"]) { issues.push(...this.code.doModelValidation()); }
    if (!this['subject']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject:fhir.Reference fhir: Procedure.subject:Reference' });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation()); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation()); }
    if (this["recorder"]) { issues.push(...this.recorder.doModelValidation()); }
    if (this["asserter"]) { issues.push(...this.asserter.doModelValidation()); }
    if (this["performer"]) { this.performer.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["location"]) { issues.push(...this.location.doModelValidation()); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["bodySite"]) { this.bodySite.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["outcome"]) { issues.push(...this.outcome.doModelValidation()); }
    if (this["report"]) { this.report.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["complication"]) { this.complication.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["complicationDetail"]) { this.complicationDetail.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["followUp"]) { this.followUp.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["note"]) { this.note.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["focalDevice"]) { this.focalDevice.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["usedReference"]) { this.usedReference.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["usedCode"]) { this.usedCode.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
