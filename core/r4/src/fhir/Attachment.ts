// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Attachment

import * as fhir from '../fhir.js';

// @ts-ignore
import { LanguagesCodings, LanguagesCodingType,} from '../fhirValueSets/LanguagesCodings.js';
// @ts-ignore
import { LanguagesCodes,  LanguagesCodeType } from '../fhirValueSets/LanguagesCodes.js';
/**
 * Valid arguments for the Attachment type.
 */
export interface AttachmentArgs extends fhir.FhirElementArgs {
  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  contentType?: fhir.FhirCode|string|undefined;
  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  language?: fhir.FhirCode|string|undefined;
  /**
   * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
   */
  data?: fhir.FhirBase64Binary|string|undefined;
  /**
   * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
   */
  url?: fhir.FhirUrl|string|undefined;
  /**
   * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
   */
  size?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
   */
  hash?: fhir.FhirBase64Binary|string|undefined;
  /**
   * A label or set of text to display in place of the data.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * The date that the attachment was first created.
   */
  creation?: fhir.FhirDateTime|string|undefined;
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
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  public contentType?: fhir.FhirCode|undefined;
  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  public language?: fhir.FhirCode|undefined;
  /**
   * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
   */
  public data?: fhir.FhirBase64Binary|undefined;
  /**
   * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
   */
  public url?: fhir.FhirUrl|undefined;
  /**
   * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
   */
  public size?: fhir.FhirUnsignedInt|undefined;
  /**
   * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
   */
  public hash?: fhir.FhirBase64Binary|undefined;
  /**
   * A label or set of text to display in place of the data.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The date that the attachment was first created.
   */
  public creation?: fhir.FhirDateTime|undefined;
  /**
   * Default constructor for Attachment - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AttachmentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['contentType']) { this.contentType = new fhir.FhirCode({value: source.contentType}); }
    if (source['language']) { this.language = new fhir.FhirCode({value: source.language}); }
    if (source['data']) { this.data = new fhir.FhirBase64Binary({value: source.data}); }
    if (source['url']) { this.url = new fhir.FhirUrl({value: source.url}); }
    if (source['size']) { this.size = new fhir.FhirUnsignedInt({value: source.size}); }
    if (source['hash']) { this.hash = new fhir.FhirBase64Binary({value: source.hash}); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['creation']) { this.creation = new fhir.FhirDateTime({value: source.creation}); }
  }
  /**
   * Preferred-bound Value Set for language (Attachment.language)
   */
  public static get languagePreferredCodings() {
    return LanguagesCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["contentType"]) { issues.push(...this.contentType.doModelValidation()); }
    if (this["language"]) { issues.push(...this.language.doModelValidation()); }
    if (this["data"]) { issues.push(...this.data.doModelValidation()); }
    if (this["url"]) { issues.push(...this.url.doModelValidation()); }
    if (this["size"]) { issues.push(...this.size.doModelValidation()); }
    if (this["hash"]) { issues.push(...this.hash.doModelValidation()); }
    if (this["title"]) { issues.push(...this.title.doModelValidation()); }
    if (this["creation"]) { issues.push(...this.creation.doModelValidation()); }
    return issues;
  }
}
