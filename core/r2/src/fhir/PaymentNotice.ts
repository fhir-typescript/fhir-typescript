// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: PaymentNotice

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the PaymentNotice type.
 */
export interface PaymentNoticeArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "PaymentNotice"|undefined;
  /**
   * The Response business identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
   */
  ruleset?: fhir.CodingArgs|undefined;
  /**
   * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
   */
  originalRuleset?: fhir.CodingArgs|undefined;
  /**
   * The date when this resource was created.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: PaymentNotice.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * The Insurer who is target  of the request.
   */
  target?: fhir.ReferenceArgs|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * The organization which is responsible for the services rendered to the patient.
   */
  organization?: fhir.ReferenceArgs|undefined;
  /**
   * Reference of resource to reverse.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * Reference of response to resource to reverse.
   */
  response?: fhir.ReferenceArgs|undefined;
  /**
   * The payment status, typically paid: payment sent, cleared: payment received.
   */
  paymentStatus: fhir.CodingArgs|null;
}

/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export class PaymentNotice extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PaymentNotice';
  /**
   * Resource Type Name
   */
  public override resourceType: "PaymentNotice";
  /**
   * The Response business identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
   */
  public ruleset?: fhir.Coding|undefined;
  /**
   * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
   */
  public originalRuleset?: fhir.Coding|undefined;
  /**
   * The date when this resource was created.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * The Insurer who is target  of the request.
   */
  public target?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * The organization which is responsible for the services rendered to the patient.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * Reference of resource to reverse.
   */
  public request?: fhir.Reference|undefined;
  /**
   * Reference of response to resource to reverse.
   */
  public response?: fhir.Reference|undefined;
  /**
   * The payment status, typically paid: payment sent, cleared: payment received.
   */
  public paymentStatus: fhir.Coding|null;
  /**
   * Default constructor for PaymentNotice - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PaymentNoticeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'PaymentNotice';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['ruleset']) { this.ruleset = new fhir.Coding(source.ruleset); }
    if (source['originalRuleset']) { this.originalRuleset = new fhir.Coding(source.originalRuleset); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['target']) { this.target = new fhir.Reference(source.target); }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization); }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['response']) { this.response = new fhir.Reference(source.response); }
    if (source['paymentStatus']) { this.paymentStatus = new fhir.Coding(source.paymentStatus); }
    else { this.paymentStatus = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PaymentNotice' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('ruleset',exp));
    iss.push(...this.vOS('originalRuleset',exp));
    iss.push(...this.vOS('created',exp));
    iss.push(...this.vOS('target',exp));
    iss.push(...this.vOS('provider',exp));
    iss.push(...this.vOS('organization',exp));
    iss.push(...this.vOS('request',exp));
    iss.push(...this.vOS('response',exp));
    iss.push(...this.vRS('paymentStatus',exp));
    return iss;
  }
}
