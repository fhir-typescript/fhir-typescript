// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Parameters

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the ParametersParameter type.
 */
export interface ParametersParameterArgs extends fhir.BackboneElementArgs {
  /**
   * The name of the parameter (reference to the operation definition).
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Parameters.parameter.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Conveys the content if the parameter is a data type.
   */
  value?: fhir.FhirBase64Binary|fhir.FhirBoolean|fhir.FhirCanonical|fhir.FhirCode|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirDecimal|fhir.FhirId|fhir.FhirInstant|fhir.FhirInteger|fhir.FhirMarkdown|fhir.FhirOid|fhir.FhirPositiveInt|fhir.FhirString|fhir.FhirTime|fhir.FhirUnsignedInt|fhir.FhirUri|fhir.FhirUrl|fhir.FhirUuid|fhir.Address|fhir.Age|fhir.Annotation|fhir.Attachment|fhir.CodeableConcept|fhir.Coding|fhir.ContactPoint|fhir.Count|fhir.Distance|fhir.Duration|fhir.HumanName|fhir.Identifier|fhir.Money|fhir.Period|fhir.Quantity|fhir.Range|fhir.Ratio|fhir.Reference|fhir.SampledData|fhir.Signature|fhir.Timing|fhir.ContactDetail|fhir.Contributor|fhir.DataRequirement|fhir.Expression|fhir.ParameterDefinition|fhir.RelatedArtifact|fhir.TriggerDefinition|fhir.UsageContext|fhir.Dosage|fhir.Meta|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueBase64Binary?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueCanonical?: fhir.FhirCanonical|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueCode?: fhir.FhirCode|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDate?: fhir.FhirDate|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueId?: fhir.FhirId|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueInstant?: fhir.FhirInstant|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueInteger?: fhir.FhirInteger|number|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueMarkdown?: fhir.FhirMarkdown|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueOid?: fhir.FhirOid|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valuePositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueString?: fhir.FhirString|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueTime?: fhir.FhirTime|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueUri?: fhir.FhirUri|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueUrl?: fhir.FhirUrl|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueUuid?: fhir.FhirUuid|string|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueAddress?: fhir.AddressArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueAge?: fhir.AgeArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueAnnotation?: fhir.AnnotationArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueCoding?: fhir.CodingArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueContactPoint?: fhir.ContactPointArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueCount?: fhir.CountArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDistance?: fhir.DistanceArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDuration?: fhir.DurationArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueHumanName?: fhir.HumanNameArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueMoney?: fhir.MoneyArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valuePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueRatio?: fhir.RatioArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueSampledData?: fhir.SampledDataArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueSignature?: fhir.SignatureArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueTiming?: fhir.TimingArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueContactDetail?: fhir.ContactDetailArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueContributor?: fhir.ContributorArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDataRequirement?: fhir.DataRequirementArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueExpression?: fhir.ExpressionArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueParameterDefinition?: fhir.ParameterDefinitionArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueRelatedArtifact?: fhir.RelatedArtifactArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueTriggerDefinition?: fhir.TriggerDefinitionArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueUsageContext?: fhir.UsageContextArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueDosage?: fhir.DosageArgs|undefined;
  /**
   * Conveys the content if the parameter is a data type.
   */
  valueMeta?: fhir.MetaArgs|undefined;
  /**
   * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
   */
  resource?: fhir.ResourceArgs|any|undefined;
  /**
   * Only one level of nested parameters is allowed.
   */
  part?: fhir.ParametersParameterArgs[]|undefined;
}

/**
 * A parameter passed to or received from the operation.
 */
export class ParametersParameter extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ParametersParameter';
  /**
   * The name of the parameter (reference to the operation definition).
   */
  public name: fhir.FhirString|null;
  /**
   * Conveys the content if the parameter is a data type.
   */
  public value?: (fhir.FhirBase64Binary|fhir.FhirBoolean|fhir.FhirCanonical|fhir.FhirCode|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirDecimal|fhir.FhirId|fhir.FhirInstant|fhir.FhirInteger|fhir.FhirMarkdown|fhir.FhirOid|fhir.FhirPositiveInt|fhir.FhirString|fhir.FhirTime|fhir.FhirUnsignedInt|fhir.FhirUri|fhir.FhirUrl|fhir.FhirUuid|fhir.Address|fhir.Age|fhir.Annotation|fhir.Attachment|fhir.CodeableConcept|fhir.Coding|fhir.ContactPoint|fhir.Count|fhir.Distance|fhir.Duration|fhir.HumanName|fhir.Identifier|fhir.Money|fhir.Period|fhir.Quantity|fhir.Range|fhir.Ratio|fhir.Reference|fhir.SampledData|fhir.Signature|fhir.Timing|fhir.ContactDetail|fhir.Contributor|fhir.DataRequirement|fhir.Expression|fhir.ParameterDefinition|fhir.RelatedArtifact|fhir.TriggerDefinition|fhir.UsageContext|fhir.Dosage|fhir.Meta)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Parameters.parameter.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
   */
  public resource?: fhir.FhirResource|undefined;
  /**
   * Only one level of nested parameters is allowed.
   */
  public part: fhir.ParametersParameter[];
  /**
   * Default constructor for ParametersParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ParametersParameterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
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
    else if (source['valueMeta']) { this.value = new fhir.Meta(source.valueMeta); }
    if (source['resource']) { this.resource = (fhir.resourceFactory(source.resource) ?? undefined); }
    if (source['part']) { this.part = source.part.map((x) => new fhir.ParametersParameter(x)); }
    else { this.part = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Parameters.parameter' }
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOS('resource',exp));
    iss.push(...this.vOA('part',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Parameters type.
 */
export interface ParametersArgs extends fhir.ResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Parameters"|undefined;
  /**
   * A parameter passed to or received from the operation.
   */
  parameter?: fhir.ParametersParameterArgs[]|undefined;
}

/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export class Parameters extends fhir.Resource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Parameters';
  /**
   * Resource Type Name
   */
  public override resourceType: "Parameters";
  /**
   * A parameter passed to or received from the operation.
   */
  public parameter: fhir.ParametersParameter[];
  /**
   * Default constructor for Parameters - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ParametersArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Parameters';
    if (source['parameter']) { this.parameter = source.parameter.map((x) => new fhir.ParametersParameter(x)); }
    else { this.parameter = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Parameters' }
    iss.push(...this.vOA('parameter',exp));
    return iss;
  }
}
