// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Basic

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Basic type.
 */
export interface BasicArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Basic"|undefined;
  /**
   * Identifier assigned to the resource for business purposes, outside the context of FHIR.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Must be able to distinguish different types of "basic" resources.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Needed for partitioning the resource by Patient.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Needed for partitioning the resource.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Allows ordering resource instances by time.
   */
  created?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Basic.created
   */
  _created?:fhir.FhirElementArgs;
}

/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export class Basic extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Basic';
  /**
   * Resource Type Name
   */
  public override resourceType: "Basic";
  /**
   * Identifier assigned to the resource for business purposes, outside the context of FHIR.
   */
  public identifier: fhir.Identifier[];
  /**
   * Must be able to distinguish different types of "basic" resources.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Needed for partitioning the resource by Patient.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Needed for partitioning the resource.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Allows ordering resource instances by time.
   */
  public created?: fhir.FhirDate|undefined;
  /**
   * Default constructor for Basic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BasicArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Basic';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
    if (source['created'] !== undefined) { this.created = new fhir.FhirDate({value: source.created}, options); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDate(source._created as Partial<fhir.FhirDateArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Basic' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOS('created',exp));
    return iss;
  }
}
