// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement

import * as fhir from '../fhir.js';

// @ts-ignore
import { DeviceStatementStatusCodes,  DeviceStatementStatusCodeType } from '../fhirValueSets/DeviceStatementStatusCodes.js';
// @ts-ignore
import { DeviceStatementStatusVsValidation } from '../fhirValueSets/DeviceStatementStatusVsValidation.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
/**
 * Valid arguments for the DeviceUseStatement type.
 */
export interface DeviceUseStatementArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceUseStatement"|undefined;
  /**
   * An external identifier for this statement such as an IRI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
   */
  status: fhir.FhirCode<DeviceStatementStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseStatement.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The patient who used the device.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
   */
  derivedFrom?: fhir.ReferenceArgs[]|undefined;
  /**
   * How often the device was used.
   */
  timing?: fhir.Timing|fhir.Period|fhir.FhirDateTime|undefined;
  /**
   * How often the device was used.
   */
  timingTiming?: fhir.TimingArgs|undefined;
  /**
   * How often the device was used.
   */
  timingPeriod?: fhir.PeriodArgs|undefined;
  /**
   * How often the device was used.
   */
  timingDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The time at which the statement was made/recorded.
   */
  recordedOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseStatement.recordedOn
   */
  _recordedOn?:fhir.FhirElementArgs;
  /**
   * Who reported the device was being used by the patient.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * The details of the device used.
   */
  device: fhir.ReferenceArgs|null;
  /**
   * Reason or justification for the use of the device.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates another resource whose existence justifies this DeviceUseStatement.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceUseStatement';
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceUseStatement";
  /**
   * An external identifier for this statement such as an IRI.
   */
  public identifier: fhir.Identifier[];
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
   */
  public basedOn: fhir.Reference[];
  /**
   * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
   */
  public status: fhir.FhirCode<DeviceStatementStatusCodeType>|null;
  /**
   * The patient who used the device.
   */
  public subject: fhir.Reference|null;
  /**
   * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
   */
  public derivedFrom: fhir.Reference[];
  /**
   * How often the device was used.
   */
  public timing?: (fhir.Timing|fhir.Period|fhir.FhirDateTime)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
   */
  protected static readonly _fts_timingIsChoice:true = true;
  /**
   * The time at which the statement was made/recorded.
   */
  public recordedOn?: fhir.FhirDateTime|undefined;
  /**
   * Who reported the device was being used by the patient.
   */
  public source?: fhir.Reference|undefined;
  /**
   * The details of the device used.
   */
  public device: fhir.Reference|null;
  /**
   * Reason or justification for the use of the device.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Indicates another resource whose existence justifies this DeviceUseStatement.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceUseStatementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceUseStatement';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['status']) { this.status = new fhir.FhirCode<DeviceStatementStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DeviceStatementStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['derivedFrom']) { this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x)); }
    else { this.derivedFrom = []; }
    if (source['timing']) { this.timing = source.timing; }
    else if (source['timingTiming']) { this.timing = new fhir.Timing(source.timingTiming); }
    else if (source['timingPeriod']) { this.timing = new fhir.Period(source.timingPeriod); }
    else if (source['timingDateTime']) { this.timing = new fhir.FhirDateTime({value: source.timingDateTime}); }
    if (source['recordedOn']) { this.recordedOn = new fhir.FhirDateTime({value: source.recordedOn}); }
    if (source['_recordedOn']) {
      if (this.recordedOn) { this.recordedOn.addExtendedProperties(source._recordedOn!); }
      else { this.recordedOn = new fhir.FhirDateTime(source._recordedOn as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['device']) { this.device = new fhir.Reference(source.device); }
    else { this.device = null; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceUseStatement' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOA('basedOn',exp)
    this.vRSV('status',exp,'DeviceStatementStatus',DeviceStatementStatusVsValidation,'r')
    this.vRS('subject',exp)
    this.vOA('derivedFrom',exp)
    this.vOS('timing',exp)
    this.vOS('recordedOn',exp)
    this.vOS('source',exp)
    this.vRS('device',exp)
    this.vOA('reasonCode',exp)
    this.vOA('reasonReference',exp)
    this.vOS('bodySite',exp)
    this.vOA('note',exp)
    return issues;
  }
}
