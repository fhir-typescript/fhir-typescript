// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Signature

import * as fhir from '../fhir.js';

// @ts-ignore
import { SignatureTypeCodes,  SignatureTypeCodeType } from '../fhirValueSets/SignatureTypeCodes.js';
// @ts-ignore
import { SignatureTypeVsValidation } from '../fhirValueSets/SignatureTypeVsValidation.js';
/**
 * Valid arguments for the Signature type.
 */
export interface SignatureArgs extends fhir.FhirElementArgs {
  /**
   * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
   */
  type: fhir.CodingArgs[]|null;
  /**
   * This should agree with the information in the signature.
   */
  when: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Signature.when
   */
  _when?:fhir.FhirElementArgs;
  /**
   * This should agree with the information in the signature.
   */
  who: fhir.ReferenceArgs|null;
  /**
   * The party that can't sign. For example a child.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
   */
  targetFormat?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Signature.targetFormat
   */
  _targetFormat?:fhir.FhirElementArgs;
  /**
   * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
   */
  sigFormat?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Signature.sigFormat
   */
  _sigFormat?:fhir.FhirElementArgs;
  /**
   * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
   */
  data?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: Signature.data
   */
  _data?:fhir.FhirElementArgs;
}

/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export class Signature extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Signature';
  /**
   * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
   */
  public type: fhir.Coding[];
  /**
   * This should agree with the information in the signature.
   */
  public when: fhir.FhirInstant|null;
  /**
   * This should agree with the information in the signature.
   */
  public who: fhir.Reference|null;
  /**
   * The party that can't sign. For example a child.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
   */
  public targetFormat?: fhir.FhirCode|undefined;
  /**
   * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
   */
  public sigFormat?: fhir.FhirCode|undefined;
  /**
   * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
   */
  public data?: fhir.FhirBase64Binary|undefined;
  /**
   * Default constructor for Signature - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SignatureArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type.map((x) => new fhir.Coding(x, options)); }
    else { this.type = []; }
    if (source['when'] !== undefined) { this.when = new fhir.FhirInstant({value: source.when}, options); }
    else { this.when = null; }
    if (source['_when']) {
      if (this.when) { this.when.addExtendedProperties(source._when!); }
      else { this.when = new fhir.FhirInstant(source._when as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['who']) { this.who = new fhir.Reference(source.who, options); }
    else { this.who = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf, options); }
    if (source['targetFormat'] !== undefined) { this.targetFormat = new fhir.FhirCode({value: source.targetFormat}, options); }
    if (source['_targetFormat']) {
      if (this.targetFormat) { this.targetFormat.addExtendedProperties(source._targetFormat!); }
      else { this.targetFormat = new fhir.FhirCode(source._targetFormat as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['sigFormat'] !== undefined) { this.sigFormat = new fhir.FhirCode({value: source.sigFormat}, options); }
    if (source['_sigFormat']) {
      if (this.sigFormat) { this.sigFormat.addExtendedProperties(source._sigFormat!); }
      else { this.sigFormat = new fhir.FhirCode(source._sigFormat as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['data'] !== undefined) { this.data = new fhir.FhirBase64Binary({value: source.data}, options); }
    if (source['_data']) {
      if (this.data) { this.data.addExtendedProperties(source._data!); }
      else { this.data = new fhir.FhirBase64Binary(source._data as Partial<fhir.FhirBase64BinaryArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Signature' }
    iss.push(...this.vRA('type',exp));
    iss.push(...this.vRS('when',exp));
    iss.push(...this.vRS('who',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    iss.push(...this.vOS('targetFormat',exp));
    iss.push(...this.vOS('sigFormat',exp));
    iss.push(...this.vOS('data',exp));
    return iss;
  }
}
