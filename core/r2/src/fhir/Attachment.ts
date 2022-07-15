// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Attachment

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Attachment type.
 */
export interface AttachmentArgs extends fhir.FhirElementArgs {
  /**
   * Processors of the data need to be able to know how to interpret the data.
   */
  contentType?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.contentType
   */
  _contentType?:fhir.FhirElementArgs;
  /**
   * Users need to be able to choose between the languages in a set of attachments.
   */
  language?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.language
   */
  _language?:fhir.FhirElementArgs;
  /**
   * The data needs to able to be transmitted inline.
   */
  data?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.data
   */
  _data?:fhir.FhirElementArgs;
  /**
   * The data needs to be transmitted by reference.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Representing the size allows applications to determine whether they should fetch the content automatically in advance, or refuse to fetch it at all.
   */
  size?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: Attachment.size
   */
  _size?:fhir.FhirElementArgs;
  /**
   * Included so that applications can verify that the contents of a location have not changed and so that a signature of the content can implicitly sign the content of an image without having to include the data in the instance or reference the url in the signature.
   */
  hash?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.hash
   */
  _hash?:fhir.FhirElementArgs;
  /**
   * Applications need a label to display to a human user in place of the actual data if the data cannot be rendered or perceived by the viewer.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * This is often tracked as an integrity issue for use of the attachment.
   */
  creation?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Attachment.creation
   */
  _creation?:fhir.FhirElementArgs;
}

/**
 * For referring to data content defined in other formats.
 */
export class Attachment extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Attachment';
  /**
   * Processors of the data need to be able to know how to interpret the data.
   */
  public contentType?: fhir.FhirCode|undefined;
  /**
   * Users need to be able to choose between the languages in a set of attachments.
   */
  public language?: fhir.FhirCode|undefined;
  /**
   * The data needs to able to be transmitted inline.
   */
  public data?: fhir.FhirBase64Binary|undefined;
  /**
   * The data needs to be transmitted by reference.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Representing the size allows applications to determine whether they should fetch the content automatically in advance, or refuse to fetch it at all.
   */
  public size?: fhir.FhirUnsignedInt|undefined;
  /**
   * Included so that applications can verify that the contents of a location have not changed and so that a signature of the content can implicitly sign the content of an image without having to include the data in the instance or reference the url in the signature.
   */
  public hash?: fhir.FhirBase64Binary|undefined;
  /**
   * Applications need a label to display to a human user in place of the actual data if the data cannot be rendered or perceived by the viewer.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * This is often tracked as an integrity issue for use of the attachment.
   */
  public creation?: fhir.FhirDateTime|undefined;
  /**
   * Default constructor for Attachment - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AttachmentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['contentType']) { this.contentType = new fhir.FhirCode({value: source.contentType}); }
    if (source['_contentType']) {
      if (this.contentType) { this.contentType.addExtendedProperties(source._contentType!); }
      else { this.contentType = new fhir.FhirCode(source._contentType as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['language']) { this.language = new fhir.FhirCode({value: source.language}); }
    if (source['_language']) {
      if (this.language) { this.language.addExtendedProperties(source._language!); }
      else { this.language = new fhir.FhirCode(source._language as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['data']) { this.data = new fhir.FhirBase64Binary({value: source.data}); }
    if (source['_data']) {
      if (this.data) { this.data.addExtendedProperties(source._data!); }
      else { this.data = new fhir.FhirBase64Binary(source._data as Partial<fhir.FhirBase64BinaryArgs>); }
    }
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['size']) { this.size = new fhir.FhirUnsignedInt({value: source.size}); }
    if (source['_size']) {
      if (this.size) { this.size.addExtendedProperties(source._size!); }
      else { this.size = new fhir.FhirUnsignedInt(source._size as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['hash']) { this.hash = new fhir.FhirBase64Binary({value: source.hash}); }
    if (source['_hash']) {
      if (this.hash) { this.hash.addExtendedProperties(source._hash!); }
      else { this.hash = new fhir.FhirBase64Binary(source._hash as Partial<fhir.FhirBase64BinaryArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
    if (source['creation']) { this.creation = new fhir.FhirDateTime({value: source.creation}); }
    if (source['_creation']) {
      if (this.creation) { this.creation.addExtendedProperties(source._creation!); }
      else { this.creation = new fhir.FhirDateTime(source._creation as Partial<fhir.FhirDateTimeArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Attachment' }
    this.vOS('contentType',exp)
    this.vOS('language',exp)
    this.vOS('data',exp)
    this.vOS('url',exp)
    this.vOS('size',exp)
    this.vOS('hash',exp)
    this.vOS('title',exp)
    this.vOS('creation',exp)
    return issues;
  }
}
