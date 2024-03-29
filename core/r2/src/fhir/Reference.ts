// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Reference

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Reference type.
 */
export interface ReferenceArgs extends fhir.FhirElementArgs {
  /**
   * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
   */
  reference?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Reference.reference
   */
  _reference?:fhir.FhirElementArgs;
  /**
   * Plain text narrative that identifies the resource in addition to the resource reference.
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
   * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
   */
  public reference?: fhir.FhirString|undefined;
  /**
   * Plain text narrative that identifies the resource in addition to the resource reference.
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
    iss.push(...this.vOS('display',exp));
    return iss;
  }

  /**
   * Create a reference from an existing resource
   */
   static fromResource(source:fhir.FhirResource, baseUrl:string=''):Reference {
    if (baseUrl.endsWith('/')) {
      return new Reference({
        reference: baseUrl + source.resourceType + '/' + source.id,
      });
    }

    return new Reference({
      reference: ((baseUrl.length > 0) ? (baseUrl + '/') : '') + source.resourceType + '/' + source.id,
    });
  }
}
