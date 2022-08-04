// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Reference

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { ResourceTypesVsValidation } from '../fhirValueSets/ResourceTypesVsValidation.js';
/**
 * Valid arguments for the Reference type.
 */
export interface ReferenceArgs extends fhir.FhirElementArgs {
  /**
   * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
   */
  reference?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Reference.reference
   */
  _reference?:fhir.FhirElementArgs;
  /**
   * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
   */
  type?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Reference.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy. 
   * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
   * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
   * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
   */
  display?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Reference.display
   */
  _display?:fhir.FhirElementArgs;
}

/**
 * A reference from one resource to another.
 */
export class Reference extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Reference';
  /**
   * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
   */
  public reference?: fhir.FhirString|undefined;
  /**
   * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
   */
  public type?: fhir.FhirUri|undefined;
  /**
   * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy. 
   * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
   * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
   * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
   */
  public display?: fhir.FhirString|undefined;
  /**
   * Default constructor for Reference - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ReferenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['reference'] !== undefined) { this.reference = new fhir.FhirString({value: source.reference}, options); }
    if (source['_reference']) {
      if (this.reference) { this.reference.addExtendedProperties(source._reference!); }
      else { this.reference = new fhir.FhirString(source._reference as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['type'] !== undefined) { this.type = new fhir.FhirUri({value: source.type}, options); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirUri(source._type as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier, options); }
    if (source['display'] !== undefined) { this.display = new fhir.FhirString({value: source.display}, options); }
    if (source['_display']) {
      if (this.display) { this.display.addExtendedProperties(source._display!); }
      else { this.display = new fhir.FhirString(source._display as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Reference' }
    iss.push(...this.vOS('reference',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('display',exp));
    return iss;
  }

  /**
   * Create a reference from an existing resource
   */
   static fromResource(source:fhir.FhirResource, baseUrl:string=''):Reference {
    if (baseUrl.endsWith('/')) {
      return new Reference({
        type: source.resourceType ?? undefined,
        reference: baseUrl + source.resourceType + '/' + source.id,
      });
    }

    return new Reference({
      type: source.resourceType ?? undefined,
      reference: ((baseUrl.length > 0) ? (baseUrl + '/') : '') + source.resourceType + '/' + source.id,
    });
  }
}
