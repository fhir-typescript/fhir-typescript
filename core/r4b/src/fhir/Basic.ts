// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Basic

import * as fhir from '../fhir.js';

// @ts-ignore
import { BasicResourceTypeCodes,  BasicResourceTypeCodeType } from '../fhirValueSets/BasicResourceTypeCodes.js';
// @ts-ignore
import { BasicResourceTypeVsValidation } from '../fhirValueSets/BasicResourceTypeVsValidation.js';
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
   * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
   * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies when the resource was first created.
   */
  created?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Basic.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * Indicates who was responsible for creating the resource instance.
   */
  author?: fhir.ReferenceArgs|undefined;
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
   * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
   * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Identifies when the resource was first created.
   */
  public created?: fhir.FhirDate|undefined;
  /**
   * Indicates who was responsible for creating the resource instance.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Default constructor for Basic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BasicArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Basic';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['created']) { this.created = new fhir.FhirDate({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDate(source._created as Partial<fhir.FhirDateArgs>); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Basic' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('created',exp));
    iss.push(...this.vOS('author',exp));
    return iss;
  }
}
