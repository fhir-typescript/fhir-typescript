// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Extension

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Extension type.
 */
export interface ExtensionArgs extends fhir.FhirElementArgs {
  /**
   * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
   */
  url: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Extension.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  value?: fhir.FhirBase64Binary|fhir.FhirBoolean|fhir.FhirCanonical|fhir.FhirCode|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirDecimal|fhir.FhirId|fhir.FhirInstant|fhir.FhirInteger|fhir.FhirMarkdown|fhir.FhirOid|fhir.FhirPositiveInt|fhir.FhirString|fhir.FhirTime|fhir.FhirUnsignedInt|fhir.FhirUri|fhir.FhirUrl|fhir.FhirUuid|fhir.Address|fhir.Age|fhir.Annotation|fhir.Attachment|fhir.CodeableConcept|fhir.CodeableReference|fhir.Coding|fhir.ContactPoint|fhir.Count|fhir.Distance|fhir.Duration|fhir.HumanName|fhir.Identifier|fhir.Money|fhir.Period|fhir.Quantity|fhir.Range|fhir.Ratio|fhir.RatioRange|fhir.Reference|fhir.SampledData|fhir.Signature|fhir.Timing|fhir.ContactDetail|fhir.Contributor|fhir.DataRequirement|fhir.Expression|fhir.ParameterDefinition|fhir.RelatedArtifact|fhir.TriggerDefinition|fhir.UsageContext|fhir.Dosage|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: fhir.FhirCanonical|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCode?: fhir.FhirCode|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDate?: fhir.FhirDate|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueId?: fhir.FhirId|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: fhir.FhirInstant|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: fhir.FhirInteger|number|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: fhir.FhirMarkdown|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueOid?: fhir.FhirOid|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: fhir.FhirString|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTime?: fhir.FhirTime|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUri?: fhir.FhirUri|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: fhir.FhirUrl|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: fhir.FhirUuid|string|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: fhir.AddressArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAge?: fhir.AgeArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: fhir.AnnotationArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableReference?: fhir.CodeableReferenceArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: fhir.CodingArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: fhir.ContactPointArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCount?: fhir.CountArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: fhir.DistanceArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: fhir.DurationArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: fhir.HumanNameArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: fhir.MoneyArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: fhir.RatioArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatioRange?: fhir.RatioRangeArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: fhir.SampledDataArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: fhir.SignatureArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: fhir.TimingArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: fhir.ContactDetailArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: fhir.ContributorArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: fhir.DataRequirementArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: fhir.ExpressionArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: fhir.ParameterDefinitionArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: fhir.RelatedArtifactArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: fhir.TriggerDefinitionArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: fhir.UsageContextArgs|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: fhir.DosageArgs|undefined;
}

/**
 * Optional Extension Element - found in all resources.
 */
export class Extension extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Extension';
  /**
   * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
   */
  public url: fhir.FhirString|null;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  public value?: (fhir.FhirBase64Binary|fhir.FhirBoolean|fhir.FhirCanonical|fhir.FhirCode|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirDecimal|fhir.FhirId|fhir.FhirInstant|fhir.FhirInteger|fhir.FhirMarkdown|fhir.FhirOid|fhir.FhirPositiveInt|fhir.FhirString|fhir.FhirTime|fhir.FhirUnsignedInt|fhir.FhirUri|fhir.FhirUrl|fhir.FhirUuid|fhir.Address|fhir.Age|fhir.Annotation|fhir.Attachment|fhir.CodeableConcept|fhir.CodeableReference|fhir.Coding|fhir.ContactPoint|fhir.Count|fhir.Distance|fhir.Duration|fhir.HumanName|fhir.Identifier|fhir.Money|fhir.Period|fhir.Quantity|fhir.Range|fhir.Ratio|fhir.RatioRange|fhir.Reference|fhir.SampledData|fhir.Signature|fhir.Timing|fhir.ContactDetail|fhir.Contributor|fhir.DataRequirement|fhir.Expression|fhir.ParameterDefinition|fhir.RelatedArtifact|fhir.TriggerDefinition|fhir.UsageContext|fhir.Dosage)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Extension.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for Extension - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ExtensionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['url']) { this.url = new fhir.FhirString({value: source.url}); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirString(source._url as Partial<fhir.FhirStringArgs>); }
    }
    if (source['value']) { this.value = source.value; }
    else if (source['valueBase64Binary']) { this.value = new fhir.FhirBase64Binary({value: source.valueBase64Binary}); }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
    else if (source['valueCanonical']) { this.value = new fhir.FhirCanonical({value: source.valueCanonical}); }
    else if (source['valueCode']) { this.value = new fhir.FhirCode({value: source.valueCode}); }
    else if (source['valueDate']) { this.value = new fhir.FhirDate({value: source.valueDate}); }
    else if (source['valueDateTime']) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}); }
    else if (source['valueDecimal']) { this.value = new fhir.FhirDecimal({value: source.valueDecimal}); }
    else if (source['valueId']) { this.value = new fhir.FhirId({value: source.valueId}); }
    else if (source['valueInstant']) { this.value = new fhir.FhirInstant({value: source.valueInstant}); }
    else if (source['valueInteger']) { this.value = new fhir.FhirInteger({value: source.valueInteger}); }
    else if (source['valueMarkdown']) { this.value = new fhir.FhirMarkdown({value: source.valueMarkdown}); }
    else if (source['valueOid']) { this.value = new fhir.FhirOid({value: source.valueOid}); }
    else if (source['valuePositiveInt']) { this.value = new fhir.FhirPositiveInt({value: source.valuePositiveInt}); }
    else if (source['valueString']) { this.value = new fhir.FhirString({value: source.valueString}); }
    else if (source['valueTime']) { this.value = new fhir.FhirTime({value: source.valueTime}); }
    else if (source['valueUnsignedInt']) { this.value = new fhir.FhirUnsignedInt({value: source.valueUnsignedInt}); }
    else if (source['valueUri']) { this.value = new fhir.FhirUri({value: source.valueUri}); }
    else if (source['valueUrl']) { this.value = new fhir.FhirUrl({value: source.valueUrl}); }
    else if (source['valueUuid']) { this.value = new fhir.FhirUuid({value: source.valueUuid}); }
    else if (source['valueAddress']) { this.value = new fhir.Address(source.valueAddress); }
    else if (source['valueAge']) { this.value = new fhir.Age(source.valueAge); }
    else if (source['valueAnnotation']) { this.value = new fhir.Annotation(source.valueAnnotation); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment); }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueCodeableReference']) { this.value = new fhir.CodeableReference(source.valueCodeableReference); }
    else if (source['valueCoding']) { this.value = new fhir.Coding(source.valueCoding); }
    else if (source['valueContactPoint']) { this.value = new fhir.ContactPoint(source.valueContactPoint); }
    else if (source['valueCount']) { this.value = new fhir.Count(source.valueCount); }
    else if (source['valueDistance']) { this.value = new fhir.Distance(source.valueDistance); }
    else if (source['valueDuration']) { this.value = new fhir.Duration(source.valueDuration); }
    else if (source['valueHumanName']) { this.value = new fhir.HumanName(source.valueHumanName); }
    else if (source['valueIdentifier']) { this.value = new fhir.Identifier(source.valueIdentifier); }
    else if (source['valueMoney']) { this.value = new fhir.Money(source.valueMoney); }
    else if (source['valuePeriod']) { this.value = new fhir.Period(source.valuePeriod); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
    else if (source['valueRatio']) { this.value = new fhir.Ratio(source.valueRatio); }
    else if (source['valueRatioRange']) { this.value = new fhir.RatioRange(source.valueRatioRange); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference); }
    else if (source['valueSampledData']) { this.value = new fhir.SampledData(source.valueSampledData); }
    else if (source['valueSignature']) { this.value = new fhir.Signature(source.valueSignature); }
    else if (source['valueTiming']) { this.value = new fhir.Timing(source.valueTiming); }
    else if (source['valueContactDetail']) { this.value = new fhir.ContactDetail(source.valueContactDetail); }
    else if (source['valueContributor']) { this.value = new fhir.Contributor(source.valueContributor); }
    else if (source['valueDataRequirement']) { this.value = new fhir.DataRequirement(source.valueDataRequirement); }
    else if (source['valueExpression']) { this.value = new fhir.Expression(source.valueExpression); }
    else if (source['valueParameterDefinition']) { this.value = new fhir.ParameterDefinition(source.valueParameterDefinition); }
    else if (source['valueRelatedArtifact']) { this.value = new fhir.RelatedArtifact(source.valueRelatedArtifact); }
    else if (source['valueTriggerDefinition']) { this.value = new fhir.TriggerDefinition(source.valueTriggerDefinition); }
    else if (source['valueUsageContext']) { this.value = new fhir.UsageContext(source.valueUsageContext); }
    else if (source['valueDosage']) { this.value = new fhir.Dosage(source.valueDosage); }
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
