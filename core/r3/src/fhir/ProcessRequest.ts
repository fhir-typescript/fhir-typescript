// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ProcessRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
// @ts-ignore
import { ActionlistCodes,  ActionlistCodeType } from '../fhirValueSets/ActionlistCodes.js';
// @ts-ignore
import { ActionlistVsValidation } from '../fhirValueSets/ActionlistVsValidation.js';
/**
 * Valid arguments for the ProcessRequestItem type.
 */
export interface ProcessRequestItemArgs extends fhir.BackboneElementArgs {
  /**
   * A service line number.
   */
  sequenceLinkId: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.item.sequenceLinkId
   */
  _sequenceLinkId?:fhir.FhirElementArgs;
}

/**
 * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
 */
export class ProcessRequestItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcessRequestItem';
  /**
   * A service line number.
   */
  public sequenceLinkId: fhir.FhirInteger|null;
  /**
   * Default constructor for ProcessRequestItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcessRequestItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['sequenceLinkId']) { this.sequenceLinkId = new fhir.FhirInteger({value: source.sequenceLinkId}); }
    else { this.sequenceLinkId = null; }
    if (source['_sequenceLinkId']) {
      if (this.sequenceLinkId) { this.sequenceLinkId.addExtendedProperties(source._sequenceLinkId!); }
      else { this.sequenceLinkId = new fhir.FhirInteger(source._sequenceLinkId as Partial<fhir.FhirIntegerArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ProcessRequest.item' }
    this.vRS('sequenceLinkId',exp)
    return issues;
  }
}
/**
 * Valid arguments for the ProcessRequest type.
 */
export interface ProcessRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ProcessRequest"|undefined;
  /**
   * The ProcessRequest business identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
   */
  action?: fhir.FhirCode<ActionlistCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.action
   */
  _action?:fhir.FhirElementArgs;
  /**
   * The organization which is the target of the request.
   */
  target?: fhir.ReferenceArgs|undefined;
  /**
   * The date when this resource was created.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * The practitioner who is responsible for the action specified in this request.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * The organization which is responsible for the action speccified in this request.
   */
  organization?: fhir.ReferenceArgs|undefined;
  /**
   * Reference of resource which is the target or subject of this action.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * Reference of a prior response to resource which is the target or subject of this action.
   */
  response?: fhir.ReferenceArgs|undefined;
  /**
   * If true remove all history excluding audit.
   */
  nullify?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.nullify
   */
  _nullify?:fhir.FhirElementArgs;
  /**
   * A reference to supply which authenticates the process.
   */
  reference?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.reference
   */
  _reference?:fhir.FhirElementArgs;
  /**
   * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
   */
  item?: fhir.ProcessRequestItemArgs[]|undefined;
  /**
   * Names of resource types to include.
   */
  include?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.include
   */
  _include?:(fhir.FhirElementArgs|null)[];
  /**
   * Names of resource types to exclude.
   */
  exclude?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ProcessRequest.exclude
   */
  _exclude?:(fhir.FhirElementArgs|null)[];
  /**
   * A period of time during which the fulfilling resources would have been created.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.
 */
export class ProcessRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcessRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "ProcessRequest";
  /**
   * The ProcessRequest business identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: fhir.FhirCode<FmStatusCodeType>|undefined;
  /**
   * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
   */
  public action?: fhir.FhirCode<ActionlistCodeType>|undefined;
  /**
   * The organization which is the target of the request.
   */
  public target?: fhir.Reference|undefined;
  /**
   * The date when this resource was created.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * The practitioner who is responsible for the action specified in this request.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * The organization which is responsible for the action speccified in this request.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * Reference of resource which is the target or subject of this action.
   */
  public request?: fhir.Reference|undefined;
  /**
   * Reference of a prior response to resource which is the target or subject of this action.
   */
  public response?: fhir.Reference|undefined;
  /**
   * If true remove all history excluding audit.
   */
  public nullify?: fhir.FhirBoolean|undefined;
  /**
   * A reference to supply which authenticates the process.
   */
  public reference?: fhir.FhirString|undefined;
  /**
   * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
   */
  public item: fhir.ProcessRequestItem[];
  /**
   * Names of resource types to include.
   */
  public include: fhir.FhirString[];
  /**
   * Names of resource types to exclude.
   */
  public exclude: fhir.FhirString[];
  /**
   * A period of time during which the fulfilling resources would have been created.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for ProcessRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcessRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ProcessRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['action']) { this.action = new fhir.FhirCode<ActionlistCodeType>({value: source.action}); }
    if (source['_action']) {
      if (this.action) { this.action.addExtendedProperties(source._action!); }
      else { this.action = new fhir.FhirCode<ActionlistCodeType>(source._action as Partial<fhir.FhirCode>); }
    }
    if (source['target']) { this.target = new fhir.Reference(source.target); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization); }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['response']) { this.response = new fhir.Reference(source.response); }
    if (source['nullify']) { this.nullify = new fhir.FhirBoolean({value: source.nullify}); }
    if (source['_nullify']) {
      if (this.nullify) { this.nullify.addExtendedProperties(source._nullify!); }
      else { this.nullify = new fhir.FhirBoolean(source._nullify as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['reference']) { this.reference = new fhir.FhirString({value: source.reference}); }
    if (source['_reference']) {
      if (this.reference) { this.reference.addExtendedProperties(source._reference!); }
      else { this.reference = new fhir.FhirString(source._reference as Partial<fhir.FhirStringArgs>); }
    }
    if (source['item']) { this.item = source.item.map((x) => new fhir.ProcessRequestItem(x)); }
    else { this.item = []; }
    if (source['include']) { this.include = source.include.map((x) => new fhir.FhirString({value: x})); }
    else { this.include = []; }
    if (source['_include']) {
      source._include.forEach((x,i) => {
        if (this.include.length >= i) { if (x) { this.include[i].addExtendedProperties(x); } }
        else { if (x) { this.include.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['exclude']) { this.exclude = source.exclude.map((x) => new fhir.FhirString({value: x})); }
    else { this.exclude = []; }
    if (source['_exclude']) {
      source._exclude.forEach((x,i) => {
        if (this.exclude.length >= i) { if (x) { this.exclude[i].addExtendedProperties(x); } }
        else { if (x) { this.exclude.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ProcessRequest' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOSV('status',exp,'FmStatus',FmStatusVsValidation,'r')
    this.vOSV('action',exp,'Actionlist',ActionlistVsValidation,'r')
    this.vOS('target',exp)
    this.vOS('created',exp)
    this.vOS('provider',exp)
    this.vOS('organization',exp)
    this.vOS('request',exp)
    this.vOS('response',exp)
    this.vOS('nullify',exp)
    this.vOS('reference',exp)
    this.vOA('item',exp)
    this.vOA('include',exp)
    this.vOA('exclude',exp)
    this.vOS('period',exp)
    return issues;
  }
}
