// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: EnrollmentRequest

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the EnrollmentRequest type.
 */
export interface EnrollmentRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "EnrollmentRequest"|undefined;
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
   * Extended properties for primitive element: EnrollmentRequest.created
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
   * Patient Resource.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * Need to identify the issuer to target for processing and for coordination of benefit processing.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * To determine the relationship between the patient and the subscriber.
   */
  relationship: fhir.CodingArgs|null;
}

/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export class EnrollmentRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EnrollmentRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "EnrollmentRequest";
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
   * Patient Resource.
   */
  public subject: fhir.Reference|null;
  /**
   * Need to identify the issuer to target for processing and for coordination of benefit processing.
   */
  public coverage: fhir.Reference|null;
  /**
   * To determine the relationship between the patient and the subscriber.
   */
  public relationship: fhir.Coding|null;
  /**
   * Default constructor for EnrollmentRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EnrollmentRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'EnrollmentRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['ruleset']) { this.ruleset = new fhir.Coding(source.ruleset, options); }
    if (source['originalRuleset']) { this.originalRuleset = new fhir.Coding(source.originalRuleset, options); }
    if (source['created'] !== undefined) { this.created = new fhir.FhirDateTime({value: source.created}, options); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['target']) { this.target = new fhir.Reference(source.target, options); }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider, options); }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization, options); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage, options); }
    else { this.coverage = null; }
    if (source['relationship']) { this.relationship = new fhir.Coding(source.relationship, options); }
    else { this.relationship = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EnrollmentRequest' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('ruleset',exp));
    iss.push(...this.vOS('originalRuleset',exp));
    iss.push(...this.vOS('created',exp));
    iss.push(...this.vOS('target',exp));
    iss.push(...this.vOS('provider',exp));
    iss.push(...this.vOS('organization',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vRS('coverage',exp));
    iss.push(...this.vRS('relationship',exp));
    return iss;
  }
}
