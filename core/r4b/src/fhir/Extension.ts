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
    if (source['url'] !== undefined) { this.url = new fhir.FhirString({value: source.url}, options); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirString(source._url as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['value']) { this.value = source.value; }
    else if (source['valueBase64Binary'] !== undefined) { this.value = new fhir.FhirBase64Binary({value: source.valueBase64Binary}, options); }
    else if (source['valueBoolean'] !== undefined) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}, options); }
    else if (source['valueCanonical'] !== undefined) { this.value = new fhir.FhirCanonical({value: source.valueCanonical}, options); }
    else if (source['valueCode'] !== undefined) { this.value = new fhir.FhirCode({value: source.valueCode}, options); }
    else if (source['valueDate'] !== undefined) { this.value = new fhir.FhirDate({value: source.valueDate}, options); }
    else if (source['valueDateTime'] !== undefined) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}, options); }
    else if (source['valueDecimal'] !== undefined) { this.value = new fhir.FhirDecimal({value: source.valueDecimal}, options); }
    else if (source['valueId'] !== undefined) { this.value = new fhir.FhirId({value: source.valueId}, options); }
    else if (source['valueInstant'] !== undefined) { this.value = new fhir.FhirInstant({value: source.valueInstant}, options); }
    else if (source['valueInteger'] !== undefined) { this.value = new fhir.FhirInteger({value: source.valueInteger}, options); }
    else if (source['valueMarkdown'] !== undefined) { this.value = new fhir.FhirMarkdown({value: source.valueMarkdown}, options); }
    else if (source['valueOid'] !== undefined) { this.value = new fhir.FhirOid({value: source.valueOid}, options); }
    else if (source['valuePositiveInt'] !== undefined) { this.value = new fhir.FhirPositiveInt({value: source.valuePositiveInt}, options); }
    else if (source['valueString'] !== undefined) { this.value = new fhir.FhirString({value: source.valueString}, options); }
    else if (source['valueTime'] !== undefined) { this.value = new fhir.FhirTime({value: source.valueTime}, options); }
    else if (source['valueUnsignedInt'] !== undefined) { this.value = new fhir.FhirUnsignedInt({value: source.valueUnsignedInt}, options); }
    else if (source['valueUri'] !== undefined) { this.value = new fhir.FhirUri({value: source.valueUri}, options); }
    else if (source['valueUrl'] !== undefined) { this.value = new fhir.FhirUrl({value: source.valueUrl}, options); }
    else if (source['valueUuid'] !== undefined) { this.value = new fhir.FhirUuid({value: source.valueUuid}, options); }
    else if (source['valueAddress']) { this.value = new fhir.Address(source.valueAddress, options); }
    else if (source['valueAge']) { this.value = new fhir.Age(source.valueAge, options); }
    else if (source['valueAnnotation']) { this.value = new fhir.Annotation(source.valueAnnotation, options); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment, options); }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options); }
    else if (source['valueCodeableReference']) { this.value = new fhir.CodeableReference(source.valueCodeableReference, options); }
    else if (source['valueCoding']) { this.value = new fhir.Coding(source.valueCoding, options); }
    else if (source['valueContactPoint']) { this.value = new fhir.ContactPoint(source.valueContactPoint, options); }
    else if (source['valueCount']) { this.value = new fhir.Count(source.valueCount, options); }
    else if (source['valueDistance']) { this.value = new fhir.Distance(source.valueDistance, options); }
    else if (source['valueDuration']) { this.value = new fhir.Duration(source.valueDuration, options); }
    else if (source['valueHumanName']) { this.value = new fhir.HumanName(source.valueHumanName, options); }
    else if (source['valueIdentifier']) { this.value = new fhir.Identifier(source.valueIdentifier, options); }
    else if (source['valueMoney']) { this.value = new fhir.Money(source.valueMoney, options); }
    else if (source['valuePeriod']) { this.value = new fhir.Period(source.valuePeriod, options); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity, options); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange, options); }
    else if (source['valueRatio']) { this.value = new fhir.Ratio(source.valueRatio, options); }
    else if (source['valueRatioRange']) { this.value = new fhir.RatioRange(source.valueRatioRange, options); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference, options); }
    else if (source['valueSampledData']) { this.value = new fhir.SampledData(source.valueSampledData, options); }
    else if (source['valueSignature']) { this.value = new fhir.Signature(source.valueSignature, options); }
    else if (source['valueTiming']) { this.value = new fhir.Timing(source.valueTiming, options); }
    else if (source['valueContactDetail']) { this.value = new fhir.ContactDetail(source.valueContactDetail, options); }
    else if (source['valueContributor']) { this.value = new fhir.Contributor(source.valueContributor, options); }
    else if (source['valueDataRequirement']) { this.value = new fhir.DataRequirement(source.valueDataRequirement, options); }
    else if (source['valueExpression']) { this.value = new fhir.Expression(source.valueExpression, options); }
    else if (source['valueParameterDefinition']) { this.value = new fhir.ParameterDefinition(source.valueParameterDefinition, options); }
    else if (source['valueRelatedArtifact']) { this.value = new fhir.RelatedArtifact(source.valueRelatedArtifact, options); }
    else if (source['valueTriggerDefinition']) { this.value = new fhir.TriggerDefinition(source.valueTriggerDefinition, options); }
    else if (source['valueUsageContext']) { this.value = new fhir.UsageContext(source.valueUsageContext, options); }
    else if (source['valueDosage']) { this.value = new fhir.Dosage(source.valueDosage, options); }
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
