// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchSubject

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResearchSubjectStatusCodes,  ResearchSubjectStatusCodeType } from '../fhirValueSets/ResearchSubjectStatusCodes.js';
// @ts-ignore
import { ResearchSubjectStatusVsValidation } from '../fhirValueSets/ResearchSubjectStatusVsValidation.js';
/**
 * Valid arguments for the ResearchSubject type.
 */
export interface ResearchSubjectArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ResearchSubject"|undefined;
  /**
   * Identifiers assigned to this research subject for a study.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The current state of the subject.
   */
  status: fhir.FhirCode<ResearchSubjectStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ResearchSubject.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The dates the subject began and ended their participation in the study.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Reference to the study the subject is participating in.
   */
  study: fhir.ReferenceArgs|null;
  /**
   * The record of the person or animal who is involved in the study.
   */
  individual: fhir.ReferenceArgs|null;
  /**
   * The name of the arm in the study the subject is expected to follow as part of this study.
   */
  assignedArm?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchSubject.assignedArm
   */
  _assignedArm?:fhir.FhirElementArgs;
  /**
   * The name of the arm in the study the subject actually followed as part of this study.
   */
  actualArm?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchSubject.actualArm
   */
  _actualArm?:fhir.FhirElementArgs;
  /**
   * A record of the patient's informed agreement to participate in the study.
   */
  consent?: fhir.ReferenceArgs|undefined;
}

/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export class ResearchSubject extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ResearchSubject';
  /**
   * Resource Type Name
   */
  public override resourceType: "ResearchSubject";
  /**
   * Identifiers assigned to this research subject for a study.
   */
  public identifier: fhir.Identifier[];
  /**
   * The current state of the subject.
   */
  public status: fhir.FhirCode<ResearchSubjectStatusCodeType>|null;
  /**
   * The dates the subject began and ended their participation in the study.
   */
  public period?: fhir.Period|undefined;
  /**
   * Reference to the study the subject is participating in.
   */
  public study: fhir.Reference|null;
  /**
   * The record of the person or animal who is involved in the study.
   */
  public individual: fhir.Reference|null;
  /**
   * The name of the arm in the study the subject is expected to follow as part of this study.
   */
  public assignedArm?: fhir.FhirString|undefined;
  /**
   * The name of the arm in the study the subject actually followed as part of this study.
   */
  public actualArm?: fhir.FhirString|undefined;
  /**
   * A record of the patient's informed agreement to participate in the study.
   */
  public consent?: fhir.Reference|undefined;
  /**
   * Default constructor for ResearchSubject - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchSubjectArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ResearchSubject';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ResearchSubjectStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ResearchSubjectStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['study']) { this.study = new fhir.Reference(source.study, options); }
    else { this.study = null; }
    if (source['individual']) { this.individual = new fhir.Reference(source.individual, options); }
    else { this.individual = null; }
    if (source['assignedArm'] !== undefined) { this.assignedArm = new fhir.FhirString({value: source.assignedArm}, options); }
    if (source['_assignedArm']) {
      if (this.assignedArm) { this.assignedArm.addExtendedProperties(source._assignedArm!); }
      else { this.assignedArm = new fhir.FhirString(source._assignedArm as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['actualArm'] !== undefined) { this.actualArm = new fhir.FhirString({value: source.actualArm}, options); }
    if (source['_actualArm']) {
      if (this.actualArm) { this.actualArm.addExtendedProperties(source._actualArm!); }
      else { this.actualArm = new fhir.FhirString(source._actualArm as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['consent']) { this.consent = new fhir.Reference(source.consent, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ResearchSubject' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'ResearchSubjectStatus',ResearchSubjectStatusVsValidation,'r'));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vRS('study',exp));
    iss.push(...this.vRS('individual',exp));
    iss.push(...this.vOS('assignedArm',exp));
    iss.push(...this.vOS('actualArm',exp));
    iss.push(...this.vOS('consent',exp));
    return iss;
  }
}
