// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Extension

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Extension type.
 */
export interface ExtensionArgs extends fhir.FhirElementArgs {
  /**
   * Source of the definition for the extension code - a logical name or a URL.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Extension.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  value?: fhir.FhirBoolean|fhir.FhirInteger|fhir.FhirDecimal|fhir.FhirBase64Binary|fhir.FhirInstant|fhir.FhirString|fhir.FhirUri|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirTime|fhir.FhirCode|fhir.FhirOid|fhir.FhirId|fhir.FhirUnsignedInt|fhir.FhirPositiveInt|fhir.FhirMarkdown|fhir.Annotation|fhir.Attachment|fhir.Identifier|fhir.CodeableConcept|fhir.Coding|fhir.Quantity|fhir.Range|fhir.Period|fhir.Ratio|fhir.SampledData|fhir.Signature|fhir.HumanName|fhir.Address|fhir.ContactPoint|fhir.Timing|fhir.Reference|fhir.Meta|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueInteger?: fhir.FhirInteger|number|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueBase64Binary?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueInstant?: fhir.FhirInstant|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueString?: fhir.FhirString|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueUri?: fhir.FhirUri|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueDate?: fhir.FhirDate|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueTime?: fhir.FhirTime|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueCode?: fhir.FhirCode|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueOid?: fhir.FhirOid|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueId?: fhir.FhirId|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valuePositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueMarkdown?: fhir.FhirMarkdown|string|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueAnnotation?: fhir.AnnotationArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueCoding?: fhir.CodingArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valuePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueRatio?: fhir.RatioArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueSampledData?: fhir.SampledDataArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueSignature?: fhir.SignatureArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueHumanName?: fhir.HumanNameArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueAddress?: fhir.AddressArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueContactPoint?: fhir.ContactPointArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueTiming?: fhir.TimingArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  valueMeta?: fhir.MetaArgs|undefined;
}

/**
 * Optional Extensions Element - found in all resources.
 */
export class Extension extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Extension';
  /**
   * Source of the definition for the extension code - a logical name or a URL.
   */
  public url: fhir.FhirUri|null;
  /**
   * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
   */
  public value?: (fhir.FhirBoolean|fhir.FhirInteger|fhir.FhirDecimal|fhir.FhirBase64Binary|fhir.FhirInstant|fhir.FhirString|fhir.FhirUri|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirTime|fhir.FhirCode|fhir.FhirOid|fhir.FhirId|fhir.FhirUnsignedInt|fhir.FhirPositiveInt|fhir.FhirMarkdown|fhir.Annotation|fhir.Attachment|fhir.Identifier|fhir.CodeableConcept|fhir.Coding|fhir.Quantity|fhir.Range|fhir.Period|fhir.Ratio|fhir.SampledData|fhir.Signature|fhir.HumanName|fhir.Address|fhir.ContactPoint|fhir.Timing|fhir.Reference|fhir.Meta)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Extension.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for Extension - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ExtensionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['value']) { this.value = source.value; }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
    else if (source['valueInteger']) { this.value = new fhir.FhirInteger({value: source.valueInteger}); }
    else if (source['valueDecimal']) { this.value = new fhir.FhirDecimal({value: source.valueDecimal}); }
    else if (source['valueBase64Binary']) { this.value = new fhir.FhirBase64Binary({value: source.valueBase64Binary}); }
    else if (source['valueInstant']) { this.value = new fhir.FhirInstant({value: source.valueInstant}); }
    else if (source['valueString']) { this.value = new fhir.FhirString({value: source.valueString}); }
    else if (source['valueUri']) { this.value = new fhir.FhirUri({value: source.valueUri}); }
    else if (source['valueDate']) { this.value = new fhir.FhirDate({value: source.valueDate}); }
    else if (source['valueDateTime']) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}); }
    else if (source['valueTime']) { this.value = new fhir.FhirTime({value: source.valueTime}); }
    else if (source['valueCode']) { this.value = new fhir.FhirCode({value: source.valueCode}); }
    else if (source['valueOid']) { this.value = new fhir.FhirOid({value: source.valueOid}); }
    else if (source['valueId']) { this.value = new fhir.FhirId({value: source.valueId}); }
    else if (source['valueUnsignedInt']) { this.value = new fhir.FhirUnsignedInt({value: source.valueUnsignedInt}); }
    else if (source['valuePositiveInt']) { this.value = new fhir.FhirPositiveInt({value: source.valuePositiveInt}); }
    else if (source['valueMarkdown']) { this.value = new fhir.FhirMarkdown({value: source.valueMarkdown}); }
    else if (source['valueAnnotation']) { this.value = new fhir.Annotation(source.valueAnnotation); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment); }
    else if (source['valueIdentifier']) { this.value = new fhir.Identifier(source.valueIdentifier); }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueCoding']) { this.value = new fhir.Coding(source.valueCoding); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
    else if (source['valuePeriod']) { this.value = new fhir.Period(source.valuePeriod); }
    else if (source['valueRatio']) { this.value = new fhir.Ratio(source.valueRatio); }
    else if (source['valueSampledData']) { this.value = new fhir.SampledData(source.valueSampledData); }
    else if (source['valueSignature']) { this.value = new fhir.Signature(source.valueSignature); }
    else if (source['valueHumanName']) { this.value = new fhir.HumanName(source.valueHumanName); }
    else if (source['valueAddress']) { this.value = new fhir.Address(source.valueAddress); }
    else if (source['valueContactPoint']) { this.value = new fhir.ContactPoint(source.valueContactPoint); }
    else if (source['valueTiming']) { this.value = new fhir.Timing(source.valueTiming); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference); }
    else if (source['valueMeta']) { this.value = new fhir.Meta(source.valueMeta); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Extension' }
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vOS('value',exp));
    return iss;
  }
}