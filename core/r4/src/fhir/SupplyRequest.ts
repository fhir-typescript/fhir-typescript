// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { SupplyrequestStatusCodings, SupplyrequestStatusCodingType,} from '../fhirValueSets/SupplyrequestStatusCodings.js';
// @ts-ignore
import { SupplyrequestStatusCodes,  SupplyrequestStatusCodeType } from '../fhirValueSets/SupplyrequestStatusCodes.js';
// @ts-ignore
import { SupplyrequestKindCodings, SupplyrequestKindCodingType,} from '../fhirValueSets/SupplyrequestKindCodings.js';
// @ts-ignore
import { SupplyrequestKindCodes,  SupplyrequestKindCodeType } from '../fhirValueSets/SupplyrequestKindCodes.js';
// @ts-ignore
import { RequestPriorityCodings, RequestPriorityCodingType,} from '../fhirValueSets/RequestPriorityCodings.js';
// @ts-ignore
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { SupplyrequestReasonCodings, SupplyrequestReasonCodingType,} from '../fhirValueSets/SupplyrequestReasonCodings.js';
// @ts-ignore
import { SupplyrequestReasonCodes,  SupplyrequestReasonCodeType } from '../fhirValueSets/SupplyrequestReasonCodes.js';
/**
 * Valid arguments for the SupplyRequestParameter type.
 */
export interface SupplyRequestParameterArgs extends fhir.BackboneElementArgs {
  /**
   * A code or string that identifies the device detail being asserted.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  value?: fhir.CodeableConcept|fhir.Quantity|fhir.Range|fhir.FhirBoolean|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
}

/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export class SupplyRequestParameter extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SupplyRequestParameter';
  /**
   * A code or string that identifies the device detail being asserted.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  public value?: (fhir.CodeableConcept|fhir.Quantity|fhir.Range|fhir.FhirBoolean)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SupplyRequest.parameter.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SupplyRequestParameterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["code"]) { issues.push(...this.code.doModelValidation()); }
    return issues;
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
   * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Status of the supply request.
   */
  status?: SupplyrequestStatusCodeType|undefined;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  priority?: RequestPriorityCodeType|undefined;
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
  /**
   * The amount that is being ordered of the indicated item.
   */
  quantity: fhir.QuantityArgs|null;
  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  parameter?: fhir.SupplyRequestParameterArgs[]|undefined;
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
   * The device, practitioner, etc. who initiated the request.
   */
  requester?: fhir.ReferenceArgs|undefined;
  /**
   * Who is intended to fulfill the request.
   */
  supplier?: fhir.ReferenceArgs[]|undefined;
  /**
   * The reason why the supply item was requested.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The reason why the supply item was requested.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
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
   * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
   */
  public identifier?: fhir.Identifier[];
  /**
   * Status of the supply request.
   */
  public status?: SupplyrequestStatusCodeType|undefined;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  public priority?: RequestPriorityCodeType|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  public item: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element SupplyRequest.item[x]
   */
  protected static readonly _fts_itemIsChoice:true = true;
  /**
   * The amount that is being ordered of the indicated item.
   */
  public quantity: fhir.Quantity|null;
  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  public parameter?: fhir.SupplyRequestParameter[];
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
   * The device, practitioner, etc. who initiated the request.
   */
  public requester?: fhir.Reference|undefined;
  /**
   * Who is intended to fulfill the request.
   */
  public supplier?: fhir.Reference[];
  /**
   * The reason why the supply item was requested.
   */
  public reasonCode?: fhir.CodeableConcept[];
  /**
   * The reason why the supply item was requested.
   */
  public reasonReference?: fhir.Reference[];
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
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['priority']) { this.priority = source.priority; }
    if (source['item']) { this.item = source.item; }
    else if (source['itemCodeableConcept']) { this.item = new fhir.CodeableConcept(source.itemCodeableConcept); }
    else if (source['itemReference']) { this.item = new fhir.Reference(source.itemReference); }
    else { this.item = null; }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    else { this.quantity = null; }
    if (source['parameter']) { this.parameter = source.parameter.map((x) => new fhir.SupplyRequestParameter(x)); }
    else { this.parameter = []; }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    else if (source['occurrenceTiming']) { this.occurrence = new fhir.Timing(source.occurrenceTiming); }
    if (source['authoredOn']) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}); }
    if (source['requester']) { this.requester = new fhir.Reference(source.requester); }
    if (source['supplier']) { this.supplier = source.supplier.map((x) => new fhir.Reference(x)); }
    else { this.supplier = []; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['deliverFrom']) { this.deliverFrom = new fhir.Reference(source.deliverFrom); }
    if (source['deliverTo']) { this.deliverTo = new fhir.Reference(source.deliverTo); }
  }
  /**
   * Required-bound Value Set for status (SupplyRequest.status)
   */
  public static statusRequiredCoding():SupplyrequestStatusCodingType {
    return SupplyrequestStatusCodings;
  }
  /**
   * Required-bound Value Set for priority (SupplyRequest.priority)
   */
  public static priorityRequiredCoding():RequestPriorityCodingType {
    return RequestPriorityCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property resourceType:"SupplyRequest" fhir: SupplyRequest.resourceType:"SupplyRequest"', });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["category"]) { issues.push(...this.category.doModelValidation()); }
    if (!this['item']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property item: fhir: SupplyRequest.item[x]:', });
    }
    if (!this['quantity']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property quantity:fhir.Quantity fhir: SupplyRequest.quantity:Quantity', });
    }
    if (this["quantity"]) { issues.push(...this.quantity.doModelValidation()); }
    if (this["parameter"]) { this.parameter.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["authoredOn"]) { issues.push(...this.authoredOn.doModelValidation()); }
    if (this["requester"]) { issues.push(...this.requester.doModelValidation()); }
    if (this["supplier"]) { this.supplier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["deliverFrom"]) { issues.push(...this.deliverFrom.doModelValidation()); }
    if (this["deliverTo"]) { issues.push(...this.deliverTo.doModelValidation()); }
    return issues;
  }
}
