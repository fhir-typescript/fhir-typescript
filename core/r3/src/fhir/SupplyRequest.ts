// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { SupplyrequestStatusCodes,  SupplyrequestStatusCodeType } from '../fhirValueSets/SupplyrequestStatusCodes.js';
// @ts-ignore
import { SupplyrequestStatusVsValidation } from '../fhirValueSets/SupplyrequestStatusVsValidation.js';
// @ts-ignore
import { SupplyrequestKindCodes,  SupplyrequestKindCodeType } from '../fhirValueSets/SupplyrequestKindCodes.js';
// @ts-ignore
import { SupplyrequestKindVsValidation } from '../fhirValueSets/SupplyrequestKindVsValidation.js';
// @ts-ignore
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { RequestPriorityVsValidation } from '../fhirValueSets/RequestPriorityVsValidation.js';
/**
 * Valid arguments for the SupplyRequestOrderedItem type.
 */
export interface SupplyRequestOrderedItemArgs extends fhir.BackboneElementArgs {
  /**
   * The amount that is being ordered of the indicated item.
   */
  quantity: fhir.QuantityArgs|null;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  item?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  itemCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  itemReference?: fhir.ReferenceArgs|undefined;
}

/**
 * The item being requested.
 */
export class SupplyRequestOrderedItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SupplyRequestOrderedItem';
  /**
   * The amount that is being ordered of the indicated item.
   */
  public quantity: fhir.Quantity|null;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  public item?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SupplyRequest.orderedItem.item[x]
   */
  protected static readonly _fts_itemIsChoice:true = true;
  /**
   * Default constructor for SupplyRequestOrderedItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SupplyRequestOrderedItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    else { this.quantity = null; }
    if (source['item']) { this.item = source.item; }
    else if (source['itemCodeableConcept']) { this.item = new fhir.CodeableConcept(source.itemCodeableConcept); }
    else if (source['itemReference']) { this.item = new fhir.Reference(source.itemReference); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SupplyRequest.orderedItem' }
    iss.push(...this.vRS('quantity',exp));
    iss.push(...this.vOS('item',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SupplyRequestRequester type.
 */
export interface SupplyRequestRequesterArgs extends fhir.BackboneElementArgs {
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  agent: fhir.ReferenceArgs|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
}

/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export class SupplyRequestRequester extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SupplyRequestRequester';
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  public agent: fhir.Reference|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Default constructor for SupplyRequestRequester - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SupplyRequestRequesterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['agent']) { this.agent = new fhir.Reference(source.agent); }
    else { this.agent = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SupplyRequest.requester' }
    iss.push(...this.vRS('agent',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SupplyRequest type.
 */
export interface SupplyRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SupplyRequest"|undefined;
  /**
   * This is assigned by the requester, and used to refer to this order in other external standards.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: fhir.FhirCode<SupplyrequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SupplyRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  priority?: fhir.FhirCode<RequestPriorityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SupplyRequest.priority
   */
  _priority?:fhir.FhirElementArgs;
  /**
   * The item being requested.
   */
  orderedItem?: fhir.SupplyRequestOrderedItemArgs|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|fhir.Timing|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrenceTiming?: fhir.TimingArgs|undefined;
  /**
   * When the request was made.
   */
  authoredOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: SupplyRequest.authoredOn
   */
  _authoredOn?:fhir.FhirElementArgs;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: fhir.SupplyRequestRequesterArgs|undefined;
  /**
   * Who is intended to fulfill the request.
   */
  supplier?: fhir.ReferenceArgs[]|undefined;
  /**
   * Why the supply item was requested.
   */
  reason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Why the supply item was requested.
   */
  reasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Why the supply item was requested.
   */
  reasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * Where the supply is expected to come from.
   */
  deliverFrom?: fhir.ReferenceArgs|undefined;
  /**
   * Where the supply is destined to go.
   */
  deliverTo?: fhir.ReferenceArgs|undefined;
}

/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export class SupplyRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SupplyRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "SupplyRequest";
  /**
   * This is assigned by the requester, and used to refer to this order in other external standards.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: fhir.FhirCode<SupplyrequestStatusCodeType>|undefined;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  public priority?: fhir.FhirCode<RequestPriorityCodeType>|undefined;
  /**
   * The item being requested.
   */
  public orderedItem?: fhir.SupplyRequestOrderedItem|undefined;
  /**
   * When the request should be fulfilled.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period|fhir.Timing)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SupplyRequest.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * When the request was made.
   */
  public authoredOn?: fhir.FhirDateTime|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.SupplyRequestRequester|undefined;
  /**
   * Who is intended to fulfill the request.
   */
  public supplier: fhir.Reference[];
  /**
   * Why the supply item was requested.
   */
  public reason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SupplyRequest.reason[x]
   */
  protected static readonly _fts_reasonIsChoice:true = true;
  /**
   * Where the supply is expected to come from.
   */
  public deliverFrom?: fhir.Reference|undefined;
  /**
   * Where the supply is destined to go.
   */
  public deliverTo?: fhir.Reference|undefined;
  /**
   * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SupplyRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SupplyRequest';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['status']) { this.status = new fhir.FhirCode<SupplyrequestStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SupplyrequestStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['priority']) { this.priority = new fhir.FhirCode<RequestPriorityCodeType>({value: source.priority}); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode<RequestPriorityCodeType>(source._priority as Partial<fhir.FhirCode>); }
    }
    if (source['orderedItem']) { this.orderedItem = new fhir.SupplyRequestOrderedItem(source.orderedItem); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    else if (source['occurrenceTiming']) { this.occurrence = new fhir.Timing(source.occurrenceTiming); }
    if (source['authoredOn']) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}); }
    if (source['_authoredOn']) {
      if (this.authoredOn) { this.authoredOn.addExtendedProperties(source._authoredOn!); }
      else { this.authoredOn = new fhir.FhirDateTime(source._authoredOn as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['requester']) { this.requester = new fhir.SupplyRequestRequester(source.requester); }
    if (source['supplier']) { this.supplier = source.supplier.map((x) => new fhir.Reference(x)); }
    else { this.supplier = []; }
    if (source['reason']) { this.reason = source.reason; }
    else if (source['reasonCodeableConcept']) { this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept); }
    else if (source['reasonReference']) { this.reason = new fhir.Reference(source.reasonReference); }
    if (source['deliverFrom']) { this.deliverFrom = new fhir.Reference(source.deliverFrom); }
    if (source['deliverTo']) { this.deliverTo = new fhir.Reference(source.deliverTo); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SupplyRequest' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOSV('status',exp,'SupplyrequestStatus',SupplyrequestStatusVsValidation,'r'));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOSV('priority',exp,'RequestPriority',RequestPriorityVsValidation,'r'));
    iss.push(...this.vOS('orderedItem',exp));
    iss.push(...this.vOS('occurrence',exp));
    iss.push(...this.vOS('authoredOn',exp));
    iss.push(...this.vOS('requester',exp));
    iss.push(...this.vOA('supplier',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOS('deliverFrom',exp));
    iss.push(...this.vOS('deliverTo',exp));
    return iss;
  }
}
