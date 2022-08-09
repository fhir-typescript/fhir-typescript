// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Order

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the OrderWhen type.
 */
export interface OrderWhenArgs extends fhir.BackboneElementArgs {
  /**
   * Code specifies when request should be done. The code may simply be a priority code.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * A formal schedule.
   */
  schedule?: fhir.TimingArgs|undefined;
}

/**
 * When order should be fulfilled.
 */
export class OrderWhen extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OrderWhen';
  /**
   * Code specifies when request should be done. The code may simply be a priority code.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * A formal schedule.
   */
  public schedule?: fhir.Timing|undefined;
  /**
   * Default constructor for OrderWhen - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OrderWhenArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['schedule']) { this.schedule = new fhir.Timing(source.schedule, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Order.when' }
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOS('schedule',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Order type.
 */
export interface OrderArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Order"|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * When the order was made.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Order.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Patient this order is about.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Who initiated the order.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Who is intended to fulfill the order.
   */
  target?: fhir.ReferenceArgs|undefined;
  /**
   * Text - why the order was made.
   */
  reason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Text - why the order was made.
   */
  reasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Text - why the order was made.
   */
  reasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * When order should be fulfilled.
   */
  when?: fhir.OrderWhenArgs|undefined;
  /**
   * What action is being ordered.
   */
  detail: fhir.ReferenceArgs[]|null;
}

/**
 * A request to perform an action.
 */
export class Order extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Order';
  /**
   * Resource Type Name
   */
  public override resourceType: "Order";
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  public identifier: fhir.Identifier[];
  /**
   * When the order was made.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Patient this order is about.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Who initiated the order.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Who is intended to fulfill the order.
   */
  public target?: fhir.Reference|undefined;
  /**
   * Text - why the order was made.
   */
  public reason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Order.reason[x]
   */
  protected static readonly _fts_reasonIsChoice:true = true;
  /**
   * When order should be fulfilled.
   */
  public when?: fhir.OrderWhen|undefined;
  /**
   * What action is being ordered.
   */
  public detail: fhir.Reference[];
  /**
   * Default constructor for Order - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OrderArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Order';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    if (source['source']) { this.source = new fhir.Reference(source.source, options); }
    if (source['target']) { this.target = new fhir.Reference(source.target, options); }
    if (source['reason']) { this.reason = source.reason; }
    else if (source['reasonCodeableConcept']) { this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept, options); }
    else if (source['reasonReference']) { this.reason = new fhir.Reference(source.reasonReference, options); }
    if (source['when']) { this.when = new fhir.OrderWhen(source.when, options); }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x, options)); }
    else { this.detail = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Order' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('source',exp));
    iss.push(...this.vOS('target',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOS('when',exp));
    iss.push(...this.vRA('detail',exp));
    return iss;
  }
}
