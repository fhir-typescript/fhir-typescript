// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Binary

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Binary type.
 */
export interface BinaryArgs extends fhir.ResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Binary"|undefined;
  /**
   * MimeType of the binary content represented as a standard MimeType (BCP 13).
   */
  contentType: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Binary.contentType
   */
  _contentType?:fhir.FhirElementArgs;
  /**
   * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
   */
  securityContext?: fhir.ReferenceArgs|undefined;
  /**
   * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
   */
  data?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: Binary.data
   */
  _data?:fhir.FhirElementArgs;
}

/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export class Binary extends fhir.Resource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Binary';
  /**
   * Resource Type Name
   */
  public override resourceType: "Binary";
  /**
   * MimeType of the binary content represented as a standard MimeType (BCP 13).
   */
  public contentType: fhir.FhirCode|null;
  /**
   * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
   */
  public securityContext?: fhir.Reference|undefined;
  /**
   * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
   */
  public data?: fhir.FhirBase64Binary|undefined;
  /**
   * Default constructor for Binary - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BinaryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Binary';
    if (source['contentType']) { this.contentType = new fhir.FhirCode({value: source.contentType}); }
    else { this.contentType = null; }
    if (source['_contentType']) {
      if (this.contentType) { this.contentType.addExtendedProperties(source._contentType!); }
      else { this.contentType = new fhir.FhirCode(source._contentType as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['securityContext']) { this.securityContext = new fhir.Reference(source.securityContext); }
    if (source['data']) { this.data = new fhir.FhirBase64Binary({value: source.data}); }
    if (source['_data']) {
      if (this.data) { this.data.addExtendedProperties(source._data!); }
      else { this.data = new fhir.FhirBase64Binary(source._data as Partial<fhir.FhirBase64BinaryArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Binary' }
    this.vRS('resourceType',exp)
    this.vRS('contentType',exp)
    this.vOS('securityContext',exp)
    this.vOS('data',exp)
    return issues;
  }
}
