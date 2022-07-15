// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ProcessResponse

import * as fhir from '../fhir.js';

// @ts-ignore
import { NoteTypeCodes,  NoteTypeCodeType } from '../fhirValueSets/NoteTypeCodes.js';
// @ts-ignore
import { NoteTypeVsValidation } from '../fhirValueSets/NoteTypeVsValidation.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
// @ts-ignore
import { ProcessOutcomeCodes,  ProcessOutcomeCodeType } from '../fhirValueSets/ProcessOutcomeCodes.js';
// @ts-ignore
import { ProcessOutcomeVsValidation } from '../fhirValueSets/ProcessOutcomeVsValidation.js';
// @ts-ignore
import { FormsCodes,  FormsCodeType } from '../fhirValueSets/FormsCodes.js';
// @ts-ignore
import { FormsVsValidation } from '../fhirValueSets/FormsVsValidation.js';
// @ts-ignore
import { AdjudicationErrorCodes,  AdjudicationErrorCodeType } from '../fhirValueSets/AdjudicationErrorCodes.js';
// @ts-ignore
import { AdjudicationErrorVsValidation } from '../fhirValueSets/AdjudicationErrorVsValidation.js';
/**
 * Valid arguments for the ProcessResponseProcessNote type.
 */
export interface ProcessResponseProcessNoteArgs extends fhir.BackboneElementArgs {
  /**
   * The note purpose: Print/Display.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The note text.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ProcessResponse.processNote.text
   */
  _text?:fhir.FhirElementArgs;
}

/**
 * Suite of processing notes or additional requirements if the processing has been held.
 */
export class ProcessResponseProcessNote extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcessResponseProcessNote';
  /**
   * The note purpose: Print/Display.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The note text.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * Default constructor for ProcessResponseProcessNote - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcessResponseProcessNoteArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ProcessResponse.processNote' }
    this.vOSV('type',exp,'NoteType',NoteTypeVsValidation,'r')
    this.vOS('text',exp)
    return issues;
  }
}
/**
 * Valid arguments for the ProcessResponse type.
 */
export interface ProcessResponseArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ProcessResponse"|undefined;
  /**
   * The Response business identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ProcessResponse.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ProcessResponse.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * The organization who produced this adjudicated response.
   */
  organization?: fhir.ReferenceArgs|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * Transaction status: error, complete, held.
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * A description of the status of the adjudication or processing.
   */
  disposition?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ProcessResponse.disposition
   */
  _disposition?:fhir.FhirElementArgs;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestProvider?: fhir.ReferenceArgs|undefined;
  /**
   * The organization which is responsible for the services rendered to the patient.
   */
  requestOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * The form to be used for printing the content.
   */
  form?: fhir.CodeableConceptArgs|undefined;
  /**
   * Suite of processing notes or additional requirements if the processing has been held.
   */
  processNote?: fhir.ProcessResponseProcessNoteArgs[]|undefined;
  /**
   * Processing errors.
   */
  error?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Request for additional supporting or authorizing information, such as: documents, images or resources.
   */
  communicationRequest?: fhir.ReferenceArgs[]|undefined;
}

/**
 * This resource provides processing status, errors and notes from the processing of a resource.
 */
export class ProcessResponse extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcessResponse';
  /**
   * Resource Type Name
   */
  public override resourceType: "ProcessResponse";
  /**
   * The Response business identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: fhir.FhirCode<FmStatusCodeType>|undefined;
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * The organization who produced this adjudicated response.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * Original request resource reference.
   */
  public request?: fhir.Reference|undefined;
  /**
   * Transaction status: error, complete, held.
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * A description of the status of the adjudication or processing.
   */
  public disposition?: fhir.FhirString|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public requestProvider?: fhir.Reference|undefined;
  /**
   * The organization which is responsible for the services rendered to the patient.
   */
  public requestOrganization?: fhir.Reference|undefined;
  /**
   * The form to be used for printing the content.
   */
  public form?: fhir.CodeableConcept|undefined;
  /**
   * Suite of processing notes or additional requirements if the processing has been held.
   */
  public processNote: fhir.ProcessResponseProcessNote[];
  /**
   * Processing errors.
   */
  public error: fhir.CodeableConcept[];
  /**
   * Request for additional supporting or authorizing information, such as: documents, images or resources.
   */
  public communicationRequest: fhir.Reference[];
  /**
   * Default constructor for ProcessResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcessResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ProcessResponse';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization); }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome); }
    if (source['disposition']) { this.disposition = new fhir.FhirString({value: source.disposition}); }
    if (source['_disposition']) {
      if (this.disposition) { this.disposition.addExtendedProperties(source._disposition!); }
      else { this.disposition = new fhir.FhirString(source._disposition as Partial<fhir.FhirStringArgs>); }
    }
    if (source['requestProvider']) { this.requestProvider = new fhir.Reference(source.requestProvider); }
    if (source['requestOrganization']) { this.requestOrganization = new fhir.Reference(source.requestOrganization); }
    if (source['form']) { this.form = new fhir.CodeableConcept(source.form); }
    if (source['processNote']) { this.processNote = source.processNote.map((x) => new fhir.ProcessResponseProcessNote(x)); }
    else { this.processNote = []; }
    if (source['error']) { this.error = source.error.map((x) => new fhir.CodeableConcept(x)); }
    else { this.error = []; }
    if (source['communicationRequest']) { this.communicationRequest = source.communicationRequest.map((x) => new fhir.Reference(x)); }
    else { this.communicationRequest = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ProcessResponse' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOSV('status',exp,'FmStatus',FmStatusVsValidation,'r')
    this.vOS('created',exp)
    this.vOS('organization',exp)
    this.vOS('request',exp)
    this.vOS('outcome',exp)
    this.vOS('disposition',exp)
    this.vOS('requestProvider',exp)
    this.vOS('requestOrganization',exp)
    this.vOS('form',exp)
    this.vOA('processNote',exp)
    this.vOA('error',exp)
    this.vOA('communicationRequest',exp)
    return issues;
  }
}
